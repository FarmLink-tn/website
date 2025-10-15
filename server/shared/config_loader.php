<?php

require_once __DIR__ . '/bootstrap.php';

if (!function_exists('agrimate_load_config')) {
    /**
     * Returns database connection credentials after bootstrapping the environment.
     */
    function agrimate_load_config(): array
    {
        agrimate_shared_bootstrap_environment();

        return [
            'host' => getenv('DB_HOST') ?: '',
            'dbname' => getenv('DB_NAME') ?: '',
            'user' => getenv('DB_USER') ?: '',
            'password' => getenv('DB_PASSWORD') ?: '',
        ];
    }
}
