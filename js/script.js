let left= document.getElementById("left")
left.addEventListener('mouseover' , ()=>{
    left.classList.remove("animate__backInLeft")
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

  // __________________

  let portfoItem1 = document.getElementById("portfolio-1")
  let portfoItem1Img=document.getElementById("portfolio-1-img")
  let darken1= document.getElementById("darken1")
  portfoItem1.addEventListener('mouseenter' , ()=>{
    portfoItem1Img.classList.add("scaling")
    setTimeout(() => {
      portfoItem1Img.classList.add("rotating")
    }, 200);
    darken1.classList.remove("darkness")
    portfoItem1.classList.add("bordering")
    setTimeout(() => {
      portfoItem1Img.classList.remove("scaling")
      portfoItem1Img.classList.add("onscaling")
      darken1.classList.add("z")
    }, 400);
  })
  portfoItem1.addEventListener('mouseleave' , ()=>{
    portfoItem1Img.classList.remove("onscaling")
    portfoItem1Img.classList.add("scaling")
    setTimeout(() => {
      portfoItem1Img.classList.remove("scaling")
      portfoItem1Img.classList.remove("rotating")
    }, 300);
    setTimeout(() => {
      portfoItem1.classList.remove("bordering")
      darken1.classList.add("darkness")
    }, 400);
  })
// ..................
  let portfoItem2 = document.getElementById("portfolio-2")
  let portfoItem2Img=document.getElementById("portfolio-2-img")
  let darken2= document.getElementById("darken2")
  portfoItem2.addEventListener('mouseenter' , ()=>{
    portfoItem2Img.classList.add("scaling")
    setTimeout(() => {
      portfoItem2Img.classList.add("rotating")
    }, 200);
    darken2.classList.remove("darkness")
    portfoItem2.classList.add("bordering")
    setTimeout(() => {
      portfoItem2Img.classList.remove("scaling")
      portfoItem2Img.classList.add("onscaling")
      darken2.classList.add("z")
    }, 400);
  })
  portfoItem2.addEventListener('mouseleave' , ()=>{
    portfoItem2Img.classList.remove("onscaling")
    portfoItem2Img.classList.add("scaling")
    setTimeout(() => {
      portfoItem2Img.classList.remove("scaling")
      portfoItem2Img.classList.remove("rotating")
    }, 300);
    setTimeout(() => {
      portfoItem2.classList.remove("bordering")
      darken2.classList.add("darkness")
    }, 400);
  })

  // ___________________________________

  let portfoItem3 = document.getElementById("portfolio-3")
  let portfoItem3Img=document.getElementById("portfolio-3-img")
  let darken3= document.getElementById("darken3")
  portfoItem3.addEventListener('mouseenter' , ()=>{
    portfoItem3Img.classList.add("scaling")
    setTimeout(() => {
      portfoItem3Img.classList.add("rotating")
    }, 200);
    darken3.classList.remove("darkness")
    portfoItem3.classList.add("bordering")
    setTimeout(() => {
      portfoItem3Img.classList.remove("scaling")
      portfoItem3Img.classList.add("onscaling")
      darken3.classList.add("z")
    }, 400);
  })
  portfoItem3.addEventListener('mouseleave' , ()=>{
    portfoItem3Img.classList.remove("onscaling")
    portfoItem3Img.classList.add("scaling")
    setTimeout(() => {
      portfoItem3Img.classList.remove("scaling")
      portfoItem3Img.classList.remove("rotating")
    }, 300);
    setTimeout(() => {
      portfoItem3.classList.remove("bordering")
      darken3.classList.add("darkness")
    }, 400);
  })

