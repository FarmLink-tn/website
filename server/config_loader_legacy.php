<?php

if (!function_exists('agrimate_load_config')) {
    /**
     * Loads database credentials when the dynamic project's loader is unavailable.
     */
    function agrimate_load_config(): array
    {
        $autoload = __DIR__ . '/../vendor/autoload.php';
        if (is_file($autoload)) {
            require_once $autoload;
        }

        $envFile = dirname(__DIR__) . '/.env';

        $envLoaded = false;
        if (class_exists(Dotenv\Dotenv::class) && is_file($envFile)) {
            $dotenv = Dotenv\Dotenv::createImmutable(dirname($envFile), basename($envFile));
            $dotenv->safeLoad();
            $envLoaded = true;
        }

        if (!$envLoaded && is_file($envFile)) {
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

        return [
            'host' => getenv('DB_HOST') ?: '',
            'dbname' => getenv('DB_NAME') ?: '',
            'user' => getenv('DB_USER') ?: '',
            'password' => getenv('DB_PASSWORD') ?: '',
        ];
    }
}

