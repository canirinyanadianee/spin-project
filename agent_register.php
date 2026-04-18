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
    exit;
}

$name = trim((string)($_POST['name'] ?? ''));
$phone = preg_replace('/\s+/', '', trim((string)($_POST['phone'] ?? '')));
$rawPassword = (string)($_POST['password'] ?? '');
$confirmPassword = (string)($_POST['confirm_password'] ?? '');

if ($name === '' || $phone === '' || $rawPassword === '' || $confirmPassword === '') {
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    $conn->close();
    exit;
}

if (!preg_match('/^\+?\d{8,15}$/', $phone)) {
    echo json_encode(['success' => false, 'message' => 'Enter a valid phone number']);
    $conn->close();
    exit;
}

if (strlen($rawPassword) < 6) {
    echo json_encode(['success' => false, 'message' => 'Password must be at least 6 characters']);
    $conn->close();
    exit;
}

if ($rawPassword !== $confirmPassword) {
    echo json_encode(['success' => false, 'message' => 'Passwords do not match']);
    $conn->close();
    exit;
}

$checkStmt = $conn->prepare("SELECT id FROM agents WHERE phone = ?");

if (!$checkStmt) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Unable to prepare request']);
    $conn->close();
    exit;
}

$checkStmt->bind_param("s", $phone);
$checkStmt->execute();
$existingAgent = $checkStmt->get_result();

if ($existingAgent->num_rows > 0) {
    echo json_encode(['success' => false, 'message' => 'Phone number already registered']);
    $checkStmt->close();
    $conn->close();
    exit;
}

$checkStmt->close();

$hashedPassword = password_hash($rawPassword, PASSWORD_DEFAULT);
$insertStmt = $conn->prepare("INSERT INTO agents (name, phone, password) VALUES (?, ?, ?)");

if (!$insertStmt) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Unable to create agent account']);
    $conn->close();
    exit;
}

$insertStmt->bind_param("sss", $name, $phone, $hashedPassword);

if (!$insertStmt->execute()) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Agent registration failed']);
    $insertStmt->close();
    $conn->close();
    exit;
}

$agentId = (int)$conn->insert_id;
$insertStmt->close();

$_SESSION['agent_id'] = $agentId;
$_SESSION['agent_name'] = $name;
$_SESSION['agent_phone'] = $phone;

echo json_encode([
    'success' => true,
    'message' => 'Agent account created successfully',
    'agent' => [
        'id' => $agentId,
        'name' => $name,
        'phone' => $phone
    ]
]);

$conn->close();
