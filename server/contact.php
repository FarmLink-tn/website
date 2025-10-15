<?php

$sharedHandler = __DIR__ . '/../agrimate-website/server/contact_handler.php';
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

    require_once __DIR__ . '/contact_handler_legacy.php';
}

agrimate_handle_contact_request();
