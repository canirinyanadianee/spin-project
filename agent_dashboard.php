<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agent Dashboard - Spin Game</title>
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
            padding: 20px;
        }

        .dashboard-container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
        }

        .dashboard-header {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            color: white;
            padding: 20px;
            text-align: center;
        }

        .dashboard-header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        .agent-info {
            font-size: 1.2em;
            opacity: 0.9;
        }

        .dashboard-content {
            display: flex;
            min-height: 600px;
        }

        .users-list {
            width: 30%;
            background: #f8f9fa;
            border-right: 1px solid #e9ecef;
            padding: 20px;
        }

        .users-list h2 {
            margin-bottom: 20px;
            color: #333;
            border-bottom: 2px solid #4facfe;
            padding-bottom: 10px;
        }

        .user-item {
            background: white;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            border-left: 4px solid #4facfe;
        }

        .user-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .user-item.active {
            background: #e3f2fd;
            border-left-color: #2196f3;
        }

        .user-name {
            font-weight: bold;
            color: #333;
            margin-bottom: 5px;
        }

        .user-last-message {
            font-size: 0.9em;
            color: #666;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .chat-area {
            width: 70%;
            display: flex;
            flex-direction: column;
        }

        .chat-header {
            background: #fff;
            padding: 20px;
            border-bottom: 1px solid #e9ecef;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .chat-user-info h3 {
            color: #333;
            margin-bottom: 5px;
        }

        .chat-status {
            font-size: 0.9em;
            color: #666;
        }

        .logout-btn {
            background: #dc3545;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .logout-btn:hover {
            background: #c82333;
        }

        .chat-messages {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            background: #f8f9fa;
        }

        .message {
            margin-bottom: 15px;
            padding: 10px 15px;
            border-radius: 15px;
            max-width: 70%;
            word-wrap: break-word;
        }

        .message.user {
            background: #007bff;
            color: white;
            margin-left: auto;
            border-bottom-right-radius: 5px;
        }

        .message.agent {
            background: #e9ecef;
            color: #333;
            border-bottom-left-radius: 5px;
        }

        .message-time {
            font-size: 0.8em;
            opacity: 0.7;
            margin-top: 5px;
        }

        .chat-input-area {
            background: white;
            padding: 20px;
            border-top: 1px solid #e9ecef;
            display: flex;
            gap: 10px;
        }

        .chat-input {
            flex: 1;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 25px;
            outline: none;
            font-size: 1em;
        }

        .chat-input:focus {
            border-color: #4facfe;
        }

        .send-btn {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .send-btn:hover {
            transform: scale(1.05);
        }

        .no-selection {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: #666;
            font-size: 1.2em;
        }

        .login-form {
            max-width: 400px;
            margin: 50px auto;
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .login-form h2 {
            text-align: center;
            margin-bottom: 30px;
            color: #333;
        }

        .auth-switch {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }

        .auth-switch button {
            flex: 1;
            border: none;
            border-radius: 8px;
            padding: 12px;
            cursor: pointer;
            background: #e9ecef;
            color: #333;
            font-weight: bold;
        }

        .auth-switch button.active {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            color: white;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #555;
            font-weight: bold;
        }

        .form-group input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1em;
        }

        .form-group input:focus {
            border-color: #4facfe;
            outline: none;
        }

        .login-btn {
            width: 100%;
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            color: white;
            border: none;
            padding: 12px;
            border-radius: 5px;
            font-size: 1em;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .login-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        .error-message {
            color: #dc3545;
            text-align: center;
            margin-top: 10px;
        }

        .success-message {
            color: #28a745;
            text-align: center;
            margin-top: 10px;
        }

        .hidden {
            display: none;
        }

        .player-insights {
            padding: 18px 20px;
            background: #fff;
            border-bottom: 1px solid #e9ecef;
        }

        .insight-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
            margin-bottom: 16px;
        }

        .insight-card {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 12px;
        }

        .insight-label {
            font-size: 0.8em;
            color: #6c757d;
            margin-bottom: 6px;
        }

        .insight-value {
            font-size: 1.1em;
            color: #1f2937;
            font-weight: bold;
        }

        .activity-feed {
            max-height: 180px;
            overflow-y: auto;
            background: #f8f9fa;
            border-radius: 10px;
            padding: 12px;
        }

        .activity-item {
            padding: 10px 0;
            border-bottom: 1px solid #dee2e6;
        }

        .activity-item:last-child {
            border-bottom: none;
        }

        .activity-item strong {
            display: block;
            color: #1f2937;
        }

        .activity-time {
            font-size: 0.8em;
            color: #6c757d;
            margin-top: 4px;
        }

        .request-panel {
            padding: 18px 20px;
            background: #fff;
            border-bottom: 1px solid #e9ecef;
        }

        .request-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }

        .request-list {
            display: grid;
            gap: 12px;
        }

        .request-card {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 14px;
            border-left: 4px solid #f0ad4e;
        }

        .request-card.approved {
            border-left-color: #28a745;
        }

        .request-card.declined {
            border-left-color: #dc3545;
        }

        .request-card.cancelled {
            border-left-color: #6c757d;
        }

        .request-title {
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 6px;
        }

        .request-meta {
            color: #6c757d;
            font-size: 0.9em;
            margin-bottom: 8px;
        }

        .request-actions {
            display: flex;
            gap: 8px;
            margin-top: 10px;
        }

        .request-actions button {
            border: none;
            border-radius: 8px;
            padding: 8px 12px;
            color: white;
            cursor: pointer;
        }

        .approve-btn {
            background: #28a745;
        }

        .decline-btn {
            background: #dc3545;
        }
    </style>
