"use strict";

var validFormContact = function validFormContact() {
  var formContact = document.getElementById('form_contact');
  var formName = document.getElementById('name');
  var formEmail = document.getElementById('email');
  var formMessage = document.getElementById('message');
  var formSubmit = document.getElementById('contact_submit');
  var errorName = document.getElementById('error_name');
  var errorEmail = document.getElementById('error_email');
  var errorMessage = document.getElementById('error_message');
  var messageSubmitted = document.querySelector('.message_submitted');
  var messageSubmittedError = document.querySelector('.message_error');
  var titleForm = document.querySelector('.contain_contact h1');
  var containContact = document.querySelector('.contain_contact');

  if (formContact) {
    var showMessageTraitement = function showMessageTraitement(traitementMessage) {
      var messForm = document.querySelector('.form_message');
      titleForm.style.display = "none";
      traitementMessage.style.display = "block";
      setTimeout(function () {
        titleForm.style.display = "block";
        containContact.removeChild(messForm);
      }, 2000);
    };

    if (messageSubmitted) {
      showMessageTraitement(messageSubmitted);
    }

    if (messageSubmittedError) {
      showMessageTraitement(messageSubmittedError);
    }

    formContact.addEventListener('submit', function (e) {
      e.preventDefault();
      var testName = new ValidForm(formName, errorName);
      var testEmail = new ValidForm(formEmail, errorEmail, formEmail.value);
      var testMessage = new ValidForm(formMessage, errorMessage);
      var resultTestName = testName.testValid();
      var resultTestEmail = testEmail.testValid();
      var resultTestMessage = testMessage.testValid();

      if (resultTestName && resultTestEmail && resultTestMessage) {
        formContact.submit();
        formSubmit.value = 'Envoi ...';
      }
    });
  }
};

validFormContact();