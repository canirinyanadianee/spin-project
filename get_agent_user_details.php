<?php
session_start();
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "spin_game";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Database connection failed']));
}

if (!isset($_SESSION['agent_id'])) {
    echo json_encode(['success' => false, 'message' => 'Agent not authenticated']);
    $conn->close();
    exit;
}

$agentId = (int)$_SESSION['agent_id'];
$userId = (int)($_GET['user_id'] ?? 0);

if ($userId <= 0) {
    echo json_encode(['success' => false, 'message' => 'User ID is required']);
    $conn->close();
    exit;
}

$accessStmt = $conn->prepare("
    SELECT u.id, u.phone, pas.current_balance, pas.current_win, pas.total_cash_in, pas.total_cash_out,
           pas.last_action, pas.last_action_details, pas.selected_agent_name, pas.updated_at
    FROM users u
    LEFT JOIN player_state_snapshots pas ON pas.user_id = u.id
    LEFT JOIN player_agent_assignments paa ON paa.user_id = u.id
    WHERE u.id = ?
      AND (
        paa.agent_id = ?
        OR EXISTS (
            SELECT 1 FROM messages m
            WHERE
                (m.sender_id = u.id AND m.sender_type = 'user' AND m.receiver_id = ? AND m.receiver_type = 'agent')
                OR
                (m.sender_id = ? AND m.sender_type = 'agent' AND m.receiver_id = u.id AND m.receiver_type = 'user')
        )
      )
    LIMIT 1
");

$accessStmt->bind_param("iiii", $userId, $agentId, $agentId, $agentId);
$accessStmt->execute();
$userResult = $accessStmt->get_result();
$user = $userResult->fetch_assoc();
$accessStmt->close();

if (!$user) {
    echo json_encode(['success' => false, 'message' => 'Player not found for this agent']);
    $conn->close();
    exit;
}

$activityStmt = $conn->prepare("
    SELECT action_type, action_summary, action_payload, created_at
    FROM player_activity_logs
    WHERE user_id = ?
    ORDER BY created_at DESC, id DESC
    LIMIT 20
");
$activityStmt->bind_param("i", $userId);
$activityStmt->execute();
$activityResult = $activityStmt->get_result();

$activities = [];
while ($row = $activityResult->fetch_assoc()) {
    $activities[] = [
        'action_type' => $row['action_type'],
        'action_summary' => $row['action_summary'],
        'action_payload' => $row['action_payload'],
        'created_at' => $row['created_at']
    ];
}
$activityStmt->close();

echo json_encode([
    'success' => true,
    'player' => [
        'id' => (int)$user['id'],
        'phone' => $user['phone'],
        'current_balance' => (float)($user['current_balance'] ?? 0),
        'current_win' => (float)($user['current_win'] ?? 0),
        'total_cash_in' => (float)($user['total_cash_in'] ?? 0),
        'total_cash_out' => (float)($user['total_cash_out'] ?? 0),
        'last_action' => $user['last_action'],
        'last_action_details' => $user['last_action_details'],
        'selected_agent_name' => $user['selected_agent_name'],
        'updated_at' => $user['updated_at']
    ],
    'activities' => $activities
]);

$conn->close();
