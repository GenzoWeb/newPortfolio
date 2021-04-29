let box_menu = document.getElementById('box_menu');
let menu = document.getElementById('menu_container');

box_menu.addEventListener('click', function(){
    menu.classList.toggle('show_menu');
})