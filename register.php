<?php
session_start();

function is_ajax_request(): bool
{
    return !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';
}

function wants_json(): bool
{
    return isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false;
}

function render_error_response(string $message): void
{
    if (is_ajax_request() || wants_json()) {
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'message' => $message]);
    } else {
        $safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
        echo <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Error</title>
    <style>
        body { font-family: Arial, sans-serif; background: #10161f; color: #fff; margin: 0; min-height: 100vh; display: grid; place-items: center; }
        .card { width: min(420px, 92vw); background: #182231; border-radius: 16px; padding: 24px; box-shadow: 0 18px 40px rgba(0,0,0,.35); }
        h1 { margin: 0 0 12px; font-size: 24px; }
        p { margin: 0 0 18px; color: #d3d9e2; }
        a { display: inline-block; padding: 12px 18px; border-radius: 999px; background: #ffd34d; color: #111; text-decoration: none; font-weight: 700; }
    </style>
</head>
<body>
    <div class="card">
        <h1>Registration failed</h1>
        <p>{$safeMessage}</p>
        <a href="MOO-GAME.html">Back to game</a>
    </div>
</body>
</html>
HTML;
    }
    exit;
}

function render_success_response(string $message): void
{
    if (is_ajax_request() || wants_json()) {
        header('Content-Type: application/json');
        echo json_encode(['success' => true, 'message' => $message]);
    } else {
        header('Location: verify_phone.php');
    }
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

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "spin_game";

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    render_error_response('Method not allowed');
}

$phone = preg_replace('/\s+/', '', trim((string)($_POST['phone'] ?? '')));
$rawPassword = (string)($_POST['password'] ?? '');
$confirmPassword = (string)($_POST['confirm_password'] ?? '');

if ($phone === '' || $rawPassword === '' || $confirmPassword === '') {
    render_error_json('All fields are required.');
}

if (!preg_match('/^\+?\d{8,15}$/', $phone)) {
    render_error_json('Enter a valid phone number.');
}

if (strlen($rawPassword) < 4 || strlen($rawPassword) > 5) {
    render_error_json('Password must be 4-5 digits.');
}

if (!preg_match('/^\d{4,5}$/', $rawPassword)) {
    render_error_response('Password must contain only digits (0-9).');
}

if ($rawPassword !== $confirmPassword) {
    render_error_response('Passwords do not match.');
}

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    http_response_code(500);
    render_error_response('Database connection failed.');
}

ensure_user_columns($conn);

$checkStmt = $conn->prepare("SELECT id FROM users WHERE phone = ?");

if (!$checkStmt) {
    $conn->close();
    http_response_code(500);
    render_error_response('Unable to prepare registration request.');
}

$checkStmt->bind_param("s", $phone);
$checkStmt->execute();
$existingUsers = $checkStmt->get_result();

if ($existingUsers->num_rows > 0) {
    $checkStmt->close();
    $conn->close();
    render_error_response('Phone number already registered.');
}

$checkStmt->close();

$hashedPassword = password_hash($rawPassword, PASSWORD_DEFAULT);
$verificationCode = str_pad(rand(0, 9999), 4, '0', STR_PAD_LEFT);
$insertStmt = $conn->prepare("INSERT INTO users (phone, password, verification_code, is_verified) VALUES (?, ?, ?, FALSE)");

if (!$insertStmt) {
    $conn->close();
    http_response_code(500);
    render_error_response('Unable to create account.');
}

$insertStmt->bind_param("sss", $phone, $hashedPassword, $verificationCode);

if (!$insertStmt->execute()) {
    $insertStmt->close();
    $conn->close();
    http_response_code(500);
    render_error_response('Registration failed.');
}

$userId = $conn->insert_id;
$insertStmt->close();
$conn->close();

session_regenerate_id(true);
$_SESSION['user_id'] = (int)$userId;
$_SESSION['user_phone'] = $phone;
$_SESSION['verification_code'] = $verificationCode;
$_SESSION['is_verified'] = false;

render_success_response('Registration successful! Redirecting to verification...');
?>
