(function () {
  "use strict";

  document
    .getElementById("convert")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const distance = parseFloat(document.getElementById("distance").value);
      const answer = document.getElementById("answer");

      if (distance) {
        // var roundedConversion = Math.round(conversion * 1000) / 1000; (first way of doing)
        // var roundedConversion = conversion.toFixed(3); //shortcode for above method with tofixed (2nd way of doing)
        // var conversion = distance * 1.609344; (third way of doing with small code in one line)
        const conversion = (distance * 1.609344).toFixed(3);

        answer.innerHTML = `<h2>${distance} miles converts to ${conversion} Kilometers</h2>`;
      } else {
        answer.innerHTML = "<h2>ERROR! please provide a number</h2>";
      }
    });
})();
