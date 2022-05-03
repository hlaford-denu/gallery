
// function for the side menu
////////////////////////////////////

function openMenu(menuSection, section) {
    // Hide all elements with class="tabcontent" by default */
    var i, j, tabcontent, slideshow;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    slideshow = document.getElementsByClassName("slideShow");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    for (j = 0; j < slideshow.length; j++) {
      slideshow[j].style.display = "none";
    }

    // Show the specific tab content
    document.getElementById(menuSection).style.display = "block";
    document.getElementById(section).style.display = "flex";
   
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

// JS for the gallery
/////////////////////////////////

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(slideNumber) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let caption = document.getElementsByClassName("caption");
  if (slideNumber > slides.length) {slideIndex = 1}
  if (slideNumber < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  for (i = 0; i < caption.length; i++) {
    caption[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  caption[slideIndex-1].style.display = "flex";
  
  //captionText.innerHTML = dots[slideIndex-1].alt;
}
