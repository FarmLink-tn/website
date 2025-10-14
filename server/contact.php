<?php
session_start();
header('Content-Type: application/json; charset=UTF-8');

$sharedHandler = __DIR__ . '/../agrimate-website/server/contact_mailer.php';
if (is_file($sharedHandler)) {
    require_once $sharedHandler;
} else {
    $rootAutoload = __DIR__ . '/../vendor/autoload.php';
    if (is_file($rootAutoload)) {
        require_once $rootAutoload;
    }

    if (!function_exists('agrimate_send_contact_mail')) {
        require_once __DIR__ . '/contact_mailer_legacy.php';
    }
}

if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$token  = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? ($_POST['csrf_token'] ?? '');

if ($method !== 'GET') {
    if (!$token || !hash_equals($_SESSION['csrf_token'], $token)) {
        http_response_code(403);
        echo json_encode(['success' => false, 'message' => 'Invalid CSRF token']);
        exit;
    }
}

$name    = trim($_POST['name']    ?? '');
$email   = trim($_POST['email']   ?? '');
$phone   = trim($_POST['phone']   ?? '');
$message = trim($_POST['message'] ?? '');

if (!$name || !$email || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Champs invalides ou manquants.']);
    exit;
}

if (preg_match('/[\r\n]/', $email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email invalide.']);
    exit;
}

$cleanEmail = filter_var($email, FILTER_SANITIZE_EMAIL);

$result = agrimate_send_contact_mail([
    'name'    => $name,
    'email'   => $cleanEmail,
    'phone'   => $phone,
    'message' => $message,
]);

http_response_code($result['status']);
echo json_encode([
    'success' => $result['success'],
    'message' => $result['message'],
]);
