
//^ ---------------------------------- */
//^             INDEX.HTML             */
//^ ---------------------------------- */

document.querySelector(".film1").ondblclick =() => {
    window.location.href = "./siccin6.html"
}
document.querySelector(".film2").ondblclick =() => {
    window.location.href = "./zentralGelegen.html"
}
document.querySelector(".film3").ondblclick =() => {
    window.location.href = "./betweenTwoDawns.html"
}
document.querySelector(".film4").ondblclick =() => {
    window.location.href = "./suursuzAsk.html"
}
document.querySelector(".film5").ondblclick =() => {
    window.location.href = "./gonulDagi.html"
    target="_blank"
}

const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  speed: 600,
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
});
