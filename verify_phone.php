<?php
session_start();

if (!isset($_SESSION['user_id']) || $_SESSION['is_verified']) {
    header('Location: MOO-GAME.html');
    exit;
}

$verificationCode = $_SESSION['verification_code'] ?? '';
$userPhone = $_SESSION['user_phone'] ?? 'Unknown';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Phone - Spin Game</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .verification-container {
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            max-width: 400px;
            width: 100%;
            padding: 40px 30px;
            text-align: center;
        }
        h1 {
            color: #333;
            margin-bottom: 10px;
            font-size: 1.8em;
        }
        .subtitle {
            color: #666;
            margin-bottom: 30px;
            font-size: 0.95em;
        }
        .verification-code-box {
            background: #f0f0f0;
            border: 2px solid #4facfe;
            border-radius: 10px;
            padding: 20px;
            margin: 25px 0;
            font-size: 2.5em;
            font-weight: bold;
            color: #4facfe;
            letter-spacing: 8px;
            font-family: 'Courier New', monospace;
        }
        .code-note {
            background: #fff3cd;
            border: 1px solid #ffc107;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 25px;
            color: #856404;
            font-size: 0.9em;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #555;
            font-weight: bold;
            text-align: left;
        }
        .form-group input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1.1em;
            letter-spacing: 4px;
            text-align: center;
            font-family: 'Courier New', monospace;
        }
        .form-group input:focus {
            border-color: #4facfe;
            outline: none;
            box-shadow: 0 0 5px rgba(79, 172, 254, 0.5);
        }
        .verify-btn {
            width: 100%;
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            color: white;
            border: none;
            padding: 12px;
            border-radius: 5px;
            font-size: 1em;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-bottom: 15px;
        }
        .verify-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        .logout-btn {
            width: 100%;
            background: #dc3545;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 5px;
            font-size: 0.9em;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        .logout-btn:hover {
            background: #c82333;
        }
        .error-message {
            color: #dc3545;
            margin-bottom: 15px;
            padding: 10px;
            background: #f8d7da;
            border: 1px solid #f5c6cb;
            border-radius: 5px;
        }
        .success-message {
            color: #28a745;
            margin-bottom: 15px;
            padding: 10px;
            background: #d4edda;
            border: 1px solid #c3e6cb;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="verification-container">
        <h1>📱 Verify Your Phone</h1>
        <p class="subtitle">Phone: <?php echo htmlspecialchars($userPhone); ?></p>

        <div class="code-note">
            Your verification code has been generated. Copy it below and paste it in the input field to verify your account.
        </div>

        <div class="verification-code-box">
            <?php echo htmlspecialchars($verificationCode); ?>
        </div>

        <form method="POST" action="verify_phone_handler.php" id="verification-form">
            <div class="form-group">
                <label for="code">Enter 4-Digit Verification Code:</label>
                <input type="text" id="code" name="code" maxlength="4" placeholder="0000" required autocomplete="off">
            </div>
            <button type="submit" class="verify-btn">Verify & Continue to Game</button>
        </form>

        <form method="POST" action="logout.php" style="margin: 0;">
            <button type="submit" class="logout-btn">Cancel & Logout</button>
        </form>
    </div>

    <script>
        // Only allow digits in the input
        document.getElementById('code').addEventListener('input', function(e) {
            this.value = this.value.replace(/[^0-9]/g, '');
        });

        // Auto-submit when 4 digits entered
        document.getElementById('code').addEventListener('input', function(e) {
            if (this.value.length === 4) {
                document.getElementById('verification-form').submit();
            }
        });
    </script>
</body>
</html>
