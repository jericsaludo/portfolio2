// function openMenu() {
//   var x = document.querySelector(".menu_container");
//   if (x.style.left === "-100vw") {
//     x.style.left = "0vw";
//   } else {
//     x.style.left = "-100vw";
//   }
// }


var hamburger = document.querySelector(".hamburg");
var hamburger2 = document.querySelector(".hamburg_close");
var navMenu = document.querySelector(".menu_container");

var menuLinks = document.querySelectorAll(".links2 .left a");


hamburger.addEventListener("click", () => {
  // navMenu.classList.toggle("active");
  navMenu.style.left = "0";
  gsap.fromTo(".links2", {opacity: 0}, {opacity: 1, delay: 1});
});

hamburger2.addEventListener("click", () => {
  // navMenu.classList.toggle("active");
  navMenu.style.left = "-100vw";
});



menuLinks.forEach(link =>{
  link.addEventListener('click', () => {
    navMenu.style.left = "-100vw";
  });

});