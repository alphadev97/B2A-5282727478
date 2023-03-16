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
  var allLinks = $("nav ul li a");
  var posts = $("section");
  var pageTop;
  var postPos;
  var counter = 0;
  var prevCounter = 0;
  var doneResizing;
  var postTop = [];

  resetPagePosition();

  // console.log(postTop);

  $(window).scroll(function () {
    pageTop = $(window).scrollTop() + 210;

    if (pageTop > postTop[counter + 1]) {
      counter++;
      // console.log(`scrolling down ${counter}`);
    } else if (counter > 0 && pageTop < postTop[counter]) {
      counter--;
      // console.log(`scrolling up! ${counter}`);
    }
    if (counter != prevCounter) {
      $(allLinks).removeAttr("class");
      $("nav ul li a").eq(counter).addClass("selected");
      prevCounter = counter;
    }
  });

  // Capturing resizing windows

  $(window).on("resize", function () {
    clearTimeout(doneResizing);
    doneResizing = setTimeout(function () {
      resetPagePosition();
    }, 500);
  });

  function resetPagePosition() {
    postTop = [];

    posts.each(function () {
      postTop.push(Math.floor($(this).offset().top));
    });

    var pagePosition = $(window).scrollTop() + 210;
    counter = 0;

    for (var i = 0; i < postTop.length; i++) {
      if (pagePosition > postTop[i]) {
        counter++;
      }
    }

    counter--;

    $(allLinks).removeAttr("class");
    $("nav ul li a").eq(counter).addClass("selected");
  }
});
