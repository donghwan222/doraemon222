$(document).ready(function () {
  console.log("active");

  const dora = $(".do-img");

  dora.addClass("move");
  dora.css("animation-play-state", "paused");

  $(".doraemon").on("mousedown", function () {
    dora.css("animation-play-state", "running");
  });

  $(".doraemon").on("mouseup mouseleave", function () {
    dora.css("animation-play-state", "paused");
  });
});
