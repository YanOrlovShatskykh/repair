const button = document.querySelector('#button');
const modalClose = document.querySelector('#close');
const modal = document.querySelector('#modal');

const openModal = event => {
  event.preventDefault();
  modal.classList.add('modal_active');
  document.addEventListener('keydown', closeModal);
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', closeModal);
};

const closeModal = event => {
  event.preventDefault();
  const target = event.target;

  if(event.keyCode === 27 || modalClose === target || target.classList.contains('modal_active')) {
    modal.classList.remove('modal_active');
    document.removeEventListener('keydown', closeModal);
    modalClose.removeEventListener('click', closeModal);
  }
};

button.addEventListener('click', openModal);