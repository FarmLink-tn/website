<?php

$sharedConfig = __DIR__ . '/../agrimate-website/server/config.php';
if (is_file($sharedConfig)) {
    return require $sharedConfig;
}

$sharedLoader = __DIR__ . '/../agrimate-website/server/config_loader.php';
if (is_file($sharedLoader)) {
    require_once $sharedLoader;
} else {
    require_once __DIR__ . '/config_loader_legacy.php';
}

return agrimate_load_config();
