(function () {
  "use strict";

  $("ul li ul").hide();
  $(".menulink").click(function () {
    const thisMenu = $(this).next("ul");

    $("ul li ul").not(thisMenu).hide();

    thisMenu.toggle();
  });
})();
