<?php
/**
 * Euromarmi contact form handler.
 * Upload alongside index.html on the hosting root and point the
 * form's action="contact.php" at it (see src/routes/index.tsx).
 */

declare(strict_types=1);

$to = "info@euromarmisantori.it";
$siteUrl = "https://www.euromarmisantori.it";

function redirect_error(string $reason): void
{
    header("Location: /?errore=" . urlencode($reason) . "#form-contatti");
    exit;
}

function clean(string $value): string
{
    $value = trim($value);
    // Strip anything that could be used for header injection.
    $value = str_replace(["\r", "\n"], "", $value);
    return $value;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    redirect_error("metodo-non-valido");
}

// Honeypot: real visitors never fill this hidden field.
if (!empty($_POST["_honey"] ?? "")) {
    header("Location: " . $siteUrl . "/#form-contatti");
    exit;
}

$nome = clean($_POST["nome"] ?? "");
$email = clean($_POST["email"] ?? "");
$telefono = clean($_POST["telefono"] ?? "");
$progetto = trim($_POST["progetto"] ?? "");

if ($nome === "" || $email === "" || $progetto === "") {
    redirect_error("campi-mancanti");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    redirect_error("email-non-valida");
}

$subject = "Nuova richiesta dal sito Euromarmi";

$body = "Nuovo messaggio dal form di euromarmisantori.it\n\n";
$body .= "Nome: {$nome}\n";
$body .= "Email: {$email}\n";
$body .= "Telefono: " . ($telefono !== "" ? $telefono : "-") . "\n\n";
$body .= "Progetto:\n{$progetto}\n";

$fromDomain = parse_url($siteUrl, PHP_URL_HOST) ?: "euromarmisantori.it";
$headers = [];
$headers[] = "From: Sito Euromarmi <no-reply@{$fromDomain}>";
$headers[] = "Reply-To: {$nome} <{$email}>";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
$headers[] = "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    header("Location: " . $siteUrl . "/#form-contatti?inviato=1");
} else {
    redirect_error("invio-fallito");
}
exit;
