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

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    $conn->close();
    exit;
}

$userId = (int)$_SESSION['user_id'];

$stmt = $conn->prepare("
    SELECT 
        user_id,
        current_balance,
        current_win,
        total_cash_in,
        total_cash_out,
        updated_at
    FROM player_state_snapshots
    WHERE user_id = ?
    LIMIT 1
");

if (!$stmt) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database query failed']);
    $conn->close();
    exit;
}

$stmt->bind_param("i", $userId);
$stmt->execute();
$result = $stmt->get_result();
$snapshot = $result->fetch_assoc();
$stmt->close();

if ($snapshot) {
    echo json_encode([
        'success' => true,
        'balance' => (float)$snapshot['current_balance'],
        'win' => (float)$snapshot['current_win'],
        'total_cash_in' => (float)$snapshot['total_cash_in'],
        'total_cash_out' => (float)$snapshot['total_cash_out'],
        'last_updated' => $snapshot['updated_at']
    ]);
} else {
    // No snapshot exists, return default values
    echo json_encode([
        'success' => true,
        'balance' => 0,
        'win' => 0,
        'total_cash_in' => 0,
        'total_cash_out' => 0,
        'last_updated' => null
    ]);
}

$conn->close();
