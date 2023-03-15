$("nav ul li a").click(function () {
  const thisSection = $(this).attr("href");
  let thisLink = $(this);

  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(thisSection).offset().top - 200,
      },
      400,
      "easeOutCirc",
      function () {
        $("nav ul li a").removeAttr("class");
        thisLink.addClass("selected");

        // alert($(window).scrollTop());
      }
    );
});
