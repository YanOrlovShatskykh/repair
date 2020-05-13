new WOW().init();
$(document).ready(function() {
  const button = $('#button');
  const modal = $('#modal');
  const modalClose = $('#close');
  const buttonUp = $('#button-up');

  const openModal = event => {
    event.preventDefault();
    modal.addClass('modal_active');
    $(document).on('keydown', closeModal);
    modal.on('click', closeModal);
  };
  
  const closeModal = event => {
    event.preventDefault();
    const target = event.target;
    
    if(modalClose[0] === target || event.keyCode === 27 || $(target).hasClass('modal_active')) {
      modal.removeClass('modal_active');
      $(document).off('keydown', closeModal);
      $(modalClose).off('click', closeModal);
    }
  };

  $(window).scroll(() => {    
    if ($(window).scrollTop() > 90) {
      buttonUp.addClass('button-up_show');
    } else {
      buttonUp.removeClass('button-up_show');
    }
  });
  
  buttonUp.on('click', event => {
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

  button.on('click', openModal);

  // $(document).ready(function() {
  //   $('.slider').slick({
  //     infinite: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     prevArrow: $('.arrows__left'),
  //     nextArrow: $('.arrows__right'),
  //     responsive: [
  //       {
  //         breakpoint: 1200,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //           infinite: true
  //         }
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       }
  //     ]
  //   });
  // });

  // $('.owl-carousel').owlCarousel({
  //   loop:true,
  //   margin:10,
  //   nav:true,
  //   responsive:{
  //       0:{
  //           items:1
  //       },
  //       600:{
  //           items:3
  //       },
  //       1000:{
  //           items:5
  //       }
  //   }
  // });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navContainerClass:'arrows',
    navClass:['arrows__left', 'arrows__right'],
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        900:{
            items:2
        },
        1200:{
            items:3
        }
    }
  });

  
});