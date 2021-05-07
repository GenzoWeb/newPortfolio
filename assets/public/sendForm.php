<?php 
session_start();
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$errors = true;

if ((!isset($name) || $name == '') || (!isset($message) || $message == '')) {
    $errors = false;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors = false;
}

if($errors == false) { 
    $messageForm = '<p class="message_error">Désolé une erreur s\'est produite veuillez recommencer !</p>';
}else {
    $to = 'genzo10@hotmail.fr';
    $subject = 'Formulaire portfolio';
    $messageSend ='
    <html>
        <head>
            <title>Contact Portfolio</title>
        </head>
        <body>
            <p>
                Adresse mail : ' . $email .' <br/>
                Message envoyé par : ' . $name . '. <br/> <br/>'
                . $message .'
            </p>
        </body>
    </html>
    ';

    $headers = array(
        'MIME-Version' => '1.0',
        'Content-type' => 'text/html; charset=UTF-8',
        'From' => 'site@genzo.fr',
        'Reply-To' => $email,
        'X-Mailer' => 'PHP/' . phpversion()
    );

    mail($to, $subject, $messageSend, $headers);
    $messageForm = '<p class="message_submitted">Votre message a bien été envoyé</p>';
}

$_SESSION['messageForm'] = $messageForm;
header('Location: contact.php');
?>