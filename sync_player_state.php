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
$agentId = isset($input['agent_id']) ? (int)$input['agent_id'] : null;
$selectedAgentName = trim((string)($input['selected_agent_name'] ?? ''));
$currentBalance = round((float)($input['current_balance'] ?? 0), 2);
$currentWin = round((float)($input['current_win'] ?? 0), 2);
$cashIn = round((float)($input['total_cash_in'] ?? 0), 2);
$cashOut = round((float)($input['total_cash_out'] ?? 0), 2);
$lastAction = trim((string)($input['last_action'] ?? ''));
$actionSummary = trim((string)($input['action_summary'] ?? ''));
$actionPayload = $input['action_payload'] ?? null;

if ($actionPayload !== null && !is_string($actionPayload)) {
    $actionPayload = json_encode($actionPayload, JSON_UNESCAPED_SLASHES);
}

if ($agentId !== null && $agentId <= 0) {
    $agentId = null;
}

if ($agentId !== null) {
    $assignmentStmt = $conn->prepare("
        INSERT INTO player_agent_assignments (user_id, agent_id)
        VALUES (?, ?)
        ON DUPLICATE KEY UPDATE agent_id = VALUES(agent_id), updated_at = CURRENT_TIMESTAMP
    ");
    if ($assignmentStmt) {
        $assignmentStmt->bind_param("ii", $userId, $agentId);
        $assignmentStmt->execute();
        $assignmentStmt->close();
    }
}

$snapshotStmt = $conn->prepare("
    INSERT INTO player_state_snapshots (
        user_id,
        agent_id,
        selected_agent_name,
        current_balance,
        current_win,
        total_cash_in,
        total_cash_out,
        last_action,
        last_action_details
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
        agent_id = VALUES(agent_id),
        selected_agent_name = VALUES(selected_agent_name),
        current_balance = VALUES(current_balance),
        current_win = VALUES(current_win),
        total_cash_in = VALUES(total_cash_in),
        total_cash_out = VALUES(total_cash_out),
        last_action = VALUES(last_action),
        last_action_details = VALUES(last_action_details),
        updated_at = CURRENT_TIMESTAMP
");

if (!$snapshotStmt) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Unable to update player state']);
    $conn->close();
    exit;
}

$snapshotStmt->bind_param(
    "iisddddss",
    $userId,
    $agentId,
    $selectedAgentName,
    $currentBalance,
    $currentWin,
    $cashIn,
    $cashOut,
    $lastAction,
    $actionPayload
);
$snapshotStmt->execute();
$snapshotStmt->close();

if ($lastAction !== '' && $actionSummary !== '') {
    $activityStmt = $conn->prepare("
        INSERT INTO player_activity_logs (user_id, agent_id, action_type, action_summary, action_payload)
        VALUES (?, ?, ?, ?, ?)
    ");

    if ($activityStmt) {
        $activityStmt->bind_param("iisss", $userId, $agentId, $lastAction, $actionSummary, $actionPayload);
        $activityStmt->execute();
        $activityStmt->close();
    }
}

echo json_encode(['success' => true]);
$conn->close();
