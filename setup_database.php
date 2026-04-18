<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "spin_game";

$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($conn->query("CREATE DATABASE IF NOT EXISTS $dbname") !== true) {
    die("Error creating database: " . $conn->error);
}

$conn->select_db($dbname);

$queries = [
    "CREATE TABLE IF NOT EXISTS users (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        phone VARCHAR(20) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        verification_code VARCHAR(4) NULL,
        is_verified BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        last_login TIMESTAMP NULL
    )",
    "CREATE TABLE IF NOT EXISTS agents (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        phone VARCHAR(20) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        last_login TIMESTAMP NULL
    )",
    "CREATE TABLE IF NOT EXISTS messages (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        sender_id INT(11) NOT NULL,
        sender_type ENUM('user', 'agent') NOT NULL,
        receiver_id INT(11) NOT NULL,
        receiver_type ENUM('user', 'agent') NOT NULL,
        message TEXT NOT NULL,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_read BOOLEAN DEFAULT FALSE
    )",
    "CREATE TABLE IF NOT EXISTS player_agent_assignments (
        user_id INT(11) NOT NULL PRIMARY KEY,
        agent_id INT(11) NOT NULL,
        assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        CONSTRAINT fk_assignment_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        CONSTRAINT fk_assignment_agent FOREIGN KEY (agent_id) REFERENCES agents(id) ON DELETE CASCADE
    )",
    "CREATE TABLE IF NOT EXISTS player_state_snapshots (
        user_id INT(11) NOT NULL PRIMARY KEY,
        agent_id INT(11) NULL,
        selected_agent_name VARCHAR(100) NULL,
        current_balance DECIMAL(12,2) NOT NULL DEFAULT 0,
        current_win DECIMAL(12,2) NOT NULL DEFAULT 0,
        total_cash_in DECIMAL(12,2) NOT NULL DEFAULT 0,
        total_cash_out DECIMAL(12,2) NOT NULL DEFAULT 0,
        last_action VARCHAR(100) NULL,
        last_action_details TEXT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        CONSTRAINT fk_snapshot_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        CONSTRAINT fk_snapshot_agent FOREIGN KEY (agent_id) REFERENCES agents(id) ON DELETE SET NULL
    )",
    "CREATE TABLE IF NOT EXISTS player_activity_logs (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        user_id INT(11) NOT NULL,
        agent_id INT(11) NULL,
        action_type VARCHAR(50) NOT NULL,
        action_summary VARCHAR(255) NOT NULL,
        action_payload TEXT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_activity_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        CONSTRAINT fk_activity_agent FOREIGN KEY (agent_id) REFERENCES agents(id) ON DELETE SET NULL
    )",
    "CREATE TABLE IF NOT EXISTS transaction_requests (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        user_id INT(11) NOT NULL,
        agent_id INT(11) NOT NULL,
        request_type ENUM('cash_in', 'cash_out') NOT NULL,
        amount DECIMAL(12,2) NOT NULL,
        status ENUM('pending', 'approved', 'declined', 'cancelled') NOT NULL DEFAULT 'pending',
        note TEXT NULL,
        agent_note TEXT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        reviewed_at TIMESTAMP NULL DEFAULT NULL,
        player_applied_at TIMESTAMP NULL DEFAULT NULL,
        hold_applied_at TIMESTAMP NULL DEFAULT NULL,
        released_at TIMESTAMP NULL DEFAULT NULL,
        cancelled_at TIMESTAMP NULL DEFAULT NULL,
        CONSTRAINT fk_transaction_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        CONSTRAINT fk_transaction_agent FOREIGN KEY (agent_id) REFERENCES agents(id) ON DELETE CASCADE
    )"
];

foreach ($queries as $query) {
    if ($conn->query($query) === true) {
        echo "Executed successfully<br>";
    } else {
        echo "Error: " . $conn->error . "<br>";
    }
}

$postQueries = [
    "ALTER TABLE transaction_requests MODIFY COLUMN status ENUM('pending', 'approved', 'declined', 'cancelled') NOT NULL DEFAULT 'pending'",
    "ALTER TABLE transaction_requests ADD COLUMN IF NOT EXISTS player_applied_at TIMESTAMP NULL DEFAULT NULL",
    "ALTER TABLE transaction_requests ADD COLUMN IF NOT EXISTS hold_applied_at TIMESTAMP NULL DEFAULT NULL",
    "ALTER TABLE transaction_requests ADD COLUMN IF NOT EXISTS released_at TIMESTAMP NULL DEFAULT NULL",
    "ALTER TABLE transaction_requests ADD COLUMN IF NOT EXISTS cancelled_at TIMESTAMP NULL DEFAULT NULL"
];

foreach ($postQueries as $query) {
    if ($conn->query($query) === true) {
        echo "Updated successfully<br>";
    } else {
        echo "Update notice: " . $conn->error . "<br>";
    }
}

$sampleAgents = [
    ['Agent Yvette', '250788123456', 'password123'],
    ['Agent Chakilla', '250788123457', 'password123'],
    ['Agent Mireille', '250788123458', 'password123'],
    ['Agent Vital', '250788123459', 'password123'],
    ['Agent Yambii', '250788123460', 'password123'],
    ['Agent Herve', '250788123461', 'password123'],
    ['Agent Gon', '250788123462', 'password123'],
    ['Agent Hanna', '250788123463', 'password123'],
    ['Agent Ivan', '250788123464', 'password123'],
    ['Agent Jude', '250788123465', 'password123']
];

$stmt = $conn->prepare("INSERT IGNORE INTO agents (name, phone, password) VALUES (?, ?, ?)");

if ($stmt) {
    foreach ($sampleAgents as [$name, $phone, $plainPassword]) {
        $hashedPassword = password_hash($plainPassword, PASSWORD_DEFAULT);
        $stmt->bind_param("sss", $name, $phone, $hashedPassword);
        $stmt->execute();
    }
    $stmt->close();
    echo "Sample agents inserted successfully<br>";
}

$conn->close();
echo "Database setup completed!";
