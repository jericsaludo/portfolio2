const sl = document.querySelector('.screen_loader');

const tl = new TimelineMax();

tl.fromTo(sl, 2, {opacity: 1, display:"flex"},{opacity: 0, display:"none", ease: Power2.easeIn})