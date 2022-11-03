const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;
const imgElements = document.getElementsByClassName("img");
console.log(imgElements);
let paramax = 40;

window.onload = scroll();

window.onscroll = function (e) {
    scroll();
}

function scroll() {
    let y = window.scrollY;
    for (const img of imgElements) {
        let rect = img.getBoundingClientRect();
        let start = rect.y - window.innerHeight + rect.height / 2;
        let min = -(window.innerHeight) - rect.height * map(paramax, 20, 40, 0, 2);
        if (start < 0 && start > min) {
            // start is between 0 and (-window.innerHeight -rect.height)
            let mappedY = map(start, min, 0, paramax, 0);
            if (mappedY < 0) mappedY = 0;
            if (mappedY > paramax) mappedY = paramax;
            console.log(mappedY);
            gsap.to(img.childNodes[1], {
                "--qwe": mappedY + "vh", duration: 0.8, ease: Power4.easeOut
            });
        }
    }
}