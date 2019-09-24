<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <main>
        <p>Send Email</p>
        <form action="contactform.php" class="contact-form" method="POST">
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="mail" placeholder="Email"/>
            <input type="text" name="subject" placeholder="Subject"/>
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit" name="submit">Send Mail</button>
        </form>
    </main>
</body>
</html>