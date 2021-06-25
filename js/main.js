// $(document).ready(function(){
//   $('.lider-reviews__inner').slick({
//     slidesToShow: 1,
//   });
// });
$('.newsletter').parallax({imageSrc: '/images/newsletter-img.jpg'});


const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    },
  
  });
  