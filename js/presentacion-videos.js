

var swiper = new Swiper(".swiper", {

  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  speed: 600,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
});


document.querySelector(".swiper-slide--one").addEventListener("mouseover",()=>{
  reproducirVideo("video-1");
})

document.querySelector(".swiper-slide--one").addEventListener("mouseleave",()=>{
  detenerVideo("video-1");
})

document.querySelector(".swiper-slide--two").addEventListener("mouseover",()=>{
  reproducirVideo("video-2");
})
  
document.querySelector(".swiper-slide--two").addEventListener("mouseleave",()=>{
  detenerVideo("video-2");
})

document.querySelector(".swiper-slide--three").addEventListener("mouseover",()=>{
  reproducirVideo("video-3");
})
  
document.querySelector(".swiper-slide--three").addEventListener("mouseleave",()=>{
  detenerVideo("video-3");
})

document.querySelector(".swiper-slide--four").addEventListener("mouseover",()=>{
  reproducirVideo("video-4");
})
  
document.querySelector(".swiper-slide--four").addEventListener("mouseleave",()=>{
  detenerVideo("video-4");
})



// Reproducir el video
function reproducirVideo(video) {
  document.querySelector(`#${video}`).play();
}

// Pausar el video
function pausarVideo(video) {
  document.querySelector(`#${video}`).pause();
}

// Detener el video y volver al inicio
function detenerVideo(video) {
  document.querySelector(`#${video}`).pause();
  document.querySelector(`#${video}`).currentTime = 0;
}