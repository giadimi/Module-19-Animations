document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.overlay-trigger');
  const overlay = document.querySelector('.overlay');
  const mobilenav = document.querySelector('.nav');
  const overlayClose = document.querySelector('.overlay-close');
  const overlayCircle = document.querySelector('.overlay-circle');

  // Toggle the 'show' class on the overlay when the menu icon is clicked
  menuIcon.addEventListener('click', function () {
    overlay.classList.toggle('show');
    mobilenav.classList.toggle('show');
    overlayCircle.classList.remove('show');
  });

  // Close the overlay when the close button is clicked
  overlayClose.addEventListener('click', function () {
    overlay.classList.remove('show');
    overlayCircle.classList.toggle('show');
  });

});

  // Scroll animations for project section
jQuery(function($) {
  var doAnimations = function() {
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};

	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

// Changing the nav style on scroll
$(document).on("scroll", function () {
  if ($(window).scrollTop() > 120) {
    $(".nav").addClass("nav-grad");
  } else {
    $(".nav").removeClass("nav-grad");
  }
});

// Rotating logo
$(document).on("scroll", function () {
  var rotationSpeed = 1.5;
  var scrollPosition = $(window).scrollTop();
  var documentHeight = $(document).height();
  var rotationAngle = (scrollPosition / documentHeight) * 360 * rotationSpeed;
  rotationAngle = Math.min(rotationAngle, 360);

  $(".logo").css("transform", "rotateY(" + rotationAngle + "deg)");
});


// Scroll to

$(".logo").click(function () {
  $("html, body").animate({scrollTop: 0}, 1000);
});

$("#upArrow").click(function () {
  $("html, body").animate({scrollTop: 0}, 1000);
});

$(".button-1").click(function() {
  console.log("here");
  $('html, body').animate({
      scrollTop: $("#about-section-top").offset().top
  }, 2000);
});

$("#downArrow").click(function() {
  console.log("here");
  $('html, body').animate({
      scrollTop: $("#about-section-top").offset().top
  }, 2000);
});

$("#about-link").click(function() {
  console.log("here");
  $('html, body').animate({
      scrollTop: $("#about-section-top").offset().top
  }, 2000);
});

$("#case-studies").click(function() {
  console.log("here");
  $('html, body').animate({
      scrollTop: $(".projects").offset().top
  }, 2000);
});

$("#lets-talk").click(function() {
  console.log("here");
  $('html, body').animate({
      scrollTop: $(".letsTalk").offset().top
  }, 2000);
});


ScrollReveal().reveal('.enjoy');