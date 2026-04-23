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

$userId = (int)$_SESSION['user_id'];

$stmt = $conn->prepare("
    SELECT id, request_type, amount, status, agent_note, reviewed_at, hold_applied_at, released_at
    FROM transaction_requests
    WHERE user_id = ?
      AND (
        (request_type = 'cash_out' AND status = 'pending' AND hold_applied_at IS NULL)
        OR (request_type = 'cash_in' AND status = 'approved' AND player_applied_at IS NULL)
        OR (request_type = 'cash_out' AND status IN ('declined', 'cancelled') AND hold_applied_at IS NOT NULL AND released_at IS NULL)
        OR (request_type = 'cash_out' AND status = 'approved' AND player_applied_at IS NULL)
      )
    ORDER BY COALESCE(reviewed_at, created_at) ASC, id ASC
");
$stmt->bind_param("i", $userId);
$stmt->execute();
$result = $stmt->get_result();

$updates = [];
while ($row = $result->fetch_assoc()) {
    $action = null;

    if ($row['request_type'] === 'cash_out' && $row['status'] === 'pending' && $row['hold_applied_at'] === null) {
        $action = 'hold_cash_out';
    } elseif ($row['request_type'] === 'cash_in' && $row['status'] === 'approved') {
        $action = 'apply_cash_in';
    } elseif ($row['request_type'] === 'cash_out' && in_array($row['status'], ['declined', 'cancelled'], true) && $row['hold_applied_at'] !== null && $row['released_at'] === null) {
        $action = 'release_cash_out';
    } elseif ($row['request_type'] === 'cash_out' && $row['status'] === 'approved' && $row['hold_applied_at'] === null) {
        $action = 'apply_approved_cash_out';
    } elseif ($row['request_type'] === 'cash_out' && $row['status'] === 'approved') {
        $action = 'finalize_cash_out';
    }

    if ($action === null) {
        continue;
    }

    $updates[] = [
        'id' => (int)$row['id'],
        'request_type' => $row['request_type'],
        'amount' => (float)$row['amount'],
        'status' => $row['status'],
        'agent_note' => $row['agent_note'],
        'reviewed_at' => $row['reviewed_at'],
        'action' => $action
    ];
}

echo json_encode(['success' => true, 'updates' => $updates]);

$stmt->close();
$conn->close();
