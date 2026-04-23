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

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    $conn->close();
    exit;
}

$requestId = (int)($_POST['request_id'] ?? 0);
$markHold = (int)($_POST['mark_hold'] ?? 0) === 1;
$markRelease = (int)($_POST['mark_release'] ?? 0) === 1;
$markApply = (int)($_POST['mark_apply'] ?? 0) === 1;
$userId = (int)$_SESSION['user_id'];

if ($requestId <= 0) {
    echo json_encode(['success' => false, 'message' => 'Request ID is required']);
    $conn->close();
    exit;
}

$setParts = [];

if ($markHold) {
    $setParts[] = "hold_applied_at = IFNULL(hold_applied_at, CURRENT_TIMESTAMP)";
}
if ($markRelease) {
    $setParts[] = "released_at = IFNULL(released_at, CURRENT_TIMESTAMP)";
}
if ($markApply) {
    $setParts[] = "player_applied_at = IFNULL(player_applied_at, CURRENT_TIMESTAMP)";
}

if (empty($setParts)) {
    $setParts[] = "player_applied_at = IFNULL(player_applied_at, CURRENT_TIMESTAMP)";
}

$sql = "
    UPDATE transaction_requests
    SET " . implode(', ', $setParts) . "
    WHERE id = ? AND user_id = ?
";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ii", $requestId, $userId);
$stmt->execute();

echo json_encode(['success' => true]);

$stmt->close();
$conn->close();
