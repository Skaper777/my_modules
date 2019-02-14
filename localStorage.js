'use strict';

(function () {
  if (document.querySelector('.cookie-popup')) {
    var storage = window.localStorage;
    var popup = document.querySelector('.cookie-popup');
    var btn = document.querySelector('.cookie-popup__button');
    var closeClass = 'cookie-popup--closed';
    var date = new Date().getTime();

    var openPopup = function () {
      popup.classList.remove(closeClass);
    };

    var closePopup = function () {
      storage.setItem('shown', true);
      storage.setItem('shownDate', date);
      popup.classList.add(closeClass);
    };

    var initPopup = function () {
      if (!storage.getItem('shown')) {
        openPopup();
      } else {
        var now = new Date().getTime();
        var day = 24 * 60 * 60 * 1000;
        var previousDate = storage.getItem('shownDate');

        if ((now - previousDate) > day) {
          openPopup();
        } else {
          closePopup();
        }
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();
        closePopup();
      });
    };

    setTimeout(initPopup, 300);
  }
})();