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
    <title>Login Error</title>
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
        <h1>Login failed</h1>
        <p>{$safeMessage}</p>
        <a href="MOO-GAME.html">Back to game</a>
    </div>
</body>
</html>
HTML;
    }
    exit;
}

function render_success_response(string $message, array $user): void
{
    if (is_ajax_request() || wants_json()) {
        header('Content-Type: application/json');
        echo json_encode([
            'success' => true,
            'message' => $message,
            'user' => [
                'id' => (int)$user['id'],
                'phone' => $user['phone']
            ]
        ]);
    } else {
        header('Location: MOO-GAME.html');
    }
    exit;
}

function ensure_user_columns(mysqli $conn): void
{
    $required = [
        'is_verified' => 'BOOLEAN DEFAULT FALSE',
        'verification_code' => 'VARCHAR(4) NULL',
        'last_login' => 'TIMESTAMP NULL'
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
    render_error_response('Method not allowed');
}

$phone = preg_replace('/\s+/', '', trim((string)($_POST['phone'] ?? '')));
$rawPassword = (string)($_POST['password'] ?? '');

if ($phone === '' || $rawPassword === '') {
    render_error_response('Phone and password are required.');
}

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    render_error_response('Database connection failed.');
}

ensure_user_columns($conn);

$stmt = $conn->prepare("SELECT id, phone, password, is_verified FROM users WHERE phone = ?");

if (!$stmt) {
    $conn->close();
    render_error_response('Unable to prepare login request.');
}

$stmt->bind_param("s", $phone);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows !== 1) {
    $stmt->close();
    $conn->close();
    render_error_response('Invalid phone or password.');
}

$user = $result->fetch_assoc();

if (!password_verify($rawPassword, $user['password'])) {
    $stmt->close();
    $conn->close();
    render_error_response('Invalid phone or password.');
}

if (!$user['is_verified']) {
    $stmt->close();
    $conn->close();
    render_error_response('Your account is not verified yet. Please verify your phone number.');
}

session_regenerate_id(true);
$_SESSION['user_id'] = (int)$user['id'];
$_SESSION['user_phone'] = $user['phone'];
$_SESSION['is_verified'] = true;

$stmt->close();

$updateStmt = $conn->prepare("UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = ?");
if ($updateStmt) {
    $updateStmt->bind_param("i", $user['id']);
    $updateStmt->execute();
    $updateStmt->close();
}

$conn->close();

render_success_response('Login successful! Redirecting to game...', $user);
