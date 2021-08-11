const hamburguer = document.querySelector('.hamburguer');
const panel = document.querySelector('.panel');
const btnClose = document.querySelector('.mobile-close');
const menuFixedClose = document.querySelector('.menu-fixed-close');
const menuFixedContent = document.querySelector('.menu-fixed-wrapper');
const menuFixed = document.querySelector('.menu-fixed');

menuFixed.addEventListener('click', () => {
  menuFixedContent.classList.add('active');
})

menuFixedClose.addEventListener('click', () => {
  menuFixedContent.classList.remove('active')
})

hamburguer.addEventListener('click', () => {
  panel.classList.add('active');
  menuFixedContent.classList.remove('active')
})

btnClose.addEventListener('click', () => {
  panel.classList.remove('active');
})