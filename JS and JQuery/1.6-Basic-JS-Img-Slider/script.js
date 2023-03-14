window.addEventListener("load", function () {
  const slideCount = document.querySelectorAll("#slider-wrapper ul li").length; //   How many slides?

  const slideWidth = document.querySelector("#slider-wrapper").offsetWidth; // How wide is each slide?

  const totalWidth = slideCount * slideWidth + "px"; // Total slider width

  // DOM Elements

  const slider = document.querySelector("#slider-wrapper ul");

  const next = document.querySelector("#next");

  const previous = document.querySelector("#prev");

  let leftPosition = 0;

  let counter = 0;

  slider.style.width = totalWidth;

  next.addEventListener("click", function (evt) {
    evt.preventDefault();

    counter++;

    if (counter === slideCount) {
      counter = 0;
      leftPosition = 0;
      slider.style.left = leftPosition;
    } else {
    }
  });
});
