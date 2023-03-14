import { Modal } from "./modal.js";

//variables
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");
const alert = document.querySelector(".alert-error");

// const modalWrapper = document.querySelector(".modal-wrapper");
// const modalMessage = document.querySelector(".modal .title span");
// const modalBtnClose = document.querySelector(".modal button.close");

form.onsubmit = function (event) {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;
  const result = IMC(weight, height);
  Modal.message.innerText = `Seu IMC é de ${result}`;

  if (isNaN(weight) == false || isNaN(height) == false) {
    Modal.open();
  } else {
    alert.classList.add("open");
  }
};

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
