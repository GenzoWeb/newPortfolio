const formContact = document.getElementById('form_contact');
const formName = document.getElementById('name');
const formEmail = document.getElementById('email');
const formMessage = document.getElementById('message');
const errorName = document.getElementById('error_name');
const errorEmail = document.getElementById('error_email');
const errorMessage = document.getElementById('error_message');
let valid;


if(formContact) {
    formContact.addEventListener('submit', (e) => {
        e.preventDefault();   
        const testName = new ValidForm(formName, errorName);
        const testEmail = new ValidForm(formEmail, errorEmail, formEmail.value);
        const testMessage = new ValidForm(formMessage, errorMessage);

        const resultTestName = testName.testForm();
        const resultTestEmail = testEmail.testForm();
        const resultTestMessage = testMessage.testForm();

        if(resultTestName && resultTestEmail && resultTestMessage){
            console.log('OK c est bon je peux envoyer');
        }
    })}