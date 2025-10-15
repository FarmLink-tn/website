<?php

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

if (!function_exists('agrimate_bootstrap_contact_environment')) {
    function agrimate_bootstrap_contact_environment(): void
    {
        static $bootstrapped = false;

        if ($bootstrapped) {
            return;
        }

        $bootstrapped = true;

        $autoloadCandidates = [
            __DIR__ . '/../vendor/autoload.php',
            dirname(__DIR__, 2) . '/vendor/autoload.php',
        ];

        foreach ($autoloadCandidates as $autoload) {
            if (is_file($autoload)) {
                require_once $autoload;
                break;
            }
        }

        $envFiles = [
            dirname(__DIR__) . '/.env',
            dirname(__DIR__, 2) . '/.env',
        ];

        $envLoaded = false;
        if (class_exists(Dotenv\Dotenv::class)) {
            foreach ($envFiles as $envFile) {
                if (!is_file($envFile)) {
                    continue;
                }

                $dotenv = Dotenv\Dotenv::createImmutable(dirname($envFile), basename($envFile));
                $dotenv->safeLoad();
                $envLoaded = true;
                break;
            }
        }

        if ($envLoaded) {
            return;
        }

        foreach ($envFiles as $envFile) {
            if (!is_file($envFile)) {
                continue;
            }

            $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            if ($lines === false) {
                continue;
            }

            foreach ($lines as $line) {
                $line = trim($line);
                if ($line === '' || str_starts_with($line, '#')) {
                    continue;
                }

                if (!str_contains($line, '=')) {
                    continue;
                }

                [$key, $value] = array_map('trim', explode('=', $line, 2));
                if ($key === '' || getenv($key) !== false) {
                    continue;
                }

                $value = trim($value, "\"' ");
                putenv("{$key}={$value}");
                $_ENV[$key] = $value;
                $_SERVER[$key] = $_SERVER[$key] ?? $value;
            }

            break;
        }
    }
}

if (!function_exists('agrimate_send_contact_mail')) {
    function agrimate_send_contact_mail(array $payload): array
    {
        agrimate_bootstrap_contact_environment();

        $name    = $payload['name'] ?? '';
        $email   = $payload['email'] ?? '';
        $phone   = $payload['phone'] ?? '';
        $message = $payload['message'] ?? '';

        $to        = getenv('MAIL_TO_ADDRESS') ?: 'contact@farmlink.tn';
        $subject   = 'Nouveau message de contact';
        $fromName  = getenv('MAIL_FROM_NAME') ?: 'FarmLink';
        $fromEmail = getenv('MAIL_FROM_ADDRESS') ?: 'noreply@farmlink.tn';
        $replyName = $name ?: $email;
        $envelope  = getenv('MAIL_ENVELOPE_FROM') ?: $fromEmail;

        $bodyLines = [
            'Nom: ' . $name,
            'Email: ' . $email,
            'Téléphone: ' . $phone,
            'Message:',
            $message,
        ];

        $body = implode("\n", $bodyLines);

        if (class_exists(PHPMailer::class)) {
            $mailer = new PHPMailer(true);

            try {
                $smtpHost = getenv('MAIL_SMTP_HOST');
                if ($smtpHost) {
                    $mailer->isSMTP();
                    $mailer->Host       = $smtpHost;
                    $mailer->Port       = getenv('MAIL_SMTP_PORT') ?: 587;
                    $mailer->SMTPAuth   = (bool) getenv('MAIL_SMTP_USERNAME');
                    $mailer->Username   = getenv('MAIL_SMTP_USERNAME') ?: '';
                    $mailer->Password   = getenv('MAIL_SMTP_PASSWORD') ?: '';
                    $defaultSecure      = defined('PHPMailer\\PHPMailer\\PHPMailer::ENCRYPTION_STARTTLS')
                        ? PHPMailer::ENCRYPTION_STARTTLS
                        : 'tls';
                    $mailer->SMTPSecure = getenv('MAIL_SMTP_SECURE') ?: $defaultSecure;
                } else {
                    $mailer->isMail();
                }

                $mailer->CharSet = 'UTF-8';
                $mailer->setFrom($fromEmail, $fromName);
                $mailer->addAddress($to);
                $mailer->addReplyTo($email, $replyName);

                $mailer->Subject = $subject;
                $mailer->Body    = $body;

                if ($mailer->send()) {
                    return [
                        'success' => true,
                        'status'  => 200,
                        'message' => 'Message envoyé avec succès.',
                    ];
                }

                error_log('Contact mail error: PHPMailer send() returned false.');
            } catch (Exception $exception) {
                error_log('Contact mail error: ' . $exception->getMessage());
            } catch (\Throwable $throwable) {
                error_log('Contact mail error: ' . $throwable->getMessage());
            }
        }

        $headers = [
            'From: ' . agrimate_format_address($fromEmail, $fromName),
            'Reply-To: ' . agrimate_format_address($email, $replyName),
            'Content-Type: text/plain; charset=UTF-8',
            'MIME-Version: 1.0',
        ];

        $messageHeaders = implode("\r\n", $headers);

        $extraParams = '';
        if ($envelope) {
            $sanitizedEnvelope = preg_replace('/[^a-zA-Z0-9_@\-.+]/', '', $envelope);
            if ($sanitizedEnvelope) {
                $extraParams = '-f' . $sanitizedEnvelope;
            }
        }

        if ($extraParams) {
            $sent = mail($to, $subject, $body, $messageHeaders, $extraParams);
        } else {
            $sent = mail($to, $subject, $body, $messageHeaders);
        }

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
}

if (!function_exists('agrimate_format_address')) {
    function agrimate_format_address(string $email, string $name): string
    {
        $trimmedName = trim($name);
        if ($trimmedName === '' || strcasecmp($trimmedName, $email) === 0) {
            return $email;
        }

        if (function_exists('mb_encode_mimeheader')) {
            $trimmedName = mb_encode_mimeheader($trimmedName, 'UTF-8', 'B');
        } else {
            $trimmedName = '"' . addcslashes($trimmedName, '"') . '"';
        }

        return sprintf('%s <%s>', $trimmedName, $email);
    }
}

