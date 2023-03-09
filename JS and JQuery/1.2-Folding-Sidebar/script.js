(function () {
  "use strict";

  const submenus = document.querySelectorAll("ul li ul");
  const menulinks = document.querySelectorAll(".menulink");

  function hideSubMenus() {
    for (let i = 0; i < submenus.length; i++) {
      submenus[i].className = "hide-menu";
    }
  }

  hideSubMenus();

  for (let i = 0; i < menulinks.length; i++) {
    menulinks[i].addEventListener("click", function (event) {
      event.preventDefault();

      const thisMenu = this.parentNode.querySelector("ul");
      //   thisMenu.className = "show-menu";

      if (thisMenu.classList.contains("hide-menu")) {
        hideSubMenus();

        thisMenu.className = "show-menu";
      } else {
        thisMenu.className = "hide-menu";
      }
    });
  }
})();
