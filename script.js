$(document).ready(function () {
  $(".sidenav").sidenav();
});

$(document).ready(function () {
  $(".slider").slider({
    indicators: false,
    interval: 2000,
    duration: 2000,
    height: 350,
  });
});

$(".carousel.carousel-slider").carousel({
  fullWidth: true,
  indicators: true,
});

$(document).ready(function () {
  $(".materialboxed").materialbox();
});

$('[lang="en"]').hide();
$('[lang="sr"]').show();
$(".language").click(function () {
  $("*:lang(sr)").toggle();
  $("*:lang(en)").toggle();
});
