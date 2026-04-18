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

if (!isset($_SESSION['agent_id'])) {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Agent not authenticated']);
    $conn->close();
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    $conn->close();
    exit;
}

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
if (strpos($contentType, 'application/json') !== false) {
    $input = json_decode(file_get_contents('php://input'), true) ?? [];
} else {
    $input = $_POST;
}

$agentId = (int)$_SESSION['agent_id'];
$requestId = (int)($input['request_id'] ?? 0);
$status = (string)($input['status'] ?? '');
$agentNote = trim((string)($input['agent_note'] ?? ''));

if ($requestId <= 0 || !in_array($status, ['approved', 'declined'], true)) {
    echo json_encode(['success' => false, 'message' => 'Invalid request update']);
    $conn->close();
    exit;
}

$requestStmt = $conn->prepare("
    SELECT tr.id, tr.user_id, tr.agent_id, tr.request_type, tr.amount, tr.status
    FROM transaction_requests tr
    WHERE tr.id = ? AND tr.agent_id = ?
    LIMIT 1
");
$requestStmt->bind_param("ii", $requestId, $agentId);
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
    echo json_encode(['success' => false, 'message' => 'This request has already been reviewed']);
    $conn->close();
    exit;
}

$updateStmt = $conn->prepare("
    UPDATE transaction_requests
    SET status = ?, agent_note = ?, reviewed_at = CURRENT_TIMESTAMP
    WHERE id = ? AND agent_id = ?
");
$updateStmt->bind_param("ssii", $status, $agentNote, $requestId, $agentId);
$updateStmt->execute();
$updateStmt->close();

$label = $request['request_type'] === 'cash_in' ? 'cash in' : 'cash out';
$decisionText = $status === 'approved' ? 'approved' : 'declined';
$message = "Your {$label} request #" . $requestId . " for " . number_format((float)$request['amount'], 2) . " was {$decisionText}.";
if ($agentNote !== '') {
    $message .= " Note: {$agentNote}";
}

$messageStmt = $conn->prepare("
    INSERT INTO messages (sender_id, sender_type, receiver_id, receiver_type, message)
    VALUES (?, 'agent', ?, 'user', ?)
");
$messageStmt->bind_param("iis", $agentId, $request['user_id'], $message);
$messageStmt->execute();
$messageStmt->close();

$payload = json_encode([
    'request_id' => $requestId,
    'status' => $status,
    'agent_note' => $agentNote,
    'amount' => (float)$request['amount'],
    'request_type' => $request['request_type']
], JSON_UNESCAPED_SLASHES);

$activityStmt = $conn->prepare("
    INSERT INTO player_activity_logs (user_id, agent_id, action_type, action_summary, action_payload)
    VALUES (?, ?, 'transaction_review', ?, ?)
");
$summary = "Agent {$decisionText} the {$label} request of " . number_format((float)$request['amount'], 2);
$activityStmt->bind_param("iiss", $request['user_id'], $agentId, $summary, $payload);
$activityStmt->execute();
$activityStmt->close();

echo json_encode(['success' => true, 'message' => "Request {$decisionText}"]);
$conn->close();
