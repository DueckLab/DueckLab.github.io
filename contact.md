---
layout: page
title: Contact
permalink: /contact/
---

# Contact Us

We would love to hear from you! Do you want more information on anything we shared, want to suggest additions to our resources and tools or publications page, or do you want to connect with our team?

- **Email**: [DueckLab@mayo.edu](mailto:DueckLab@mayo.edu)

<head>
    <title>Contact Us</title>
</head>
<body>
    <h1>Contact Us</h1>
    <form action="https://example.com/submit-contact-form" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>

        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="4" required></textarea><br>

        <input type="submit" value="Submit">
    </form>
</body>


<html>
<head>
    <title>Contact Us</title>
    <style>
        body {
            text-align: center;
            font-family: Arial, sans-serif;
        }

        h1 {
            font-size: 24px;
            margin-bottom: 20px;
        }

        form {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        label {
            display: block;
            font-weight: bold;
            margin-top: 10px;
        }

        input[type="text"],
        input[type="email"],
        textarea {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        textarea {
            resize: vertical;
        }

        input[type="submit"] {
            background-color: #2596be;
            color: white;
            border: none;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 10px 0;
            cursor: pointer;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Contact Us</h1>
    <form action="https://example.com/submit-contact-form" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <input type="submit" value="Submit">
    </form>
</body>
</html>


<!DOCTYPE html>
<html>
<head>
    <title>Contact Us</title>
</head>
<body>
    <h1>Contact Us</h1>
    <form action="process-form.php" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>

        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="4" required></textarea><br>

        <input type="submit" value="Submit">
    </form>
</body>
</html>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Your email address
    $to = "DueckLab@mayo.edu";

    // Subject and message
    $subject = "Contact Form Submission from $name";
    $message = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Send email
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "Oops! Something went wrong.";
    }
}
?>
