<?php
session_start();
header('Content-Type: application/json');

// Ensure CSRF token exists
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Not authenticated']);
    exit;
}

// Validate CSRF token on non-GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    $token = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
    if (!$token || !hash_equals($_SESSION['csrf_token'], $token)) {
        http_response_code(403);
        echo json_encode(['success' => false, 'message' => 'Invalid CSRF token']);
        exit;
    }
}

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

$userId = $_SESSION['user_id'];
$method = $_SERVER['REQUEST_METHOD'];

// Optional SMS integration placeholder
function send_sms($phone, $message) {
    $url = getenv('SMS_API_URL');
    if (!$url) return;
    $query = http_build_query(['to' => $phone, 'message' => $message]);
    @file_get_contents("$url?$query");
}

switch ($method) {
    case 'GET':
        $id = $_GET['id'] ?? null;
        if ($id) {
            $stmt = $pdo->prepare('SELECT * FROM products WHERE user_id = ? AND id = ?');
            $stmt->execute([$userId, $id]);
            $product = $stmt->fetch(PDO::FETCH_ASSOC);
            echo json_encode($product ?: []);
        } else {
            $stmt = $pdo->prepare('SELECT * FROM products WHERE user_id = ?');
            $stmt->execute([$userId]);
            echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        }
        break;

    case 'POST':
        $input = json_decode(file_get_contents('php://input'), true) ?? [];
        $stmt = $pdo->prepare('INSERT INTO products (user_id, name, quantity, phone, ph, rain, humidity, soil_humidity, light, valve_open, valve_angle) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
        $stmt->execute([
            $userId,
            $input['name'] ?? '',
            $input['quantity'] ?? 0,
            $input['phone'] ?? '',
            $input['ph'] ?? null,
            $input['rain'] ?? null,
            $input['humidity'] ?? null,
            $input['soil_humidity'] ?? null,
            $input['light'] ?? null,
            $input['valve_open'] ?? 0,
            $input['valve_angle'] ?? 0
        ]);
        if (!empty($input['send_sms'])) {
            send_sms($input['phone'], 'New order for ' . ($input['name'] ?? 'product'));
        }
        echo json_encode(['success' => true, 'id' => $pdo->lastInsertId()]);
        break;

    case 'PUT':
        parse_str($_SERVER['QUERY_STRING'] ?? '', $query);
        $id = $query['id'] ?? null;
        if (!$id) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Missing id']);
            break;
        }
        $input = json_decode(file_get_contents('php://input'), true) ?? [];
        $fields = [];
        $params = [];
        foreach (['name','quantity','phone','ph','rain','humidity','soil_humidity','light','valve_open','valve_angle'] as $field) {
            if (isset($input[$field])) {
                $fields[] = "$field = ?";
                $params[] = $input[$field];
            }
        }
        if (!$fields) {
            echo json_encode(['success' => false, 'message' => 'No fields to update']);
            break;
        }
        $params[] = $userId;
        $params[] = $id;
        $stmt = $pdo->prepare('UPDATE products SET ' . implode(',', $fields) . ' WHERE user_id = ? AND id = ?');
        $stmt->execute($params);
        if (!empty($input['send_sms'])) {
            $stmt = $pdo->prepare('SELECT phone, name FROM products WHERE user_id = ? AND id = ?');
            $stmt->execute([$userId, $id]);
            $prod = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($prod) {
                send_sms($prod['phone'], 'Order update for ' . $prod['name']);
            }
        }
        echo json_encode(['success' => true]);
        break;

    case 'DELETE':
        parse_str($_SERVER['QUERY_STRING'] ?? '', $query);
        $id = $query['id'] ?? null;
        if (!$id) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Missing id']);
            break;
        }
        $stmt = $pdo->prepare('DELETE FROM products WHERE user_id = ? AND id = ?');
        $stmt->execute([$userId, $id]);
        echo json_encode(['success' => true]);
        break;

    default:
        http_response_code(405);
        echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>
