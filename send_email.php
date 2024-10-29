<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $subject = htmlspecialchars(trim($_POST["subject"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    if (!empty($name) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($subject) && !empty($message)) {
        // Création de l'instance de PHPMailer pour envoyer le message à toi (admin)
        $mail = new PHPMailer(true);
        try {
            // Paramètres du serveur
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com'; // Remplace par ton hôte SMTP
            $mail->SMTPAuth = true;
            $mail->Username = 'ozoboy100@gmail.com'; // Remplace par ton email SMTP
            $mail->Password = 'arrs mgft erpk dlxs'; // Remplace par ton mot de passe SMTP
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            // Destinataire du message
            $mail->setFrom($email, $name);
            $mail->addAddress('ozoboy100@gmail.com'); // Remplace par ton adresse de réception

            // Contenu du message
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = "<p>Nom: $name</p><p>Email: $email</p><p>Message: $message</p>";

            // Envoi du message à toi (admin)
            $mail->send();
            header('Location:index.php');

            // Accusé de réception pour l'utilisateur
            $replyMail = new PHPMailer(true);
            $replyMail->isSMTP();
            $replyMail->Host = 'smtp.gmail.com'; // Même hôte SMTP
            $replyMail->SMTPAuth = true;
            $replyMail->Username = 'ozoboy100@gmail.com';
            $replyMail->Password = 'arrs mgft erpk dlxs';
            $replyMail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $replyMail->Port = 587;

            // Destinataire : l'utilisateur
            $replyMail->setFrom('ozoboy@portfolio.com', 'Prise de contact');
            $replyMail->addAddress($email); // Envoi à l'utilisateur

            // Contenu de l'accusé de réception
            $replyMail->isHTML(true);
            $replyMail->CharSet = 'UTF-8';
            $replyMail->Subject = "Accusé de réception - Merci pour votre message !";
            $replyMail->Body = "
                <p>Bonjour $name,</p>
                <p>Merci d'avoir pris contact ! j'ai bien reçu votre message :</p>
                <blockquote>$message</blockquote>
                <p>Je vous contacterais dans les plus brefs délais.</p>
                <p>Bien cordialement,<br>Ousmane Alou Coulibaly</p>";

            // Envoi de l'accusé de réception
            $replyMail->send();

            echo "<script>alert('Merci, votre message a été envoyé avec succès !'); window.location.href = 'index.php';</script>";
        } catch (Exception $e) {
            echo "<script>alert('Erreur lors de l'envoi du message.'); window.history.back();</script>";
        }
    } else {
        echo "<script>alert('Veuillez remplir tous les champs correctement.'); window.history.back();</script>";
    }
}
?>
