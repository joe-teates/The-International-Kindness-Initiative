
let slideIndex = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(n) {
    slideIndex = n;
    let slides = document.getElementsByClassName("slideshow-images");
    let dots = document.getElementsByClassName("dot");
    console.log(slides.length);
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length-1}
  for (var i = 0; i < slides.length; i++) {
      slides.item(i).classList.add("hidden");
    }
    slides.item(slideIndex).classList.remove("hidden");
    for (var i = 0; i < dots.length; i++) {
        dots.item(i).classList.remove("selected");
    }
    dots.item(slideIndex).classList.add("selected");

}

function dropdown() {
  let content = document.getElementById("dropdown-content");
  let button = document.getElementById("dropdown-button");
  if(content.classList.contains("hidden")){
    content.classList.remove("hidden");
    button.classList.toggle("dropdown-rotate");
  }else{
    content.classList.add("hidden");
    button.classList.toggle("dropdown-rotate");
  }
}
//.dropdown-content a:active {background-color: #ddd;}

//.dropdown:active .dropdown-content {display: block;}

//.dropdown:active .dropbtn {background-color: #3e8e41;}