<?php

if (!function_exists('agrimate_shared_bootstrap_environment')) {
    /**
     * Loads Composer autoloaders and environment variables for both project layouts.
     */
    function agrimate_shared_bootstrap_environment(): void
    {
        static $bootstrapped = false;

        if ($bootstrapped) {
            return;
        }

        $bootstrapped = true;

        $projectRoot = dirname(__DIR__, 2);
        $candidateRoots = array_unique([
            $projectRoot . '/agrimate-website',
            $projectRoot,
            dirname(__DIR__),
        ]);

        foreach ($candidateRoots as $root) {
            $autoload = $root . '/vendor/autoload.php';
            if (is_file($autoload)) {
                require_once $autoload;
            }
        }

        $envFiles = [];
        foreach ($candidateRoots as $root) {
            $envPath = $root . '/.env';
            if (!in_array($envPath, $envFiles, true)) {
                $envFiles[] = $envPath;
            }
        }

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
                if (!array_key_exists($key, $_SERVER)) {
                    $_SERVER[$key] = $value;
                }
            }

            break;
        }
    }
}
