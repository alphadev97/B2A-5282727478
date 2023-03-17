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

window.addEventListener("load", function () {
  const posts = document.querySelectorAll("section");
  let postTops = [];
  let pagetop;
  let counter = 1;
  let prevCounter = 1;
  let doneResizing;

  posts.forEach(function (post) {
    postTops.push(
      Math.floor(post.getBoundingClientRect().top + window.pageXOffset)
    );
  });

  console.log(postTops);
});
