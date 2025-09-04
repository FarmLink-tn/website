<?php
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
