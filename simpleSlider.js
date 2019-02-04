'use strict';

var buttonLeft = document.querySelector('.buttons__left');
var buttonRight = document.querySelector('.buttons__right');

var images = document.querySelectorAll('img');

var slides = [];
var currentSlide = 0;

for (var i = 0; i < images.length; i++) {
  slides[i] = images[i];  
}

buttonRight.addEventListener('click', function () {
  if (currentSlide < slides.length - 1) {     
    slides[currentSlide].classList.remove('showing');
    currentSlide += 1;
    slides[currentSlide].classList.add('showing');
  }  
});

buttonLeft.addEventListener('click', function () {  
  if (currentSlide > 0) {    
    slides[currentSlide].classList.remove('showing');
    currentSlide -= 1;
    slides[currentSlide].classList.add('showing');
  }
});