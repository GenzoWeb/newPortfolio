/********************
        MENU
********************/
const burger = document.getElementById('burger');
const menu = document.getElementById('menu_container');
let burgerEvent = true;
const linksMenu = document.querySelectorAll('.link_menu');
const linkHome = document.querySelector('.link_home');
const linkProjects = document.querySelector('.link_projects');
const linkComp = document.querySelector('.link_competences');
const linkContact = document.querySelector('.link_contact');

// if (window.NodeList && !NodeList.prototype.forEach) {
//         NodeList.prototype.forEach = function (callback, thisArg) {
//                 thisArg = thisArg || window;
//                 for (var i = 0; i < this.length; i++) {
//                 callback.call(thisArg, this[i], i, this);
//                 }
//         };
// }


/********************
        SWUP
********************/
const options = { cache: false };
const swup = new Swup(options)