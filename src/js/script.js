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
});