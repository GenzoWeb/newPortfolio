burger.addEventListener('click', () => {
    if(burgerEvent){
        burgerEvent = false
        burger.classList.toggle('hide_menu');
        menu.classList.toggle('show_menu');

        setTimeout(() => {
            burger.classList.toggle('burger_shadow');
            burger.classList.toggle('burger_dark_shadow');
            burgerEvent = true;
        }, 400);
    }
});

window.onload = function () {
    const locationHref = location.href;
    const locationPage = locationHref.substring(locationHref.lastIndexOf( "/" ) + 1);
    if(locationPage == '') {
        linkHome.classList.add('active')
    }

    linksMenu.forEach(function(linkMen) {
        if(linkMen.href == location.href) {
            linkMen.classList.add('active')
        }
    })
}
