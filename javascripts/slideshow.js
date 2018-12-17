var t, index = 0;

var slides = document.querySelectorAll('.mySlides');
var dots = document.querySelectorAll('.dot');

function plusSlides(n) {
  var currentIndex = 0;

  for(var i = 0; i < slides.length; i++) {
    if(dots[i].classList.contains('active')) {
      currentIndex = i;
      break;
    }
  }

  var nextIndex = Math.abs((currentIndex + n) % slides.length);

  currentSlide(nextIndex + 1);
}

function currentSlide(n) {
  for(var i = 0; i < slides.length; i++) {
    if(i+1 === n) {
      slides[i].style.opacity = '1';
      dots[i].classList.add('active');
    }

    else {
      slides[i].style.opacity = '0';
      dots[i].classList.remove('active');
    }
  }

  resetTimer();
}

function resetTimer() {
  clearTimeout(t);

  t = setTimeout(function() {
    plusSlides(1);
  }, 3000);
}

currentSlide(1);

