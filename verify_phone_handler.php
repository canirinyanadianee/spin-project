<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Session expired']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$userCode = trim((string)($_POST['code'] ?? ''));
$sessionCode = $_SESSION['verification_code'] ?? '';
$userId = $_SESSION['user_id'];

if ($userCode === '') {
    echo json_encode(['success' => false, 'message' => 'Please enter the verification code']);
    exit;
}

if ($userCode !== $sessionCode) {
    echo json_encode(['success' => false, 'message' => 'Invalid verification code. Please try again.']);
    exit;
}

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

function ensure_user_columns(mysqli $conn): void
{
    $required = [
        'is_verified' => 'BOOLEAN DEFAULT FALSE',
        'verification_code' => 'VARCHAR(4) NULL'
    ];

    foreach ($required as $column => $definition) {
        $result = $conn->query("SHOW COLUMNS FROM users LIKE '$column'");
        if ($result && $result->num_rows === 0) {
            $conn->query("ALTER TABLE users ADD COLUMN $column $definition");
        }
    }
}

ensure_user_columns($conn);

$stmt = $conn->prepare("UPDATE users SET is_verified = TRUE WHERE id = ?");
if (!$stmt) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Unable to verify account']);
    $conn->close();
    exit;
}

$stmt->bind_param("i", $userId);
if (!$stmt->execute()) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Verification failed']);
    $stmt->close();
    $conn->close();
    exit;
}

$stmt->close();
$conn->close();

$_SESSION['is_verified'] = true;
unset($_SESSION['verification_code']);

header('Location: MOO-GAME.html');
exit;
