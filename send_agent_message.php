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

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    $conn->close();
    exit;
}

$userId = (int)($_POST['user_id'] ?? 0);
$message = trim((string)($_POST['message'] ?? ''));

if ($userId <= 0 || $message === '') {
    echo json_encode(['success' => false, 'message' => 'Message and user ID are required']);
    $conn->close();
    exit;
}

$stmt = $conn->prepare("INSERT INTO messages (sender_id, sender_type, receiver_id, receiver_type, message) VALUES (?, 'agent', ?, 'user', ?)");
$stmt->bind_param("iis", $_SESSION['agent_id'], $userId, $message);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send message']);
}

$stmt->close();
$conn->close();
