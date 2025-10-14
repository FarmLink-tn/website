<?php

$sharedLoader = __DIR__ . '/../agrimate-website/server/config_loader.php';
if (is_file($sharedLoader)) {
    require_once $sharedLoader;

    if (function_exists('agrimate_load_config')) {
        return agrimate_load_config();
    }
}

$autoload = __DIR__ . '/../vendor/autoload.php';
if (is_file($autoload)) {
    require_once $autoload;
}

if (class_exists(Dotenv\Dotenv::class)) {
    $dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
    $dotenv->safeLoad();
} else {
    $envFile = dirname(__DIR__) . '/.env';
    if (is_file($envFile)) {
        $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        if ($lines !== false) {
            foreach ($lines as $line) {
                $line = trim($line);
                if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) {
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
        }
    }
}

return [
    'host' => getenv('DB_HOST') ?: '',
    'dbname' => getenv('DB_NAME') ?: '',
    'user' => getenv('DB_USER') ?: '',
    'password' => getenv('DB_PASSWORD') ?: '',
];
