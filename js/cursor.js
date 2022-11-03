const cursor = document.getElementById("cursor");
const cursorBallBig = document.querySelector(".circle-big");
const cursorBallSmall = document.querySelector(".circle-small");
const pic = document.querySelector(".pic");
const imgOverlay = document.querySelector(".image_overlay");
const mouseCursor = document.querySelector(".smallCircle");
const mainContent = document.querySelector(".main");
const mouseCursor2 = document.querySelector(".bigCircle");
let navLinks = document.querySelectorAll("a, .hamburg, .hamburg_close, .goback");
let headers = document.querySelectorAll("h2, h1");
let imageHover = document.querySelectorAll(".img");
let contactLinks = document.querySelectorAll(".contact_text");


let posS = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let posB = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let mouse = { x: posS.x, y: posS.y };
const speed = 0.1;
let fpms = 60 / 1000;

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

const xSetBallSmall = gsap.quickSetter(cursorBallSmall, "x", "px");
const ySetBallSmall = gsap.quickSetter(cursorBallSmall, "y", "px");
const xSetBallBig = gsap.quickSetter(cursorBallBig, "x", "px");
const ySetBallBig = gsap.quickSetter(cursorBallBig, "y", "px");

gsap.ticker.add((time, deltaTime) => {
  let delta = deltaTime * fpms;
  let dt = 1.0 - Math.pow(1.0 - speed, delta);

  posS.x += mouse.x - posS.x;
  posS.y += mouse.y - posS.y;
  posB.x += (mouse.x - posB.x) * dt;
  posB.y += (mouse.y - posB.y) * dt;
  xSetBallSmall(posS.x);
  ySetBallSmall(posS.y);
  xSetBallBig(posB.x);
  ySetBallBig(posB.y);
});

headers.forEach(link =>{
  link.addEventListener('mouseout', () => {
    mouseCursor2.style.transform = "scale(1)";
    mouseCursor.style.visibility = "visible";
  });
  link.addEventListener('mouseover', () => {
    mouseCursor.style.visibility = "hidden";
    mouseCursor2.style.transform = "scale(5)";
  });

});

navLinks.forEach(link =>{
  link.addEventListener('mouseout', () => {
    mouseCursor2.style.transform = "scale(1)";
    mouseCursor.style.visibility = "visible";
  });
  link.addEventListener('mouseover', () => {
    mouseCursor.style.visibility = "hidden";
    mouseCursor2.style.transform = "scale(2)";
  });

});


imageHover.forEach(link =>{
  link.addEventListener('mouseout', () => {
    mouseCursor2.style.transform = "scale(1)";
    mouseCursor.style.visibility = "visible";
    mouseCursor2.innerHTML = "";
  });
  link.addEventListener('mouseover', () => {
    mouseCursor.style.visibility = "hidden";
    mouseCursor2.style.transform = "scale(5)";
    mouseCursor2.innerHTML = "View";
  });

});

contactLinks.forEach(link =>{
  link.addEventListener('mouseout', () => {
    mouseCursor2.style.transform = "scale(1)";
    mouseCursor2.style.fontSize = "3px";
    mouseCursor.style.visibility = "visible";
    mouseCursor2.innerHTML = "";
  });
  link.addEventListener('mouseover', () => {
    mouseCursor.style.visibility = "hidden";
    mouseCursor2.style.transform = "scale(5)";
    mouseCursor2.innerHTML = "Copy";
  });

});



contactLinks.forEach(link =>{
  link.addEventListener('click', () => {
    mouseCursor2.innerHTML = 'Done!';
    mouseCursor2.style.fontSize = "5px";
  });


});

document.querySelector(".email_details").onclick = function() {
  navigator.clipboard.writeText("saludo.jeric19@gmail.com");
}

// document.querySelector(".number_details").onclick = function() {
//   navigator.clipboard.writeText("+639179465957");
// }





/*pic.addEventListener('mouseover', () => {
    mainContent.style.zIndex = "999";
    imgOverlay.style.visibility = "visible";
    imgOverlay.style.zIndex = "10000";
  });
pic.addEventListener('mouseout', () => {
    
    imgOverlay.style.visibility = "hidden";
    imgOverlay.style.zIndex = "10000";
  });*/