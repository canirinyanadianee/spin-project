<?php
session_start();
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "spin_game";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
    exit;
}

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['success' => false, 'message' => 'User not authenticated']);
    $conn->close();
    exit;
}

$agentId = (int)($_GET['agent_id'] ?? 0);
$userId = (int)$_SESSION['user_id'];

if ($agentId <= 0) {
    echo json_encode(['success' => false, 'message' => 'Agent ID is required']);
    $conn->close();
    exit;
}

$stmt = $conn->prepare("
    SELECT m.*, a.name AS agent_name
    FROM messages m
    LEFT JOIN agents a ON (m.sender_id = a.id AND m.sender_type = 'agent') OR (m.receiver_id = a.id AND m.receiver_type = 'agent')
    WHERE
        ((m.sender_id = ? AND m.sender_type = 'user' AND m.receiver_id = ? AND m.receiver_type = 'agent')
        OR (m.sender_id = ? AND m.sender_type = 'agent' AND m.receiver_id = ? AND m.receiver_type = 'user'))
    ORDER BY m.timestamp ASC
");
$stmt->bind_param("iiii", $userId, $agentId, $agentId, $userId);
$stmt->execute();
$result = $stmt->get_result();

$messages = [];
while ($row = $result->fetch_assoc()) {
    $messages[] = [
        'id' => (int)$row['id'],
        'sender_type' => $row['sender_type'],
        'message' => $row['message'],
        'timestamp' => $row['timestamp'],
        'agent_name' => $row['agent_name']
    ];
}

echo json_encode(['success' => true, 'messages' => $messages]);

$stmt->close();
$conn->close();
