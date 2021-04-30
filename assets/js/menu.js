const burger = document.getElementById('burger');
const menu = document.getElementById('menu_container');

burger.addEventListener('click', () => {
    burger.classList.toggle('hide_menu');
    menu.classList.toggle('show_menu');
});