</head>
<body>
    <div id="login-container" class="login-form">
        <h2>Agent Login</h2>
        <div class="auth-switch">
            <button type="button" id="show-agent-login" class="active" onclick="showAgentAuth('login')">Login</button>
            <button type="button" id="show-agent-register" onclick="showAgentAuth('register')">Register</button>
        </div>
        <form id="agent-login-form">
            <div class="form-group">
                <label for="agent-name">Agent Name</label>
                <input type="text" id="agent-name" required>
            </div>
            <div class="form-group">
                <label for="agent-password">Password</label>
                <input type="password" id="agent-password" required>
            </div>
            <button type="submit" class="login-btn">Login</button>
        </form>
        <form id="agent-register-form" class="hidden">
            <div class="form-group">
                <label for="agent-register-name">Agent Name</label>
                <input type="text" id="agent-register-name" required>
            </div>
            <div class="form-group">
                <label for="agent-register-phone">Phone Number</label>
                <input type="text" id="agent-register-phone" required>
            </div>
            <div class="form-group">
                <label for="agent-register-password">Password</label>
                <input type="password" id="agent-register-password" required>
            </div>
            <div class="form-group">
                <label for="agent-register-confirm">Confirm Password</label>
                <input type="password" id="agent-register-confirm" required>
            </div>
            <button type="submit" class="login-btn">Create Agent Account</button>
        </form>
        <div id="login-message"></div>
    </div>

    <div id="dashboard-container" class="dashboard-container hidden">
        <div class="dashboard-header">
            <h1>Agent Dashboard</h1>
            <div class="agent-info" id="agent-info">Welcome, Agent</div>
        </div>
        <div class="dashboard-content">
            <div class="users-list">
                <h2>Active Users</h2>
                <div id="users-list">
                    <!-- Users will be loaded here -->
                </div>
            </div>
            <div class="chat-area">
                <div class="chat-header">
                    <div class="chat-user-info">
                        <h3 id="selected-user">Select a user to start chatting</h3>
                        <div class="chat-status" id="user-status"></div>
                    </div>
                    <button class="logout-btn" onclick="logout()">Logout</button>
                </div>
                <div class="player-insights" id="player-insights">
                    <div class="insight-grid">
                        <div class="insight-card">
                            <div class="insight-label">Current Balance</div>
                            <div class="insight-value" id="player-balance">0.00</div>
                        </div>
                        <div class="insight-card">
                            <div class="insight-label">Current Win</div>
                            <div class="insight-value" id="player-win">0.00</div>
                        </div>
                        <div class="insight-card">
                            <div class="insight-label">Cash In / Out</div>
                            <div class="insight-value" id="player-cashflow">0.00 / 0.00</div>
                        </div>
                        <div class="insight-card">
                            <div class="insight-label">Last Action</div>
                            <div class="insight-value" id="player-last-action">Waiting</div>
                        </div>
                    </div>
                    <!-- Activity Feed - Commented Out
                    <div class="activity-feed" id="player-activity-feed">
                        <div class="activity-item">Select a player to see recent actions and game status.</div>
                    </div>
                    -->
                </div>
                <div class="request-panel">
                    <div class="request-header">
                        <h3>Transaction Requests</h3>
                        <div id="request-status-text">Waiting for player selection</div>
                    </div>
                    <div class="request-list" id="transaction-request-list">
                        <div class="activity-item">No transaction requests loaded yet.</div>
                    </div>
                </div>
                <div class="chat-messages" id="chat-messages">
                    <div class="no-selection">Select a user from the list to view messages</div>
                </div>
                <div class="chat-input-area" id="chat-input-area" style="display: none;">
                    <input type="text" class="chat-input" id="message-input" placeholder="Type your message...">
                    <button class="send-btn" onclick="sendMessage()">Send</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        let currentUserId = null;
        let messageInterval = null;

        function showAgentAuth(mode) {
            const isLogin = mode === 'login';
            document.getElementById('agent-login-form').classList.toggle('hidden', !isLogin);
            document.getElementById('agent-register-form').classList.toggle('hidden', isLogin);
            document.getElementById('show-agent-login').classList.toggle('active', isLogin);
            document.getElementById('show-agent-register').classList.toggle('active', !isLogin);
            document.getElementById('login-message').textContent = '';
            document.getElementById('login-message').className = '';
        }

        // Check if agent is already logged in
        window.onload = function() {
            fetch('check_agent_session.php')
                .then(response => response.json())
                .then(data => {
                    if (data.logged_in) {
                        showDashboard(data.agent_name);
                        loadUsers();
                    }
                })
                .catch(error => console.error('Error:', error));
        };

        // Agent login
        document.getElementById('agent-login-form').addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('agent-name').value;
            const password = document.getElementById('agent-password').value;

            fetch('agent_login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `name=${encodeURIComponent(name)}&password=${encodeURIComponent(password)}`
            })
            .then(response => response.json())
            .then(data => {
                const messageDiv = document.getElementById('login-message');
                if (data.success) {
                    messageDiv.className = 'success-message';
                    messageDiv.textContent = data.message;
                    setTimeout(() => {
                        showDashboard(data.agent_name || 'Agent');
                        loadUsers();
                    }, 1000);
                } else {
                    messageDiv.className = 'error-message';
                    messageDiv.textContent = data.message;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('login-message').className = 'error-message';
                document.getElementById('login-message').textContent = 'An error occurred. Please try again.';
            });
        });

        document.getElementById('agent-register-form').addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('agent-register-name').value.trim();
            const phone = document.getElementById('agent-register-phone').value.trim();
            const password = document.getElementById('agent-register-password').value;
            const confirmPassword = document.getElementById('agent-register-confirm').value;

            fetch('agent_register.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&password=${encodeURIComponent(password)}&confirm_password=${encodeURIComponent(confirmPassword)}`
            })
            .then(response => response.json())
            .then(data => {
                const messageDiv = document.getElementById('login-message');
                if (data.success) {
                    messageDiv.className = 'success-message';
                    messageDiv.textContent = data.message;
                    setTimeout(() => {
                        showDashboard(data.agent?.name || 'Agent');
                        loadUsers();
                    }, 600);
                } else {
                    messageDiv.className = 'error-message';
                    messageDiv.textContent = data.message;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('login-message').className = 'error-message';
                document.getElementById('login-message').textContent = 'An error occurred. Please try again.';
            });
        });

        function showDashboard(agentName) {
            document.getElementById('login-container').classList.add('hidden');
            document.getElementById('dashboard-container').classList.remove('hidden');
            document.getElementById('agent-info').textContent = `Welcome, ${agentName}`;
        }

        function loadUsers() {
            fetch('get_agent_users.php')
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        displayUsers(data.users);
                    }
                })
                .catch(error => console.error('Error loading users:', error));
        }

        function displayUsers(users) {
            const usersList = document.getElementById('users-list');
            usersList.innerHTML = '';

            if (users.length === 0) {
                usersList.innerHTML = '<p>No users with messages yet.</p>';
                return;
            }

            users.forEach(user => {
                const userItem = document.createElement('div');
                userItem.className = 'user-item';
                userItem.onclick = () => selectUser(user.id, user.phone, user.last_message);

                userItem.innerHTML = `
                    <div class="user-name">${user.phone}</div>
                    <div class="user-last-message">${user.last_message || user.last_action || 'No messages yet'}</div>
                    <div class="user-last-message">Balance: ${formatMoney(user.current_balance)} | Win: ${formatMoney(user.current_win)}</div>
                `;

                usersList.appendChild(userItem);
            });
        }

        function selectUser(userId, userPhone, lastMessage) {
            currentUserId = userId;

            // Update UI
            document.getElementById('selected-user').textContent = userPhone;
            document.getElementById('user-status').textContent = 'Active';

            // Highlight selected user
            document.querySelectorAll('.user-item').forEach(item => {
                item.classList.remove('active');
            });
            event.currentTarget.classList.add('active');

            // Show chat input
            document.getElementById('chat-input-area').style.display = 'flex';

            // Load messages
            loadMessages();
            loadPlayerDetails();
            loadTransactionRequests();

            // Start polling for new messages
            if (messageInterval) {
                clearInterval(messageInterval);
            }
            messageInterval = setInterval(() => {
                loadMessages();
                loadPlayerDetails();
                loadTransactionRequests();
            }, 3000);
        }

        function loadMessages() {
            if (!currentUserId) return;

            fetch(`get_agent_messages.php?user_id=${currentUserId}`)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        displayMessages(data.messages);
                    }
                })
                .catch(error => console.error('Error loading messages:', error));
        }

        function loadPlayerDetails() {
            if (!currentUserId) return;

            fetch(`get_agent_user_details.php?user_id=${currentUserId}`)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        displayPlayerDetails(data.player, data.activities);
                    }
                })
                .catch(error => console.error('Error loading player details:', error));
        }

        function displayPlayerDetails(player, activities) {
            document.getElementById('player-balance').textContent = formatMoney(player.current_balance);
            document.getElementById('player-win').textContent = formatMoney(player.current_win);
            document.getElementById('player-cashflow').textContent = `${formatMoney(player.total_cash_in)} / ${formatMoney(player.total_cash_out)}`;
            document.getElementById('player-last-action').textContent = player.last_action || 'Waiting';

            const activityFeed = document.getElementById('player-activity-feed');
            activityFeed.innerHTML = '';

            if (!activities.length) {
                activityFeed.innerHTML = '<div class="activity-item">No tracked player actions yet.</div>';
                return;
            }

            activities.forEach(activity => {
                const item = document.createElement('div');
                item.className = 'activity-item';
                item.innerHTML = `
                    <strong>${activity.action_summary}</strong>
                    <div>${activity.action_type}</div>
                    <div class="activity-time">${new Date(activity.created_at).toLocaleString()}</div>
                `;
                activityFeed.appendChild(item);
            });
        }

        function loadTransactionRequests() {
            if (!currentUserId) return;

            fetch(`get_agent_transaction_requests.php?user_id=${currentUserId}`)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        displayTransactionRequests(data.requests);
                    }
                })
                .catch(error => console.error('Error loading transaction requests:', error));
        }

        function displayTransactionRequests(requests) {
            const requestList = document.getElementById('transaction-request-list');
            const requestStatusText = document.getElementById('request-status-text');
            requestList.innerHTML = '';

            if (!requests.length) {
                requestStatusText.textContent = 'No requests yet';
                requestList.innerHTML = '<div class="activity-item">This player has not submitted any cash requests yet.</div>';
                return;
            }

            const pendingCount = requests.filter(request => request.status === 'pending').length;
            requestStatusText.textContent = pendingCount > 0 ? `${pendingCount} pending` : 'All reviewed';

            requests.forEach(request => {
                const card = document.createElement('div');
                card.className = `request-card ${request.status}`;
                const reviewText = request.reviewed_at ? `Reviewed: ${new Date(request.reviewed_at).toLocaleString()}` : `Sent: ${new Date(request.created_at).toLocaleString()}`;
                const noteText = request.note ? `<div>Player note: ${request.note}</div>` : '';
                const agentNoteText = request.agent_note ? `<div>Agent note: ${request.agent_note}</div>` : '';

                card.innerHTML = `
                    <div class="request-title">${request.request_type === 'cash_in' ? 'Cash In' : 'Cash Out'} - ${formatMoney(request.amount)}</div>
                    <div class="request-meta">Status: ${request.status} | ${reviewText}</div>
                    ${noteText}
                    ${agentNoteText}
                `;

                if (request.status === 'pending') {
                    const actions = document.createElement('div');
                    actions.className = 'request-actions';

                    const approveBtn = document.createElement('button');
                    approveBtn.className = 'approve-btn';
                    approveBtn.textContent = 'Approve';
                    approveBtn.onclick = () => updateTransactionRequest(request.id, 'approved');

                    const declineBtn = document.createElement('button');
                    declineBtn.className = 'decline-btn';
                    declineBtn.textContent = 'Decline';
                    declineBtn.onclick = () => updateTransactionRequest(request.id, 'declined');

                    actions.appendChild(approveBtn);
                    actions.appendChild(declineBtn);
                    card.appendChild(actions);
                }

                requestList.appendChild(card);
            });
        }

        function updateTransactionRequest(requestId, status) {
            const agentNote = window.prompt(`Add a note for this ${status} action (optional):`, '') ?? '';

            fetch('update_transaction_request.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `request_id=${requestId}&status=${encodeURIComponent(status)}&agent_note=${encodeURIComponent(agentNote)}`
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    loadTransactionRequests();
                    loadMessages();
                    loadPlayerDetails();
                    loadUsers();
                } else {
                    alert(data.message);
                }
            })
            .catch(error => {
                console.error('Error updating transaction request:', error);
                alert('Unable to update transaction request.');
            });
        }

        function displayMessages(messages) {
            const messagesContainer = document.getElementById('chat-messages');
            messagesContainer.innerHTML = '';

            if (messages.length === 0) {
                messagesContainer.innerHTML = '<div class="no-selection">No messages yet. Start the conversation!</div>';
                return;
            }

            messages.forEach(message => {
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${message.sender_type}`;

                const time = new Date(message.timestamp).toLocaleString();
                messageDiv.innerHTML = `
                    <div>${message.message}</div>
                    <div class="message-time">${time}</div>
                `;

                messagesContainer.appendChild(messageDiv);
            });

            // Scroll to bottom
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function sendMessage() {
            const messageInput = document.getElementById('message-input');
            const message = messageInput.value.trim();

            if (!message || !currentUserId) return;

            fetch('send_agent_message.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `user_id=${currentUserId}&message=${encodeURIComponent(message)}`
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    messageInput.value = '';
                    loadMessages(); // Refresh messages immediately
                    loadUsers();
                } else {
                    alert('Failed to send message: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while sending the message.');
            });
        }

        // Send message on Enter key
        document.getElementById('message-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        function logout() {
            fetch('agent_logout.php')
                .then(() => {
                    if (messageInterval) {
                        clearInterval(messageInterval);
                    }
                    document.getElementById('dashboard-container').classList.add('hidden');
                    document.getElementById('login-container').classList.remove('hidden');
                    document.getElementById('agent-login-form').reset();
                    document.getElementById('agent-register-form').reset();
                    document.getElementById('login-message').textContent = '';
                    showAgentAuth('login');
                })
                .catch(error => console.error('Error:', error));
        }

        function formatMoney(value) {
            return Number(value || 0).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }
    </script>
</body>
</html></content>
<parameter name="filePath">c:\xampp\htdocs\SPIN11\SPIN\agent_dashboard.php
