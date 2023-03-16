const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (eachLink) {
  eachLink.addEventListener("click", smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();

  const targetID = event.target.getAttribute("href");
  const targetSection = document.querySelector(targetID);
  const originalTop =
    Math.floor(targetSection.getBoundingClientRect().top) - 200;
  window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
  console.log(originalTop);
}
