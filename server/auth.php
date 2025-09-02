<?php
session_start();
header('Content-Type: application/json');

$config = require __DIR__ . '/config.php';

try {
    $pdo = new PDO(
        "mysql:host={$config['host']};dbname={$config['dbname']};charset=utf8mb4",
        $config['user'],
        $config['password'],
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
    exit;
}

$action = $_GET['action'] ?? '';

// Helper to read JSON body
$input = json_decode(file_get_contents('php://input'), true) ?? [];
$username = $input['username'] ?? '';
$password = $input['password'] ?? '';

switch ($action) {
    case 'register':
        if (!$username || !$password) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Missing fields']);
            break;
        }
        $stmt = $pdo->prepare('SELECT id FROM users WHERE username = ?');
        $stmt->execute([$username]);
        if ($stmt->fetch()) {
            echo json_encode(['success' => false, 'message' => 'Username already exists']);
            break;
        }
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare('INSERT INTO users (username, password_hash) VALUES (?, ?)');
        $stmt->execute([$username, $hash]);
        echo json_encode(['success' => true]);
        break;

    case 'login':
        if (!$username || !$password) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Missing fields']);
            break;
        }
        $stmt = $pdo->prepare('SELECT id, password_hash FROM users WHERE username = ?');
        $stmt->execute([$username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($user && password_verify($password, $user['password_hash'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $username;
            echo json_encode(['success' => true, 'username' => $username]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid credentials']);
        }
        break;

    case 'check':
        if (isset($_SESSION['username'])) {
            echo json_encode(['loggedIn' => true, 'username' => $_SESSION['username']]);
        } else {
            echo json_encode(['loggedIn' => false]);
        }
        break;

    case 'logout':
        session_destroy();
        echo json_encode(['success' => true]);
        break;

    default:
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid action']);
}
