$(document).ready(function(){
    $(window).bind('scroll', function() {
    var navHeight = 80;
      if ($(window).scrollTop() > navHeight) {
        $('ul.page-navigation').addClass('page-navigation-fixed');
      }
      else {
        $('ul.page-navigation').removeClass('page-navigation-fixed');
      }
   });
 });
