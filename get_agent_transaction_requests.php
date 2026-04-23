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

$agentId = (int)$_SESSION['agent_id'];
$userId = (int)($_GET['user_id'] ?? 0);
$status = trim((string)($_GET['status'] ?? ''));

$sql = "
    SELECT tr.id, tr.user_id, tr.request_type, tr.amount, tr.status, tr.note, tr.agent_note,
           tr.created_at, tr.reviewed_at, u.phone
    FROM transaction_requests tr
    INNER JOIN users u ON u.id = tr.user_id
    WHERE tr.agent_id = ?
";

$types = "i";
$params = [$agentId];

if ($userId > 0) {
    $sql .= " AND tr.user_id = ?";
    $types .= "i";
    $params[] = $userId;
}

if (in_array($status, ['pending', 'approved', 'declined', 'cancelled'], true)) {
    $sql .= " AND tr.status = ?";
    $types .= "s";
    $params[] = $status;
}

$sql .= " ORDER BY CASE WHEN tr.status = 'pending' THEN 0 ELSE 1 END, tr.created_at DESC";

$stmt = $conn->prepare($sql);
$stmt->bind_param($types, ...$params);
$stmt->execute();
$result = $stmt->get_result();

$requests = [];
while ($row = $result->fetch_assoc()) {
    $requests[] = [
        'id' => (int)$row['id'],
        'user_id' => (int)$row['user_id'],
        'phone' => $row['phone'],
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
