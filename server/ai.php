<?php

// server/ai.php
// Attempts a call to the requested AI provider and falls back to the other on error.
// The name of the provider actually used is returned in the JSON response.

header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true) ?? [];
$prompt = $input['prompt'] ?? '';
$requested = $input['provider'] ?? 'openai';

if (!$prompt) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing prompt']);
    exit;
}

$providers = ['openai', 'anthropic'];
$other = $requested === $providers[0] ? $providers[1] : $providers[0];

$used = $requested;
$result = call_provider($used, $prompt);
if ($result['error']) {
    $used = $other;
    $result = call_provider($used, $prompt);
    if ($result['error']) {
        http_response_code(502);
        echo json_encode(['success' => false, 'provider' => $used, 'message' => $result['message'] ?? 'Both providers failed']);
        exit;
    }
}

echo json_encode(['success' => true, 'provider' => $used, 'data' => $result['data'] ?? null]);

function call_provider(string $provider, string $prompt): array {
    $apiKey = getenv(strtoupper($provider) . '_API_KEY');
    if (!$apiKey) {
        return ['error' => true, 'message' => 'Missing API key'];
    }

    $ch = curl_init();
    if ($provider === 'openai') {
        $url = 'https://api.openai.com/v1/chat/completions';
        $payload = json_encode([
            'model' => 'gpt-3.5-turbo',
            'messages' => [['role' => 'user', 'content' => $prompt]],
        ]);
        curl_setopt_array($ch, [
            CURLOPT_URL => $url,
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',
                "Authorization: Bearer $apiKey",
            ],
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $payload,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 10,
        ]);
    } else {
        $url = 'https://api.anthropic.com/v1/messages';
        $payload = json_encode([
            'model' => 'claude-3-haiku-20240307',
            'max_tokens' => 1024,
            'messages' => [['role' => 'user', 'content' => $prompt]],
        ]);
        curl_setopt_array($ch, [
            CURLOPT_URL => $url,
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',
                "x-api-key: $apiKey",
                'anthropic-version: 2023-06-01',
            ],
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $payload,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 10,
        ]);
    }

    $response = curl_exec($ch);
    $errno = curl_errno($ch);
    $status = curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    curl_close($ch);

    if ($errno || $status >= 500) {
        return ['error' => true, 'message' => 'Provider error', 'status' => $status, 'errno' => $errno];
    }

    $data = json_decode($response, true);
    return ['error' => false, 'data' => $data];
}
=======
header('Content-Type: application/json');

$provider = $_GET['provider'] ?? $_POST['provider'] ?? '';
$prompt   = $_GET['prompt'] ?? $_POST['prompt'] ?? '';

if (!$provider || !$prompt) {
    http_response_code(400);
    echo json_encode(['error' => ['message' => 'Paramètres provider et prompt requis.']]);
    exit;
}

try {
    switch ($provider) {
        case 'chatgpt':
            $apiKey = $_ENV['OPENAI_API_KEY'] ?? '';
            if (!$apiKey) {
                http_response_code(500);
                echo json_encode(['error' => ['message' => 'Clé API OpenAI manquante.']]);
                exit;
            }

            $url  = 'https://api.openai.com/v1/chat/completions';
            $data = [
                'model' => 'gpt-4o-mini',
                'messages' => [
                    ['role' => 'user', 'content' => $prompt]
                ]
            ];

            $ch = curl_init($url);
            curl_setopt_array($ch, [
                CURLOPT_POST => true,
                CURLOPT_HTTPHEADER => [
                    'Content-Type: application/json',
                    'Authorization: Bearer ' . $apiKey,
                ],
                CURLOPT_POSTFIELDS => json_encode($data),
                CURLOPT_RETURNTRANSFER => true,
            ]);
            break;

        case 'gemini':
            $apiKey = $_ENV['GEMINI_API_KEY'] ?? '';
            if (!$apiKey) {
                http_response_code(500);
                echo json_encode(['error' => ['message' => 'Clé API Gemini manquante.']]);
                exit;
            }

            $url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' . urlencode($apiKey);
            $data = [
                'contents' => [
                    [
                        'parts' => [
                            ['text' => $prompt]
                        ]
                    ]
                ]
            ];

            $ch = curl_init($url);
            curl_setopt_array($ch, [
                CURLOPT_POST => true,
                CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
                CURLOPT_POSTFIELDS => json_encode($data),
                CURLOPT_RETURNTRANSFER => true,
            ]);
            break;

        default:
            http_response_code(400);
            echo json_encode(['error' => ['message' => 'Provider invalide.']]);
            exit;
    }

    $response = curl_exec($ch);
    if ($response === false) {
        throw new Exception(curl_error($ch));
    }

    $statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($statusCode >= 400) {
        http_response_code($statusCode);
        echo json_encode(['error' => ['message' => 'Erreur API', 'details' => $response]]);
        exit;
    }

    http_response_code($statusCode);
    echo $response;
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => ['message' => $e->getMessage()]]);
}
?>

