<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if (!function_exists('agrimate_send_contact_mail')) {
    function agrimate_send_contact_mail(array $payload): array
    {
        $name    = $payload['name'] ?? '';
        $email   = $payload['email'] ?? '';
        $phone   = $payload['phone'] ?? '';
        $message = $payload['message'] ?? '';

        $to      = 'contact@farmlink.tn';
        $subject = 'Nouveau message de contact';
        $body    = "Nom: {$name}\nEmail: {$email}\nTéléphone: {$phone}\nMessage:\n{$message}";

        if (!class_exists(PHPMailer::class)) {
            $sent = mail($to, $subject, $body);

            if ($sent) {
                return [
                    'success' => true,
                    'status'  => 200,
                    'message' => 'Message envoyé avec succès.',
                ];
            }

            error_log('Contact mail error: mail() returned false.');

            return [
                'success' => false,
                'status'  => 500,
                'message' => "Erreur lors de l'envoi du message.",
            ];
        }

        $mailer = new PHPMailer(true);

        try {
            $mailer->setFrom('noreply@farmlink.tn', 'FarmLink');
            $mailer->addAddress($to);
            $mailer->addReplyTo($email ?: $name);
            $mailer->Subject = $subject;
            $mailer->Body    = $body;

            if ($mailer->send()) {
                return [
                    'success' => true,
                    'status'  => 200,
                    'message' => 'Message envoyé avec succès.',
                ];
            }
        } catch (Exception $exception) {
            error_log('Contact mail error: ' . $exception->getMessage());
        }

        return [
            'success' => false,
            'status'  => 500,
            'message' => "Erreur lors de l'envoi du message.",
        ];
    }
}

