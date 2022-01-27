"use strict";
const text = document.querySelector(".text");

function smoke() {
  text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

  const letters = document.querySelectorAll("span");

  for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener("mouseover", () => {
      letters[i].classList.add("active");
    })
  }
}

smoke();

