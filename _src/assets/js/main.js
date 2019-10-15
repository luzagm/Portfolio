"use strict";

const input = document.querySelector(".js-input");
const = document.querySelector(".label__txt");
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("modal-trigger");
const closeModalBtn = document.querySelector(".js-close-button");

// Contact modal
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
