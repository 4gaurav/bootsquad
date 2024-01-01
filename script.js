// var swiper = new Swiper(".mySwipe", {
//     slidesPerView: 6,
//     spaceBetween: 1,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     autoplay: {
//         delay: 2000,
//       },
//       breakpoints: {
//         480: {
//           slidesPerView: 6,
//           spaceBetween: 10,
//         },
//     },
// });

// const flippyTexts = document.querySelectorAll(".flippy-text");
// flippyTexts.forEach(text => {
//     let newContent = "";
//     [...text.innerText].forEach(c => newContent += '<span class="flippy-char">' + c + '</span>');
//     text.innerHTML = newContent;
// });

// new starts from here

var swiper = new Swiper('.mySwiper', {
  centeredSlides: true,
  slidesPerView: 6,
  loop: true,
  spaceBetween: 1,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  autoplay: {
             delay: 2000,
         },
});

var swiper = new Swiper('.mySwiper-2', {
  centeredSlides: true,
  slidesPerView: 2.5,
  loop: true,
  spaceBetween: 10,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  autoplay: {
             delay: 2000,
         },
});


// new ends here
//////////////////////////////////////////////////////////

var swiper = new Swiper('.mySwap', {
  centeredSlides: true,
  slidesPerView: 1.6,
  loop: true,
  spaceBetween: 10,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  autoplay: {
             delay: 2000,
         },
});

///////////////////////////////////////////////////

var swiper = new Swiper('.mySwap-2', {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  autoplay: {
             delay: 2000,
         },
});