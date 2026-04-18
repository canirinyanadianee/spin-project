<?php
session_start();

// Clear all session variables
$_SESSION = array();

// Destroy the session
session_destroy();

// Redirect to game page
header('Location: MOO-GAME.html');
exit;
?>
