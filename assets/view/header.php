<?php
$container = 'container';

if($_SERVER['SCRIPT_NAME'] === '/portfolio/index.php'){
    $container .= ' container_home';
}

function activeLinkMenu ($link, $title_menu){
    $class = 'link_menu';

    if($_SERVER['SCRIPT_NAME'] === $link){
        $class .= ' active"';
    }

    return '<li class="' . $class . '"><a href="' . $link . '">' . $title_menu . '</a></li>';
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
        <div id="container" class="<?= $container ?>">
            <div id="burger" class="burger">
                <span></span>
            </div>
            <section id="menu_container" class="menu_container">
                <div class="menu">
                    <nav>
                        <ul>
                            <?= activeLinkMenu('/portfolio/index.php', 'Accueil'); ?>
                            <?= activeLinkMenu('/portfolio/assets/view/projects.php', 'Projets'); ?>
                            <?= activeLinkMenu('/portfolio/assets/view/competences.php', 'Compétences'); ?>
                            <?= activeLinkMenu('/portfolio/assets/view/contact.php', 'Contact'); ?>
                        </ul>
                    </nav>
                </div>
            </section>
    
            <section class="contain">