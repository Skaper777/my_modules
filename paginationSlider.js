'use strict';

(function () {
    var buttonLeft = document.querySelector('.button-left');
    var buttonRight = document.querySelector('.button-right');

    var items = document.querySelectorAll('.item');

    var inputs = document.querySelectorAll('input');

    var slides = [];
    var currentSlide = 0;

    for (var i = 0; i < items.length; i++) {
        slides[i] = items[i];
    }

    var openSlide = function (evt) {
        for (var j = 0; j < inputs.length; j++) {
            if (evt.target === inputs[j]) {
                items[j].classList.add('showing');
            } else {
                items[j].classList.remove('showing');
            }
        }
    }

    var nextSlide = function () {
        if (currentSlide < slides.length - 1) {
            slides[currentSlide].classList.remove('showing');
            currentSlide += 1;
            slides[currentSlide].classList.add('showing');
            inputs[currentSlide].checked = true;
        }
    }

    var prevSlide = function () {
        if (currentSlide > 0) {
            slides[currentSlide].classList.remove('showing');
            currentSlide -= 1;
            slides[currentSlide].classList.add('showing');
            inputs[currentSlide].checked = true;
        }
    }   
    
    var slideHandler = function () {
        for (var k = 0; k < inputs.length; k++) {
            inputs[k].addEventListener('click', openSlide);
        }
    }

    slideHandler();
    buttonRight.addEventListener('click', nextSlide);
    buttonLeft.addEventListener('click', prevSlide);
})();