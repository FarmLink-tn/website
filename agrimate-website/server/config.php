<?php
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

$envFiles = [
    dirname(__DIR__) . '/.env',
    dirname(__DIR__, 2) . '/.env',
];

$envLoaded = false;
if (class_exists(Dotenv\Dotenv::class)) {
    foreach ($envFiles as $envFile) {
        if (is_file($envFile)) {
            $dotenv = Dotenv\Dotenv::createImmutable(dirname($envFile), basename($envFile));
            $dotenv->safeLoad();
            $envLoaded = true;
            break;
        }
    }
}

if (!$envLoaded) {
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

return [
    'host' => getenv('DB_HOST') ?: '',
    'dbname' => getenv('DB_NAME') ?: '',
    'user' => getenv('DB_USER') ?: '',
    'password' => getenv('DB_PASSWORD') ?: '',
];
