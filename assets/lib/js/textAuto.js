"use strict";

var autoText = function autoText() {
  if (document.getElementById('text_auto')) {
    var textAuto = document.getElementById('text_auto');
    var text = "Bienvenue sur mon portfolio";
    var index = 0;

    var randomNumber = function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    };

    var play = function play() {
      textAuto.innerHTML = text.slice(0, index);
      index++;

      if (index > text.length) {
        index = 0;
      }

      clearInterval(timer);
      timer = setInterval(play, randomNumber(150, 300));
    };

    var timer = setInterval(play, 1);
  }
};