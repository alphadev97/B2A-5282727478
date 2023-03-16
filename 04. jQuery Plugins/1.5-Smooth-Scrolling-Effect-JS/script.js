const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (eachLink) {
  eachLink.addEventListener("click", smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();
  // do smooth scrolling....
}
