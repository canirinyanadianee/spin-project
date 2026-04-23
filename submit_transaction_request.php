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

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';

if (strpos($contentType, 'application/json') !== false) {
    $input = json_decode(file_get_contents('php://input'), true) ?? [];
} else {
    $input = $_POST;
}

$userId = (int)$_SESSION['user_id'];
$agentId = (int)($input['agent_id'] ?? 0);
$requestType = (string)($input['request_type'] ?? '');
$amount = round((float)($input['amount'] ?? 0), 2);
$note = trim((string)($input['note'] ?? ''));

if ($agentId <= 0) {
    echo json_encode(['success' => false, 'message' => 'Select an agent first']);
    $conn->close();
    exit;
}

if (!in_array($requestType, ['cash_in', 'cash_out'], true)) {
    echo json_encode(['success' => false, 'message' => 'Invalid transaction type']);
    $conn->close();
    exit;
}

if ($amount <= 0) {
    echo json_encode(['success' => false, 'message' => 'Enter a valid amount']);
    $conn->close();
    exit;
}

if ($requestType === 'cash_out') {
    $balanceStmt = $conn->prepare("
        SELECT current_balance
        FROM player_state_snapshots
        WHERE user_id = ?
        LIMIT 1
    ");
    $balanceStmt->bind_param("i", $userId);
    $balanceStmt->execute();
    $balanceResult = $balanceStmt->get_result();
    $playerSnapshot = $balanceResult->fetch_assoc();
    $balanceStmt->close();

    $currentBalance = round((float)($playerSnapshot['current_balance'] ?? 0), 2);

    if ($amount > $currentBalance) {
        echo json_encode([
            'success' => false,
            'message' => 'Cash out failed because your balance is not enough'
        ]);
        $conn->close();
        exit;
    }
}

$agentExistsStmt = $conn->prepare("SELECT id, name FROM agents WHERE id = ?");
$agentExistsStmt->bind_param("i", $agentId);
$agentExistsStmt->execute();
$agentResult = $agentExistsStmt->get_result();
$agent = $agentResult->fetch_assoc();
$agentExistsStmt->close();

if (!$agent) {
    echo json_encode(['success' => false, 'message' => 'Selected agent was not found']);
    $conn->close();
    exit;
}

$assignmentStmt = $conn->prepare("
    INSERT INTO player_agent_assignments (user_id, agent_id)
    VALUES (?, ?)
    ON DUPLICATE KEY UPDATE agent_id = VALUES(agent_id), updated_at = CURRENT_TIMESTAMP
");
$assignmentStmt->bind_param("ii", $userId, $agentId);
$assignmentStmt->execute();
$assignmentStmt->close();

$insertStmt = $conn->prepare("
    INSERT INTO transaction_requests (user_id, agent_id, request_type, amount, note)
    VALUES (?, ?, ?, ?, ?)
");
$insertStmt->bind_param("iisds", $userId, $agentId, $requestType, $amount, $note);

if (!$insertStmt->execute()) {
    echo json_encode(['success' => false, 'message' => 'Unable to submit transaction request']);
    $insertStmt->close();
    $conn->close();
    exit;
}

$requestId = (int)$conn->insert_id;
$insertStmt->close();

$label = $requestType === 'cash_in' ? 'cash in' : 'cash out';
$message = "Transaction request #{$requestId}: {$label} for " . number_format($amount, 2);
if ($note !== '') {
    $message .= ". Note: {$note}";
}

$messageStmt = $conn->prepare("
    INSERT INTO messages (sender_id, sender_type, receiver_id, receiver_type, message)
    VALUES (?, 'user', ?, 'agent', ?)
");
$messageStmt->bind_param("iis", $userId, $agentId, $message);
$messageStmt->execute();
$messageStmt->close();

$activityPayload = json_encode([
    'request_id' => $requestId,
    'request_type' => $requestType,
    'amount' => $amount,
    'note' => $note
], JSON_UNESCAPED_SLASHES);

$activityStmt = $conn->prepare("
    INSERT INTO player_activity_logs (user_id, agent_id, action_type, action_summary, action_payload)
    VALUES (?, ?, 'transaction_request', ?, ?)
");
$summary = "Player submitted a {$label} request of " . number_format($amount, 2);
$activityStmt->bind_param("iiss", $userId, $agentId, $summary, $activityPayload);
$activityStmt->execute();
$activityStmt->close();

echo json_encode([
    'success' => true,
    'message' => 'Transaction request sent to your agent',
    'request' => [
        'id' => $requestId,
        'agent_name' => $agent['name'],
        'request_type' => $requestType,
        'amount' => $amount,
        'status' => 'pending'
    ],
    'balance_action' => $requestType === 'cash_out' ? 'hold_cash_out' : 'none'
]);

$conn->close();
