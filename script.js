
let slideIndex = 0;
let pinkBracelets = 0;
let redBracelets = 0;
let purpleBracelets = 0;

let pinkPrice = .50;
let redPrice = .50;
let purplePrice = .50;

let orderTotal = 0;

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


function selectBracelet(color, amount){
  let button = document.getElementById(color+amount);
  let selectedAlready = hasBeenSelected(color, amount);
  if(color=="pink" && !selectedAlready){
    pinkBracelets=amount;
  }else if(color=="red" && !selectedAlready){
    redBracelets=amount;
  }else if(color=="purple" && !selectedAlready){
    purpleBracelets=amount;
  }else{
    button.style.borderColor = "#717171";
    button.style.color = "#717171";
    button.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0)";
    
    updateTotal();
    return;
  }
  updateTotal();



  button.style.borderColor = "black";
  button.style.color = "black";
  button.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, .5)"
  for(var i = 1; i<=3; i++){
    if(amount!=i*10){
      document.getElementById(color+(i*10)).style.borderColor = "#717171";
      document.getElementById(color+(i*10)).style.color = "#717171";
      document.getElementById(color+(i*10)).style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0)";
    }
  }
}

function hasBeenSelected(color, amount){
  if(color=="pink" && pinkBracelets==amount){
    pinkBracelets = 0;
    return true;
  }else if(color=="red" && redBracelets==amount){
    redBracelets = 0;
    return true;
  }else if(color=="purple" && purpleBracelets==amount){
    purpleBracelets = 0;
    return true;
  }else{
    return false;
  }
}

function updateTotal(){
  orderTotal = pinkBracelets*pinkPrice + redBracelets*redPrice + purpleBracelets*purplePrice;
  let orderButton = document.getElementById("order-button");
  orderButton.innerText = "$"+formatMoney(orderTotal)+" - Place Order";
}

function formatMoney(number) {
  if (isNaN(number)) {
      return "Invalid input";
  }
  const formattedNumber = Number(number).toFixed(2);
  const parts = formattedNumber.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

function printAllBracelets(){
  openEmailWithPresetContent();
  console.log(pinkBracelets+" pink bracelets\n"+redBracelets+" red bracelets\n"+purpleBracelets+" purple bracelets");
}

function openEmailWithPresetContent() {
  // Replace the placeholders with your actual email and content
  const toEmail = 'jhteates@gmail.com';
  const subject = encodeURIComponent('KIC + MAD Bracelet Order');
  const body = encodeURIComponent(pinkBracelets+" pink bracelets\n"+redBracelets+" red bracelets\n"+purpleBracelets+" purple bracelets");

  // Construct the mailto link
  const mailtoLink = `mailto:${toEmail}?subject=${subject}&body=${body}`;

  // Open the email client with the mailto link
  window.open(mailtoLink);
}