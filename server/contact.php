<?php
header('Content-Type: application/json');

require_once __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');

if (!$name || !$email || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Champs invalides ou manquants.']);
    exit;
}

// Reject potential header injection
if (preg_match('/[\r\n]/', $email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email invalide.']);
    exit;
}

$cleanEmail = filter_var($email, FILTER_SANITIZE_EMAIL);
$to = 'contact@farmlink.tn';
$subject = 'Nouveau message de contact';
$body = "Nom: $name\nEmail: $cleanEmail\nTéléphone: $phone\nMessage:\n$message";

$mail = new PHPMailer(true); // PHPMailer helps prevent header injection

try {
    $mail->setFrom('noreply@farmlink.tn', 'FarmLink');
    $mail->addAddress($to);
    $mail->addReplyTo($cleanEmail);

    $mail->Subject = $subject;
    $mail->Body    = $body;

    if ($mail->send()) {
        echo json_encode(['success' => true, 'message' => 'Message envoyé avec succès.']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => "Échec de l'envoi du message."]);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'envoi du message.']);
}
?>
