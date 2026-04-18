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
$agentId = (int)($_GET['agent_id'] ?? 0);

$sql = "
    SELECT id, request_type, amount, status, note, agent_note, created_at, reviewed_at
    FROM transaction_requests
    WHERE user_id = ?
";
$types = "i";
$params = [$userId];

if ($agentId > 0) {
    $sql .= " AND agent_id = ?";
    $types .= "i";
    $params[] = $agentId;
}

$sql .= " ORDER BY created_at DESC, id DESC LIMIT 10";

$stmt = $conn->prepare($sql);
$stmt->bind_param($types, ...$params);
$stmt->execute();
$result = $stmt->get_result();

$requests = [];
while ($row = $result->fetch_assoc()) {
    $requests[] = [
        'id' => (int)$row['id'],
        'request_type' => $row['request_type'],
        'amount' => (float)$row['amount'],
        'status' => $row['status'],
        'note' => $row['note'],
        'agent_note' => $row['agent_note'],
        'created_at' => $row['created_at'],
        'reviewed_at' => $row['reviewed_at']
    ];
}

echo json_encode(['success' => true, 'requests' => $requests]);

$stmt->close();
$conn->close();
