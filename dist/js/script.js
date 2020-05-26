$(document).ready(function() {
  // init WOW library
  new WOW().init();

  const button = $('#button');
  const modal = $('#modal');
  const modalClose = $('#close');
  const buttonUp = $('#button-up');

  // opening and closing modal window
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
  
  // form validation
  $("#brif-form").validate({
    errorClass: "invalid", // rename error-class  
    errorElement: 'div',   // change error tag 
    rules: {
      username: {
        required: true,
        rangelength: [2, 15]
      },
      phone: {
        required: true,
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      username: {
        required: "Пожалуйста введите своё имя",
        rangelength: "Ваше имя должно быть больше одного символа и меньше 15"
      },
      email: {
        required: "Нам необходим адрес почты, чтобы связаться с Вами",
        email: "Адрес Вашей почты должен быть похож на этот - hello@mail.com"
      },
      phone: {
        required: "Нам необходим номер Вашего телефона"
      },
    }
  });

  // init phome mask from maskedinput library
  $(".phone").mask("+38 (999) 999-9999");

  // form validation
  $("#offer-form").validate({
    errorClass: "invalid", // rename error-class  
    errorElement: 'div',   // change error tag 
    rules: {
      username: {
        // required: true,
        rangelength: [2, 15]
      },
      phone: {
        required: true,
      }
    },
    messages: {
      username: {
        // required: "Пожалуйста введите своё имя",
        rangelength: "Ваше имя должно быть больше одного символа и меньше 15"
      },
      phone: {
        required: "Нам необходим номер Вашего телефона"
      }
    }
  });

  // button top show script
  $(window).scroll(() => {    
    if ($(window).scrollTop() > 90) {
      buttonUp.addClass('button-up_show');
    } else {
      buttonUp.removeClass('button-up_show');
    }
  });
  
  // smooth scroll script
  buttonUp.on('click', event => {
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

  button.on('click', openModal);

  // settings for slick slider
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

  // settings for owl carousel
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

  //sending data to mail
  $('#offer-form').on('submit', function(event) {
    event.preventDefault();

    if($('.username').val()) {
      $.ajax({
        url: '../php/mail.php',
        method: 'POST',
        data: $(this).serialize(),
        success: function(data){
          if(data) {
            $('.success__title').text(data + ', спасибо за заявку, скоро мы Вам перезвоним.');
            $('.offer__input').val('');
          } else {
            $('.offer__input').val('');
          }
        }
      });      
    } else {
      $('.success__title').text('Пожалуйста укажите Ваше имя.');
    }
  });

  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function() {
      callback(webP.height == 2);
    };
    
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
    
  testWebP(function(support) {
    
    if(support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
});