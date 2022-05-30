;(function( $ ){

/* Fixed header nav */
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      var headerHeight = document.querySelector('.top-header').offsetHeight;
      if($(window).width() >= 992)
      {
        if ( window.scrollY > headerHeight ) {
          document.getElementById('masthead').classList.add('fixed-header');
        }else {
          document.getElementById('masthead').classList.remove('fixed-header');
        }
      } else {
        var bottomheaderHeight = document.querySelector('.bottom-header').offsetHeight;
        var mobileheaderHeight =  headerHeight + bottomheaderHeight;
        if ( window.scrollY > mobileheaderHeight ) {
          document.getElementById('masthead').classList.add('fixed-header');
        }else {
          document.getElementById('masthead').classList.remove('fixed-header');
        }
      }
  });
}); 

/* header postion absolute to banner */
$( document ).ready(function() {
  $PositionheaderHeight = $( '#masthead' ).outerHeight();
  $('.home-banner').css( 'padding-top', $PositionheaderHeight );
});

/* Show or Hide Search field on clicking search icon */
$( document ).on( 'click', '.header-search-icon .search-icon', function(e){
	e.preventDefault();
	$( '.header-search-form' ).addClass( 'search-in' );
});

$( '.header-search-form, .search-close' ).click(function(e) {   
    e.preventDefault();
    if(!$(e.target).is( '.header-search-form input' )) {
        $( '.header-search-form' ).removeClass( 'search-in' );
    }
});

/* Mobile slick nav */
$('#navigation').slicknav({
  duration: 500,
  closedSymbol: '<i class="fas fa-plus"></i>',
  openedSymbol: '<i class="fas fa-minus"></i>',
  prependTo: '.mobile-menu-container',
  allowParentLinks: true,
  nestedParentLinks : false,
  label: "Menu", 
  closeOnClick: true, // Close menu when a link is clicked.
});

/* Home client slider */
$('.client-slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  prevArrow: false,
  nextArrow: false,
  slidesToShow: 4,
  autoplay: false,
  responsive: [{
    breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    }, {
    breakpoint: 479,
      settings: {
        slidesToShow: 2,
      }
  }]
});

/* Home testimonial slider */
$('.testimonial-slider').slick({
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false,
  prevArrow: false,
  nextArrow: false,
});

/* Single gallery slider */
$('.gallery-slider').slick({
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 1200,
  slidesToShow: 2,
  adaptiveHeight: false,
  prevArrow: false,
  nextArrow: false,
});

/* product detail slider */
 $('.product-thumbnails').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-thumb-nav'
});
$('.product-thumb-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product-thumbnails',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});

$(window).scroll(function() {
  /* back to top */
  if ($(this).scrollTop() > 300) {
    $('#backTotop').fadeIn(200);
  } else {
    $('#backTotop').fadeOut(200);
  }
});
 /* back to top */
$("#backTotop").click(function(e) {
  e.preventDefault();
  $("html, body").animate({scrollTop: 0}, 100);
});

/* Blog masonry */
function MasonryGrid (){
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
  });
}

/* preloader */
$( window ).on( "load", function() {
  $( '#siteLoader' ).fadeOut( 500 );
  /* Blog masonry */
  MasonryGrid ();
});

$(document).resize(function(){
  MasonryGrid ();
});

$( document ).ready(function() {
  /* Count down */
  loopcounter('time-counter');
  /* Count down */
  // Progress bar
  $(".example").progressBar({
    duration: 1000,
  });
  // This button will increment the value
  $('[data-quantity="plus"]').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    // cart page input increasing order
    $('.quantity').prop('disabled', true);
    $(document).on('click','.plus-btn',function(e){
      e.preventDefault();
      $('.quantity').val(parseInt($('.quantity').val()) + 1 );
    });
    $(document).on('click','.minus-btn',function(e){
      e.preventDefault();
      $('.quantity').val(parseInt($('.quantity').val()) - 1 );
        if ($('.quantity').val() == 0) {
        $('.quantity').val(1);
      }
    });
    // Circle progress bar
    function animateElements() {
      $('.circle-progressbar').each(function() {
        var elementPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var percent = $(this).find('.circle-bar').attr('data-percent');
        var percentage = parseInt(percent, 10) / parseInt(100, 10);
        var animate = $(this).data('animate');
        if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
          $(this).data('animate', true);
          $(this).find('.circle-bar').circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            thickness: 4,
            lineCap: 'round',
            fill: {
              color: '#535EE0'
            }
          }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
          }).stop();
        }
      });
    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);
  });

})( jQuery );











$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});