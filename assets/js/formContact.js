if(formContact) {
    if(messageSubmitted){
        showMessageTraitement(messageSubmitted)
    }

    if(messageSubmittedError){
        showMessageTraitement(messageSubmittedError)
    }

    function showMessageTraitement(traitementMessage){
        titleForm.style.display="none"
        traitementMessage.style.display ="block";
        setTimeout(() => {
            traitementMessage.style.display ="none";
            titleForm.style.display="block"
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