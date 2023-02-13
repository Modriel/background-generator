const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomColor = document.getElementById("randomColor");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function randomNumber() {
    return Math.floor(Math.random() * 255) + 1
}

function createRgb() {
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()}), rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
}

function randomColorGen() {
    body.style.background = `linear-gradient(to right, ${createRgb()})`;
    css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomColor.addEventListener("click", randomColorGen);