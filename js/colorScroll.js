$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos >= $(".about").position().top) {
      $("body").css("background-color", "#111111");
      $(".background_vid").css("opacity", "0.2");
    }
    if (scroll_pos + 400 > $("#orenji").position().top) {
      $("body").css("background-color", "#462803");
      $(".background_vid").css("opacity", "0");
    }
    if (scroll_pos + 400 > $("#grin").position().top) {
      $("body").css("background-color", "#0b2d24");
      $(".background_vid").css("opacity", "0");
    }
    if (scroll_pos + 400 > $(".contact").position().top) {
      $("body").css("background-color", "#0a0a0a");
      $(".background_vid").css("opacity", "0");
    }
  });
});
