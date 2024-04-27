let ojoiz = document.querySelector(".ojoiz");
let puntoiz = document.querySelector(".puntoiz");

let ojoder = document.querySelector(".ojoder");
let puntoder = document.querySelector(".puntoder");

document.onmousemove = (e) => {
    let xiz = e.clientX * 100 / window.innerWidth + "%";
    let yiz = e.clientY * 100 / window.innerHeight + "%";

    puntoiz.style.left = xiz;
    puntoiz.style.top = yiz;

    let xder = e.clientX * 100 / window.innerWidth + "%";
    let yder = e.clientY * 100 / window.innerHeight + "%";

    puntoder.style.left = xder;
    puntoder.style.top = yder;
}