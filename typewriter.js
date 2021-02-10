"use strict";

window.addEventListener("DOMContentLoaded", start);

const getNextLetter = document.querySelector(".typewritten").textContent;
let n = 0;

function start() {
  console.log("start");

  document.querySelector(".typewritten").textContent = "";

  nextL();
}

function nextL() {
  console.log(nextL);

  if (n < getNextLetter.length) {
    document.querySelector(".typewritten").textContent += getNextLetter.charAt(
      n
    );
    n++;
    setTimeout(nextL, 150);
  } else if (n === getNextLetter.length) {
    n = 0;
    setTimeout(start, 10);
  }
}
