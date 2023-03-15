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

$(window).on("load", function () {
  var posts = $("section");
  var pageTop;
  var postPos;
  var counter = 0;
  var postTop = [];

  posts.each(function () {
    postTop.push(Math.floor($(this).offset().top));
  });

  console.log(postTop);

  $(window).scroll(function () {
    pageTop = $(window).scrollTop() + 210;

    if (pageTop > postTop[counter + 1]) {
      counter++;
      console.log(`scrolling down ${counter}`);
    }
  });
});
