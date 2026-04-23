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

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    $conn->close();
    exit;
}

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';

if (strpos($contentType, 'application/json') !== false) {
    $input = json_decode(file_get_contents('php://input'), true) ?? [];
    $name = trim((string)($input['name'] ?? ''));
    $rawPassword = (string)($input['password'] ?? '');
} else {
    $name = trim((string)($_POST['name'] ?? ''));
    $rawPassword = (string)($_POST['password'] ?? '');
}

if ($name === '' || $rawPassword === '') {
    echo json_encode(['success' => false, 'message' => 'Agent name and password are required']);
    $conn->close();
    exit;
}

$stmt = $conn->prepare("SELECT id, name, phone, password FROM agents WHERE name = ?");

if (!$stmt) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Unable to prepare login request']);
    $conn->close();
    exit;
}

$stmt->bind_param("s", $name);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows !== 1) {
    echo json_encode(['success' => false, 'message' => 'Invalid phone or password']);
    $stmt->close();
    $conn->close();
    exit;
}

$agent = $result->fetch_assoc();

if (!password_verify($rawPassword, $agent['password'])) {
    echo json_encode(['success' => false, 'message' => 'Invalid phone or password']);
    $stmt->close();
    $conn->close();
    exit;
}

session_regenerate_id(true);
$_SESSION['agent_id'] = (int)$agent['id'];
$_SESSION['agent_name'] = $agent['name'];
$_SESSION['agent_phone'] = $agent['phone'];

$stmt->close();

$updateStmt = $conn->prepare("UPDATE agents SET last_login = CURRENT_TIMESTAMP WHERE id = ?");
if ($updateStmt) {
    $updateStmt->bind_param("i", $agent['id']);
    $updateStmt->execute();
    $updateStmt->close();
}

echo json_encode([
    'success' => true,
    'message' => 'Agent login successful',
    'agent_name' => $agent['name'],
    'agent' => [
        'id' => (int)$agent['id'],
        'name' => $agent['name'],
        'phone' => $agent['phone']
    ]
]);

$conn->close();
