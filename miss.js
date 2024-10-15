// Слайдер на главной
const mainSlider = new Swiper('.slider', {
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    },
    breakpoints: {
        1271: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        1270: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
    },
    loop: true,
});

// Слайдер на стр модели
const modelSlider = new Swiper('.models_slider', {
  navigation: {
      nextEl: '.next',
      prevEl: '.prev',
  },
    pagination: {
        el: '.swiper-pagination',
        clickable: false,
    },
  breakpoints: {
      1271: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      1270: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
  },
  loop: true,
});


// Прилипающее меню
const stickyBlock = document.querySelector('.header_sticky');

window.addEventListener('scroll', function() {
  if (window.innerWidth > 100) { // проверяем ширину экрана
    if (window.pageYOffset > 300) {
      stickyBlock.style.display = 'block';
    } else {
      stickyBlock.style.display = 'none';
    }
  } 
});


