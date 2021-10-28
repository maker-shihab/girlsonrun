$( document ).ready(function() {
  // MOBILE MENU
  var menuButton = $('.menu-button'),
      iconBtn = $('.fa-bars'),
      mobileMenu = $('.navMenu');
  
  $(menuButton).click(function(){
    
    if( !$(this).hasClass('is-open') ) {
      $(this).addClass('is-open');
      $(iconBtn).addClass('fa-times');
      $(mobileMenu).addClass('active'); 
    } else {
      $(this).removeClass('is-open');
      $(mobileMenu).removeClass('active');
      $(iconBtn).addClass('fa-bars');
      $(iconBtn).removeClass('fa-times');
    }
    return false;
  });
  // Carousel Slider
  $('.brandItem').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })
});