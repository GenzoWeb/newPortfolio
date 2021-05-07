burger.addEventListener('click', () => {
    if(burgerEvent){
        burgerEvent = false
        burger.classList.toggle('hide_menu');
        menu.classList.toggle('show_menu');

        setTimeout(() => {
            burger.classList.toggle('burger_shadow');
            burger.classList.toggle('burger_light_shadow');
            burgerEvent = true;
        }, 400);
    }
});

