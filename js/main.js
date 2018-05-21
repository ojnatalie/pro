

window.addEventListener('load', function() {
    
document.querySelector('.js-scroll-into-view').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.c-section1__headline').scrollIntoView({ behavior: 'smooth' });
  });
});

$(document).ready(function(){
    $('.c-button--more').click(function(){
        $('.p-hidden').slideToggle(250);
    });
});

$(document).ready(function(){
	$('.c-button--more').click(function(){
		$('.p:nth-child(3n)').addClass('.p-show');
    });
});


$(document).ready(function() {
  var par = $('.js-team');
  $(par).hide();
  
  $('.c-button-more-team').click(function(e) {
      $(par).slideToggle('slow');
      e.preventDefault();
  });
});
$(document).ready(function() {
  var par = $('.js-team-ab');
  $(par).hide();
  
  $('.c-button-more-team-ab').click(function(e) {
      $(par).slideToggle('slow');
      e.preventDefault();
  });
});
$(document).ready(function() {
  var par = $('.c-li');
  $(par).hide();
  
  $('.js-list').click(function(e) {
      $(par).slideToggle('slow');
      e.preventDefault();
  });
});



$(document).ready(function() { 
 
	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 500);
		}
	});
 
});

window.addEventListener('load', function() {
    
document.querySelector('.js-scroll-into-view').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.c-section1__text').scrollIntoView({ behavior: 'smooth' });
  });
});


var $nav = $(".js-nav");
var $navbar = $(".c-navbar");
var $logo = $('.c-navbar__logo');
// var $hamburger__svg =$('.c-hamburger__svg');
// var $navbarInner = $(".c-navbar__inner");
// var $navbarListLi = $(".c-nav__list li");

$('.c-hamburger__svg').on('click', function () {
    $nav.toggleClass('js-nav--flex');
    $navbar.toggleClass('c-navbar--fullh');    
    $nav.toggleClass('js-navlist');
    $logo.toggleClass('o-display-n');
    // $hamburger__svg.toggleClass('o-display-n');
    // $navbarInner.toggleClass('js-navbar');
    // $navbarListLi.toggleClass('js-nav__list-li');
});

