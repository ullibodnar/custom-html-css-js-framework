$(document).ready(function(){
    $(window).bind('scroll', function() {
    var navHeight = 80;
      if ($(window).scrollTop() > navHeight) {
        $('div.page-navigation').addClass('page-navigation-fixed');
        $('div.hero-unit').addClass('hero-unit-fixed');
      }
      else {
        $('div.page-navigation').removeClass('page-navigation-fixed');
        $('div.hero-unit').removeClass('hero-unit-fixed');
      }
   });
   $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 700, 'swing');
	});
 });
