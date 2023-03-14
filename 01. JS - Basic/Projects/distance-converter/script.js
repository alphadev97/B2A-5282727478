(function () {
  "use strict";

  let convertType = "miles";
  const heading = document.querySelector("h1");
  const intro = document.querySelector("p");
  const answerDiv = document.getElementById("answer");
  const form = document.getElementById("convert");

  document.addEventListener("keydown", function (event) {
    var key = event.code;

    if (key === "KeyK") {
      convertType = "kilometers";
      heading.innerHTML = "Kilometers to Miles Converter";
      intro.innerHTML =
        "Type in a number of Kilometers and click the button to convert the distance to Miles.";
    } else if (key === "KeyM") {
      convertType = "miles";
      heading.innerHTML = "Miles to Kilometers Converter";
      intro.innerHTML =
        "Type in a number of Miles and click the button to convert the distance to Kilometers.";
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const distance = parseFloat(document.getElementById("distance").value);

    if (distance) {
      // convert M to K 1.609344
      // convert K to M 0.621371192

      if (convertType === "miles") {
        const converted = (distance * 1.609344).toFixed(3);
        answer.innerHTML = `${distance} miles is converts to ${converted} kilometers.`;
      } else {
        const converted = (distance * 0.621371192).toFixed(3);
        answer.innerHTML = `${distance} kilometers is converts to ${converted} miles.`;
      }
    } else {
      answer.innerHTML = "<h2>ERROR! please provide a number.</h2>";
    }
  });
})();
