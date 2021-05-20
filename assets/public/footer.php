            </section>
        </div>

        <footer class="footer">
            <div class="contain_footer">
                <ul class="link_footer">
                    <li><a class="link" href="/portfolio/index.php">Accueil</a></li>
                    <li><a class="link" href="/portfolio/assets/public/projects.php">Projets</a></li>
                    <li><a class="link" href="/portfolio/assets/public/competences.php">Compétences</a></li>
                    <li><a class="link" href="/portfolio/assets/public/contact.php">Contact</a></li>
                </ul>
                <p class="text_footer">Email : genzo10@hotmail.fr</p>
            </div>
        </footer>

        <script src="/portfolio/assets/js/swup.min.js"></script>
        <script src="/portfolio/assets/js/index.js"></script>
        <script src="/portfolio/assets/js/textAuto.js"></script>
        <script src="/portfolio/assets/js/menu.js"></script>
        <script src="/portfolio/assets/js/ValidForm.js"></script>
        <script src="/portfolio/assets/js/formContact.js"></script>
        <script src="/portfolio/assets/js/swup.js"></script>
    </body>
</html>

<?php 
if(isset($_SESSION['messageForm'])) {
    unset($_SESSION['messageForm']);
}
?>
