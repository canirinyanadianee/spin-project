<?php
session_start();

// Clear all session variables
$_SESSION = array();

// Destroy the session
session_destroy();

// Return success response
header('Content-Type: application/json');
echo json_encode(['success' => true, 'message' => 'Logged out successfully']);
?></content>
<parameter name="filePath">c:\xampp\htdocs\SPIN11\SPIN\agent_logout.php