"use strict";

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

/********************
        MENU
********************/

var burger = document.getElementById('burger');
var menu = document.getElementById('menu_container');
var burgerEvent = true;
var linksMenu = document.querySelectorAll('.link_menu');
var linkHome = document.querySelector('.link_home');
var linkProjects = document.querySelector('.link_projects');
var linkComp = document.querySelector('.link_competences');
var linkContact = document.querySelector('.link_contact');

/********************
        SWUP
********************/

var options = {
  cache: false
};
var swup = new Swup(options);