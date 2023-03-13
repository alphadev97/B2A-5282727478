window.addEventListener("load", function () {
  const slideCount = document.querySelectorAll("#slider-wrapper ul li").length;
  //   alert(slideCount);

  const slideWidth = document.querySelector("#slider-wrapper").offsetWidth;

  const totalWidth = slideCount * slideWidth + "px";

  const slider = document.querySelector("#slider-wrapper ul");

  const next = document.querySelector("#next");

  const previous = document.querySelector("#prev");
});
