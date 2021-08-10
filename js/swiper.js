const swiper = new Swiper('.swiper-container-cardCla', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  breakpoints: {
    // when window width is >= 640px
    920: {
      slidesPerView: 5,
      spaceBetween: 0
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    384: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    300: {
      slidesPerView: 2,
      spaceBetween: 0
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});





const swiper1 = new Swiper('.swiper-container-cardPoints', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 4,
  loop: false,

  breakpoints: {
    // when window width is >= 640px
    920: {
      slidesPerView: 4,
      spaceBetween: 0
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    384: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    300: {
      slidesPerView: 2,
      spaceBetween: 0
    }
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

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
