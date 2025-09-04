<?php
header('Content-Type: application/json');

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');

if (!$name || !$email || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Champs invalides ou manquants.']);
    exit;
}

$to = 'contact@farmlink.tn';
$subject = 'Nouveau message de contact';
$body = "Nom: $name\nEmail: $email\nTéléphone: $phone\nMessage:\n$message";
$headers = "From: $email\r\nReply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Message envoyé avec succès.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => "Échec de l'envoi du message."]);
}
?>
