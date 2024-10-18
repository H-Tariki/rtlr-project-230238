let left= document.getElementById("left")
left.addEventListener('mouseover' , ()=>{
    left.classList.add("animate__pulse")
    setTimeout(() => {
        left.classList.remove("animate__pulse")
    }, 2000);
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    speed: 1000,

    autoplay:{
        delay:2000,
    },

    slidesPerView: 5,
    spaceBetween: 50,

    breakpoints: {
        1400:{
            slidesPerView: 5,
        },
        1000:{
            slidesPerView: 4,
        },
        500:{
            slidesPerView: 3,
        },
        200:{
            slidesPerView: 2,
        },
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
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



