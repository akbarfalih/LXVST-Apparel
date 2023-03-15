// Toggle class active
const navbarCenter = document.querySelector('.navbar-center');
// Klik Hamburger toggle sidebar
document.querySelector('#hamburger-menu').onclick = () => {
    navbarCenter.classList.toggle('active');
};

// Menghilangkan sidebar
const hamburger = document.querySelector('#hamburger-menu');


document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarCenter.contains(e.target)) {
        navbarCenter.classList.remove('active');
    }
});


// Section NA Swiper JS
var swiper = new Swiper('.slide-container', {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1080: {
        slidesPerView: 3,
      },
      1366: {
        slidesPerView: 4,
      },
    },
  });




