"use strict";

const inputUserNumber = document.querySelector(".js-userNumber");
const btn = document.querySelector(".js-testBtn");
const inputClue = document.querySelector(".js-clue");
const inputAttemps = document.querySelector(".js-attempNumber");

let attempts = 0;

// Creamos una función par generar un número aleatorio al cargar el navegador y recogemos el resultado en una constante.

const getRandomNumber = function () {
  const randomNumber = parseInt(Math.random() * 100);
  return randomNumber;
};

// Creamos una función handler para chequear el valor del input y abrir un mensaje u otro en función del resultado

function checkNumber() {
  const UserNumberValue = inputUserNumber.value;
  if (UserNumberValue === randomNumber) {
    alert("Has ganado, campeona!");
    attemps = 0;
  } else if (UserNumberValue > randomNumber) {
    alert("Número demasiado alto.");
  } else {
    alert("Número demasiado bajo.");
  }
}

//Creamos un listener para escuchar el evento y ejecutar la función handler checkNumber

btn.addEventListener("click", checkNumber);
