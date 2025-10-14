<?php

require_once __DIR__ . '/../vendor/autoload.php';

// Load environment variables from the .env file if present
$dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
$dotenv->safeLoad();

return [
    'host' => getenv('DB_HOST') ?: '',
    'dbname' => getenv('DB_NAME') ?: '',
    'user' => getenv('DB_USER') ?: '',
    'password' => getenv('DB_PASSWORD') ?: '',
];
