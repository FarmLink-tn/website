<?php
session_start();
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
        exit;
    }
}

$autoloadCandidates = [
    __DIR__ . '/../vendor/autoload.php',
    dirname(__DIR__, 2) . '/vendor/autoload.php',
];

foreach ($autoloadCandidates as $autoload) {
    if (file_exists($autoload)) {
        require_once $autoload;
        break;
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
$to         = getenv('MAIL_TO_ADDRESS') ?: 'contact@farmlink.tn';
$subject    = 'Nouveau message de contact';
$fromName   = getenv('MAIL_FROM_NAME') ?: 'FarmLink';
$fromEmail  = getenv('MAIL_FROM_ADDRESS') ?: 'noreply@farmlink.tn';
$replyName  = $name ?: $cleanEmail;
$envelope   = getenv('MAIL_ENVELOPE_FROM') ?: $fromEmail;

$bodyLines = [
    'Nom: ' . $name,
    'Email: ' . $cleanEmail,
    'Téléphone: ' . $phone,
    'Message:',
    $message,
];
$body = implode("\n", $bodyLines);

if (class_exists(\PHPMailer\PHPMailer\PHPMailer::class)) {
    $mail = new \PHPMailer\PHPMailer\PHPMailer(true);

    try {
        $smtpHost = getenv('MAIL_SMTP_HOST');
        if ($smtpHost) {
            $mail->isSMTP();
            $mail->Host       = $smtpHost;
            $mail->Port       = getenv('MAIL_SMTP_PORT') ?: 587;
            $mail->SMTPAuth   = (bool) getenv('MAIL_SMTP_USERNAME');
            $mail->Username   = getenv('MAIL_SMTP_USERNAME') ?: '';
            $mail->Password   = getenv('MAIL_SMTP_PASSWORD') ?: '';
            $defaultSecure    = defined('\\PHPMailer\\PHPMailer\\PHPMailer::ENCRYPTION_STARTTLS')
                ? \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS
                : 'tls';
            $mail->SMTPSecure = getenv('MAIL_SMTP_SECURE') ?: $defaultSecure;
        } else {
            $mail->isMail();
        }

        $mail->CharSet = 'UTF-8';
        $mail->setFrom($fromEmail, $fromName);
        $mail->addAddress($to);
        $mail->addReplyTo($cleanEmail, $replyName);

        $mail->Subject = $subject;
        $mail->Body    = $body;

        if ($mail->send()) {
            echo json_encode(['success' => true, 'message' => 'Message envoyé avec succès.']);
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => "Échec de l'envoi du message."]);
        }
    } catch (\Throwable $e) {
        error_log('Contact mail error: ' . $e->getMessage());
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => "Erreur lors de l'envoi du message."]);
    }
    exit;
}

$headers = [
    'From: ' . formatAddress($fromEmail, $fromName),
    'Reply-To: ' . formatAddress($cleanEmail, $replyName),
    'Content-Type: text/plain; charset=UTF-8',
    'MIME-Version: 1.0',
];

$extraParams = '';
if ($envelope) {
    $sanitizedEnvelope = preg_replace('/[^a-zA-Z0-9_@\-.+]/', '', $envelope);
    if ($sanitizedEnvelope) {
        $extraParams = '-f' . $sanitizedEnvelope;
    }
}

$messageHeaders = implode("\r\n", $headers);

if ($extraParams) {
    $sent = mail($to, $subject, $body, $messageHeaders, $extraParams);
} else {
    $sent = mail($to, $subject, $body, $messageHeaders);
}

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Message envoyé avec succès.']);
} else {
    error_log('Contact mail error: mail() returned false.');
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => "Erreur lors de l'envoi du message."]);
}

function formatAddress(string $email, string $name): string
{
    $encodedName = trim($name);
    if ($encodedName === '' || strcasecmp($encodedName, $email) === 0) {
        return $email;
    }

    if (function_exists('mb_encode_mimeheader')) {
        $encodedName = mb_encode_mimeheader($encodedName, 'UTF-8', 'B');
    } else {
        $encodedName = '"' . addcslashes($encodedName, '"') . '"';
    }

    return sprintf('%s <%s>', $encodedName, $email);
}
