function swip(){

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

swip();

function btn(){
  
  var clickBtn = document.querySelector("#clickbtn");
  var menuSlide = document.querySelector(".menu-slide");
  var close = document.querySelector("#close")

  clickBtn.addEventListener("click", function(){
    gsap.to(menuSlide, {
       left: "0%",
       opacity:1,
       duration:1.2,
    })
  })
  close.addEventListener("click", function(){
    gsap.to(menuSlide, {
      left: "-100%",
      opacity:0,
      duration:1.2,
   })
  })

}
btn();