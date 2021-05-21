"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ValidForm = /*#__PURE__*/function () {
  function ValidForm(nameInput, error) {
    var emailValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    _classCallCheck(this, ValidForm);

    this.nameInput = nameInput;
    this.error = error;
    this.emailValue = emailValue;
    this.valid;
    this.message = "";
  }

  _createClass(ValidForm, [{
    key: "testValid",
    value: function testValid() {
      if (this.nameInput.value == "") {
        this.message = "Veuillez remplir ce champs !";
      }

      if (this.message) {
        this.error.innerHTML = this.message;
        this.valid = false;
      } else {
        this.error.innerHTML = "";
        this.valid = true;
      }

      if (this.emailValue != "") {
        this.validateEmail(this.emailValue);
      }

      if (this.valid) {
        return this.valid;
      }
    }
  }, {
    key: "validateEmail",
    value: function validateEmail(mail) {
      var mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!mail.match(mailFormat)) {
        this.error.innerHTML = "Veuillez mettre un email valide !";
        this.valid = false;
      }
    }
  }]);

  return ValidForm;
}();