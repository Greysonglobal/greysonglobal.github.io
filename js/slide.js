// variables
var carousel = document.querySelector('.carousel');
var numberOfSlides = document.querySelectorAll('.inner-carousel div').length;
var slide = 1;
var slides = document.querySelectorAll('.inner-carousel div');
var timingSlider = 5000;



// functions
// change the slide of the carousel with the previous slide
function prevSlide() {
  var indexCurrent = slide - 1;

  if (slide > 1) slide -= 1;
  else slide = numberOfSlides;

  var indexNext = slide - 1;

  addRemoveClassesCarousel(indexCurrent, indexNext);
}

// change the slide of the carousel with the next slide
function nextSlide() {
  var indexCurrent = slide - 1;

  if (slide < numberOfSlides) slide += 1;
  else slide = 1;

  var indexNext = slide - 1;

  addRemoveClassesCarousel(indexCurrent, indexNext);
}

//Add/Remove classes to the item of the carousel - to make effects
function addRemoveClassesCarousel(indexCurrent, indexNext) {

  slides[indexCurrent].classList.add('opacizeInner');
  slides[indexNext].classList.add('scaleInner');

  var opacizeElements = document.querySelectorAll('.opacizeInner');

  for (var i = 0; i < opacizeElements.length; i++) {
    if (opacizeElements[i] != slides[indexCurrent]) {
      opacizeElements[i].classList.remove("opacizeInner");
    }
  }

  slides[indexCurrent].classList.remove('scaleInner');
}

//Reset the timer of the carousel for the automatic sliding
function resetInterval() {
  clearInterval(timer);
  timer = setInterval(function() {
    nextSlide();
  }, timingSlider);
}



// document ready
if (carousel != null) {

  document.querySelector('.prev').addEventListener('click', function(e) {
    prevSlide();
    resetInterval();
  });

  document.querySelector('.next').addEventListener('click', function(e) {
    nextSlide();
    resetInterval();
  });

  var timer = setInterval(function() {
    nextSlide();
  }, timingSlider);

}