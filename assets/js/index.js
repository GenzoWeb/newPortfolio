/********************
        MENU
********************/
const burger = document.getElementById('burger');
const menu = document.getElementById('menu_container');
let burgerEvent = true;
const linksMenu = document.querySelectorAll('.menu a');
const linkHome = document.querySelector('.link_home');
const linkProjects = document.querySelector('.link_projects');


/********************
        SWUP
********************/
const options = { cache: false };
const swup = new Swup(options)
const container = document.getElementById('container')