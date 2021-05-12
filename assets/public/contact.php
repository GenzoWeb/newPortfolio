<?php 
session_start();
$title = "Me contacter"; ?>

<?php require "header.php"; ?>

<div id="swup" class="contain_contact transition-top">
    <h1 class="title">Contactez moi</h1>
    <?php if (isset($_SESSION['messageForm'])) : ?>
        <?= $_SESSION['messageForm']; ?>
    <?php endif ?>
    <form id="form_contact" action="sendForm.php" method="post">
        <div class="contact_name">
            <input class="form_input" type="text" id="name" name="name" placeholder="Nom" value="">
            <p id="error_name" class="form_error"></p>
        </div>
        <div class="contact_email">
            <input class="form_input" type="email" id="email" name="email" placeholder="Email" value="">
            <p id="error_email" class="form_error"></p>
        </div>
        <div class="contact_message">
            <textarea class="form_textarea" id="message" name="message" placeholder="Message"></textarea>
            <p id="error_message" class="form_error"></p>
        </div>
        <div class="contact_submit">
            <input class="form_submit" type="submit" id ="contact_submit" name="contact_submit" value="Envoyer">
        </div>
    </form>
</div>

<?php require "footer.php"; ?>
