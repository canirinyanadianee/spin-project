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

$stmt = $conn->prepare("
    SELECT
        u.id,
        u.phone,
        pas.current_balance,
        pas.current_win,
        pas.total_cash_in,
        pas.total_cash_out,
        pas.last_action,
        pas.updated_at AS last_seen_at,
        (
            SELECT m.message
            FROM messages m
            WHERE
                (m.sender_id = u.id AND m.sender_type = 'user' AND m.receiver_id = ? AND m.receiver_type = 'agent')
                OR
                (m.sender_id = ? AND m.sender_type = 'agent' AND m.receiver_id = u.id AND m.receiver_type = 'user')
            ORDER BY m.timestamp DESC
            LIMIT 1
        ) AS last_message
    FROM users u
    INNER JOIN (
        SELECT user_id FROM player_agent_assignments WHERE agent_id = ?
        UNION
        SELECT sender_id AS user_id FROM messages WHERE sender_type = 'user' AND receiver_id = ? AND receiver_type = 'agent'
        UNION
        SELECT receiver_id AS user_id FROM messages WHERE sender_type = 'agent' AND sender_id = ? AND receiver_type = 'user'
    ) linked_users ON linked_users.user_id = u.id
    LEFT JOIN player_state_snapshots pas ON pas.user_id = u.id
    ORDER BY COALESCE(pas.updated_at, u.last_login, u.created_at) DESC, u.id DESC
");

$stmt->bind_param("iiiii", $agentId, $agentId, $agentId, $agentId, $agentId);
$stmt->execute();
$result = $stmt->get_result();

$users = [];
while ($row = $result->fetch_assoc()) {
    $users[] = [
        'id' => (int)$row['id'],
        'phone' => $row['phone'],
        'last_message' => $row['last_message'],
        'current_balance' => (float)($row['current_balance'] ?? 0),
        'current_win' => (float)($row['current_win'] ?? 0),
        'total_cash_in' => (float)($row['total_cash_in'] ?? 0),
        'total_cash_out' => (float)($row['total_cash_out'] ?? 0),
        'last_action' => $row['last_action'] ?? '',
        'last_seen_at' => $row['last_seen_at']
    ];
}

echo json_encode(['success' => true, 'users' => $users]);

$stmt->close();
$conn->close();
