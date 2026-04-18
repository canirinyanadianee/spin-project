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

if (!isset($_SESSION['agent_id'])) {
    echo json_encode(['success' => false, 'message' => 'Agent not authenticated']);
    $conn->close();
    exit;
}

$userId = (int)($_GET['user_id'] ?? 0);
$agentId = (int)$_SESSION['agent_id'];

if ($userId <= 0) {
    echo json_encode(['success' => false, 'message' => 'User ID is required']);
    $conn->close();
    exit;
}

$stmt = $conn->prepare("
    SELECT m.*, u.phone AS user_phone
    FROM messages m
    LEFT JOIN users u ON (m.sender_id = u.id AND m.sender_type = 'user') OR (m.receiver_id = u.id AND m.receiver_type = 'user')
    WHERE
        ((m.sender_id = ? AND m.sender_type = 'agent' AND m.receiver_id = ? AND m.receiver_type = 'user')
        OR (m.sender_id = ? AND m.sender_type = 'user' AND m.receiver_id = ? AND m.receiver_type = 'agent'))
    ORDER BY m.timestamp ASC
");
$stmt->bind_param("iiii", $agentId, $userId, $userId, $agentId);
$stmt->execute();
$result = $stmt->get_result();

$messages = [];
while ($row = $result->fetch_assoc()) {
    $messages[] = [
        'id' => (int)$row['id'],
        'sender_type' => $row['sender_type'],
        'message' => $row['message'],
        'timestamp' => $row['timestamp'],
        'user_phone' => $row['user_phone']
    ];
}

echo json_encode(['success' => true, 'messages' => $messages]);

$stmt->close();
$conn->close();
