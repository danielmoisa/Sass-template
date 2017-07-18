//Navigation collapse
var main = function() {
  $('.icon-menu').click(function() {
    $('.menu').animate({
      right: '0px'
  }, 400);
  });

  $('.icon-close').click(function() {
    $('.menu').animate({
      right: '-285px'
  }, 400);
  });
};
$(document).ready(main);

//Menu color change
$(window).scroll(function() {
if ($(window).scrollTop() > 1050) {
    $('.icon-menu').css("background-color", "#f2efe8").fadeIn("1000");
}
else{
    $('.icon-menu').css("background", "transparent").fadeIn("1000") ;
}
});
