// menu toggling
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

//get the button
var mybutton = document.getElementById("myBtn");

// when the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } 
  else {
    mybutton.style.display = "none";
  }
}

// when the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// selecting elements
const dateSec = document.getElementById('date');

// todays date
const option = {
    weekday : "long",
    month : "short",
    day : "numeric"
};

const today = new Date();

dateSec.innerHTML = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) + ", " + today.toLocaleDateString("en-US", option);