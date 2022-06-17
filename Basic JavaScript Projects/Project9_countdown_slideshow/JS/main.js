function countdown() { //countdown function
    var seconds= document.getElementById("seconds").value; //taking input value
    function tick() {
        seconds=seconds-1; //counting down by 1 second increments
        timer.innerHTML=seconds;
        setTimeout(tick, 1000); //program is pausing for 1 second (1,000 milliseconds)
    if(seconds==-1){ //once timer gets down to 0, alert pops up
        alert("Time's up!");
    }
    }
    tick();
}

let slideIndex = 1; //shows first picture
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} //sets current slide to be first or last slide so it will start over from beginning or loop around to end
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}