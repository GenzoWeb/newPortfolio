<?php
$container = 'container';

if($_SERVER['SCRIPT_NAME'] === '/portfolio/index.php') {
    $container .= ' container_home';
}
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="La description">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="/portfolio/assets/css/reset.css"/>  
        <link rel="stylesheet" type="text/css" href="/portfolio/assets/css/style.css"/>
        <title>
            <?php if (isset($title)): ?>
                <?= $title ?>
            <?php else: ?>
                Mon portfolio
            <?php endif ?>
        </title>
    </head>
    <body>
        <div id="burger" class="burger burger_shadow">
            <span></span>
        </div>
        <section id="menu_container" class="menu_container">
            <nav class="menu">
                <ul>
                    <li class="link_menu link_home"><a href="/portfolio/index.php">Accueil</a></li>
                    <li class="link_menu link_projects"><a href="/portfolio/assets/public/projects.php">Projets</a></li>
                    <li class="link_menu"><a href="/portfolio/assets/public/competences.php">Compétences</a></li>
                    <li class="link_menu"><a href="/portfolio/assets/public/contact.php">Contact</a></li>
                </ul>
            </nav>
        </section>
        <div id="container" class="<?= $container ?>">     
                <section class="contain">