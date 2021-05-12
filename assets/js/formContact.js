const validFormContact = function () {
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
    const containContact = document.querySelector('.contain_contact');

    if(formContact) {
        if(messageSubmitted){
            showMessageTraitement(messageSubmitted)
        }

        if(messageSubmittedError){
            showMessageTraitement(messageSubmittedError)
        }  

        function showMessageTraitement(traitementMessage){
            const messForm = document.querySelector('.form_message');
            titleForm.style.display="none"
            traitementMessage.style.display ="block";
            setTimeout(() => {
                titleForm.style.display="block"
                containContact.removeChild(messForm);
            }, 2000);
            
        }

        formContact.addEventListener('submit', (e) => {
            e.preventDefault();  
            const testName = new ValidForm(formName, errorName);
            const testEmail = new ValidForm(formEmail, errorEmail, formEmail.value);
            const testMessage = new ValidForm(formMessage, errorMessage);

            const resultTestName = testName.testValid();
            const resultTestEmail = testEmail.testValid();
            const resultTestMessage = testMessage.testValid();

            if(resultTestName && resultTestEmail && resultTestMessage){
                formContact.submit();
                formSubmit.value = 'Envoi ...'
            }
        })
    }
}
validFormContact()