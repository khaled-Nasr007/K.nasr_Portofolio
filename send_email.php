<?php

$errors = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get POST data safely
    $name = strip_tags(trim($_POST['name'] ?? ''));
    $email = trim($_POST['email'] ?? '');
    $message = strip_tags(trim($_POST['message'] ?? ''));
    $subject = $_POST['_subject'] ?? 'Website Contact Form';

    // Validation
    if (empty($name)) {
        $errors[] = 'Name is empty';
    }

    if (empty($email)) {
        $errors[] = 'Email is empty';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email is invalid';
    }

    if (empty($message)) {
        $errors[] = 'Message is empty';
    }

    // Send email if valid
    if (empty($errors)) {

        $recipient = "khalednasr007@gmail.com";

        $email_content =
            "Name: $name\n".
            "Email: $email\n\n".
            "Message:\n$message";

        $headers = "From: website@yourdomain.com\r\n";
        $headers .= "Reply-To: $email\r\n";

        if (mail($recipient, $subject, $email_content, $headers)) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email. Please try again.";
        }

    } else {
        echo "Form errors:<br>";
        foreach ($errors as $error) {
            echo "- $error<br>";
        }
    }

} else {
    header("HTTP/1.1 403 Forbidden");
    echo "Access denied.";
}
?>