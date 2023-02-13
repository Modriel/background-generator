(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
