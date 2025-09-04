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
