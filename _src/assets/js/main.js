"use strict";

const input = document.querySelector(".js-input");
const label = document.querySelector(".label__txt");
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("modal-trigger");
const closeModalBtn = document.querySelector(".js-close-button");

//Input
// function labelChange(ev) {
//   const inputValue = ev.currentTarget.value;

//   if (inputValue === "") {
//     label.classList.contains("label__txt");
//   } else {
//     label.classList.add("validInput");
//   }
// }

// Modal
function openModal(ev) {
  ev.preventDefault();
  if (input.value !== "") {
    modal.classList.remove("is-hidden");
  }
}

function closeModal() {
  modal.classList.add("is-hidden");
}

function closeFromWindow() {
  modal.classList.add("is-hidden");
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeFromWindow);
