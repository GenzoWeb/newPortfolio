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
        <div id="container" class="container container_home">
            <section id="menu_container" class="menu_container">
                <div class="menu">
                    <nav class="navmenu">
                        <ul class="navmenu_list">
                            <li><a href="/portfolio/index.php">Accueil</a></li>
                            <li><a href="/portfolio/assets/view/projects.php">Portfolio</a></li>
                            <li><a href="/portfolio/assets/view/competences.php">Compétences</a></li>
                            <li><a href="/portfolio/assets/view/contact.php">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
    
            <section class="contain">