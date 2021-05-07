            </section>
        </div>

        <footer>
            <div class="footer">
                <p>Copyright GenzoWeb | 2021</p>
                <p>Email : genzo10@hotmail.fr</p>
            </div>
        </footer>
        
        <script src="/portfolio/assets/js/index.js"></script>
        <script src="/portfolio/assets/js/menu.js"></script>
        <script src="/portfolio/assets/js/ValidForm.js"></script>
        <script src="/portfolio/assets/js/formContact.js"></script>
    </body>
</html>

<?php 
if(isset($_SESSION['messageForm'])) {
    unset($_SESSION['messageForm']);
}
?>
