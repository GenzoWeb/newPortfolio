/********************
        MENU
********************/
const burger = document.getElementById('burger');
const menu = document.getElementById('menu_container');
let burgerEvent = true;

/********************
    FORMCONTACT
********************/
const formContact = document.getElementById('form_contact');
const formName = document.getElementById('name');
const formEmail = document.getElementById('email');
const formMessage = document.getElementById('message');
const formSubmit = document.getElementById('contact_submit');
const errorName = document.getElementById('error_name');
const errorEmail = document.getElementById('error_email');
const errorMessage = document.getElementById('error_message');
const messageSubmitted = document.querySelector('.message_submitted');
const messageSubmittedError = document.querySelector('.message_error');
const titleForm = document.querySelector('.contain_contact h1');
let valid;


