burger.addEventListener('click', () => {
    if(burgerEvent) {
        burgerEvent = false
        burger.classList.toggle('hide_menu');
        menu.classList.toggle('show_menu');

        setTimeout(() => {
            burger.classList.toggle('burger_shadow');
            burger.classList.toggle('burger_dark_shadow');
            burgerEvent = true;
        }, 300);
    }
});

function menuBorderRadius() {
    if( window.innerHeight < 350) {
            menu.style.borderRadius = "unset";
    } else {
            menu.style.borderRadius = "0% 100% 65% 0%/0% 75% 55% 0%";
    }
}

menuBorderRadius()
window.onresize = menuBorderRadius;