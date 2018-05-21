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
    $('.p:nth-child(3n)').removeClass('.padding-header');
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
  var par1 = $('.js-team-ab');
  $(par1).hide();
  
  $('.c-button-more-team-ab').click(function(e) {
      $(par1).slideToggle('slow');
      e.preventDefault();
  });
});
$(document).ready(function() {
  var par2 = $('.c-li');
  $(par2).hide();
  
  $('.js-list').click(function(e) {
      $(par2).slideToggle('slow');
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

$('.c-hamburger__svg').on('click', function () {
    $nav.toggleClass('js-nav--flex');
    $navbar.toggleClass('c-navbar--fullh');    
    $nav.toggleClass('js-navlist');
    $logo.toggleClass('o-display-n');
});

