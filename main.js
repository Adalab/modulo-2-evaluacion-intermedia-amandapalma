"use strict";

//referncia a los elementos HTML sobre los que quiero actuar

const numberInput = document.querySelector(".js-number");

const clue = document.querySelector(".js-clue");
const attemptsInput = document.querySelector(".js-attemps");
// console.log(attemptsInput);

// Creamos una función para generar un número aleatorio al cargar el navegador y recogemos el resultado en una constante.

const randomNumber = getRandomNumber();

function getRandomNumber() {
  const number = Math.floor(Math.random() * (101 - 1) + 1);
  return number;
}

// console.log(randomNumber);

// Recoger el número que escribe la usuaria

//constante que recoge el valor del input

function getInputValue() {
  let inputValue = parseInt(numberInput.value);
  return inputValue;
}

// console.log(getInputValue());

const btn = document.querySelector(".js-testBtn");

btn.addEventListener("click", handleGame);

function handleGame(ev) {
  ev.preventDefault();
  // console.log("me han pulsado");
  checkNumber();
  countAttempts();
}

function checkNumber() {
  // console.log("hola");
  const inputNumber = getInputValue();
  // console.log(inputNumber);

  if (inputNumber < randomNumber) {
    clue.innerHTML = "Pista: Demasiado bajo.";
  }
  if (inputNumber > randomNumber) {
    clue.innerHTML = "Pista: Demasiado alto.";
  }
  if (inputNumber > 100 || inputNumber < 1) {
    clue.innerHTML = "Pista: El número debe estar entre 1 y 100.";
  }
  if (inputNumber === randomNumber) {
    clue.innerHTML = "Has ganado campeona!!!";
  }
}

// contador del número de intentos
let attempts = 0;
function countAttempts() {
  attempts++;
  console.log(attempts);
  attemptsInput.innerHTML = attempts;
}
