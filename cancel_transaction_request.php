<?php
session_start();
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "spin_game";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
    exit;
}

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'User not authenticated']);
    $conn->close();
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    $conn->close();
    exit;
}

$requestId = (int)($_POST['request_id'] ?? 0);
$userId = (int)$_SESSION['user_id'];

if ($requestId <= 0) {
    echo json_encode(['success' => false, 'message' => 'Request ID is required']);
    $conn->close();
    exit;
}

$requestStmt = $conn->prepare("
    SELECT id, agent_id, request_type, amount, status
    FROM transaction_requests
    WHERE id = ? AND user_id = ?
    LIMIT 1
");
$requestStmt->bind_param("ii", $requestId, $userId);
$requestStmt->execute();
$requestResult = $requestStmt->get_result();
$request = $requestResult->fetch_assoc();
$requestStmt->close();

if (!$request) {
    echo json_encode(['success' => false, 'message' => 'Transaction request not found']);
    $conn->close();
    exit;
}

if ($request['status'] !== 'pending') {
    echo json_encode(['success' => false, 'message' => 'Only pending requests can be cancelled']);
    $conn->close();
    exit;
}

$updateStmt = $conn->prepare("
    UPDATE transaction_requests
    SET status = 'cancelled', cancelled_at = CURRENT_TIMESTAMP, reviewed_at = CURRENT_TIMESTAMP
    WHERE id = ? AND user_id = ?
");
$updateStmt->bind_param("ii", $requestId, $userId);
$updateStmt->execute();
$updateStmt->close();

$label = $request['request_type'] === 'cash_in' ? 'cash in' : 'cash out';
$message = "Player cancelled {$label} request #{$requestId} for " . number_format((float)$request['amount'], 2) . ".";

$messageStmt = $conn->prepare("
    INSERT INTO messages (sender_id, sender_type, receiver_id, receiver_type, message)
    VALUES (?, 'user', ?, 'agent', ?)
");
$messageStmt->bind_param("iis", $userId, $request['agent_id'], $message);
$messageStmt->execute();
$messageStmt->close();

$payload = json_encode([
    'request_id' => $requestId,
    'request_type' => $request['request_type'],
    'amount' => (float)$request['amount'],
    'status' => 'cancelled'
], JSON_UNESCAPED_SLASHES);

$activityStmt = $conn->prepare("
    INSERT INTO player_activity_logs (user_id, agent_id, action_type, action_summary, action_payload)
    VALUES (?, ?, 'transaction_cancelled', ?, ?)
");
$summary = "Player cancelled {$label} request of " . number_format((float)$request['amount'], 2);
$activityStmt->bind_param("iiss", $userId, $request['agent_id'], $summary, $payload);
$activityStmt->execute();
$activityStmt->close();

echo json_encode([
    'success' => true,
    'message' => 'Transaction request cancelled',
    'request' => [
        'id' => $requestId,
        'request_type' => $request['request_type'],
        'amount' => (float)$request['amount'],
        'status' => 'cancelled'
    ]
]);

$conn->close();
