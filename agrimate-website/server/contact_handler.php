<?php

require_once __DIR__ . '/contact_mailer.php';

if (!function_exists('agrimate_handle_contact_request')) {
    /**
     * Handles the JSON contact endpoint, including CSRF validation and mail delivery.
     */
    function agrimate_handle_contact_request(): void
    {
        if (session_status() !== PHP_SESSION_ACTIVE) {
            session_start();
        }

        header('Content-Type: application/json; charset=UTF-8');

        if (empty($_SESSION['csrf_token'])) {
            $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
        }

        $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
        $token  = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? ($_POST['csrf_token'] ?? '');

        if ($method !== 'GET') {
            if (!$token || !hash_equals($_SESSION['csrf_token'], $token)) {
                http_response_code(403);
                echo json_encode(['success' => false, 'message' => 'Invalid CSRF token']);
                return;
            }
        }

        $name    = trim($_POST['name']    ?? '');
        $email   = trim($_POST['email']   ?? '');
        $phone   = trim($_POST['phone']   ?? '');
        $message = trim($_POST['message'] ?? '');

        if (!$name || !$email || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Champs invalides ou manquants.']);
            return;
        }

        if (preg_match('/[\r\n]/', $email)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Email invalide.']);
            return;
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
    }
}

