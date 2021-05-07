class ValidForm {
    constructor(nameInput, error, emailValue = "" ) {
      this.nameInput = nameInput;
      this.error = error;
      this.emailValue = emailValue;
      this.valid;
      this.message = "";
    }

    testValid() {
        
        if(this.nameInput.value == "") {
            this.message = "Veuillez remplir ce champs !"
        }
        
        if(this.message) {
            this.error.innerHTML = this.message;
            this.valid = false;   
        } else {
            this.error.innerHTML = "";
            this.valid = true;
        }

        if(this.emailValue != "") {
            this.validateEmail(this.emailValue);
        }

        if(this.valid) {
            return this.valid;
        }
    }

    validateEmail(mail) {
        const mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!mail.match(mailFormat)) {
            this.error.innerHTML = "Veuillez mettre un email valide !";
            this.valid = false;
        }
    }
}