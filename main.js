"use strict";

//Selectores de los elementos el DOM sobre los que necesitamos actuar

const numberInput = document.querySelector(".js-number");
const clue = document.querySelector(".js-clue");
const attemptsInput = document.querySelector(".js-attemps");

// Creamos una función para generar un número aleatorio al cargar el navegador y recogemos el resultado en una constante.

const randomNumber = getRandomNumber();
function getRandomNumber() {
  const number = Math.floor(Math.random() * (101 - 1) + 1);
  return number;
}

// Recogemos el valor del input dónde registra la usuaria el número que va a probar, y lo guardamos en una constante. Por defecto, los datos que devuelve un input son de tipo string, así que debemos transformarlos en datos numéricos con parseInt.

function getInputValue() {
  let inputValue = parseInt(numberInput.value);
  return inputValue;
}
//Selector en el DOM del botón sobre el que se producirá el evento y que debe ser escuchado.
//Creamos la función listener que ejecutará la función handle cuando se produzca el evento.
const btn = document.querySelector(".js-testBtn");

btn.addEventListener("click", handleGame);

function handleGame(ev) {
  ev.preventDefault();
  checkNumber();
  countAttempts();
}

//Función para comparar el número introducido por la usuaria con el número ganador y modificar el mensaje de la pista en cada caso.
function checkNumber() {
  const inputNumber = getInputValue();

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
  attemptsInput.innerHTML = attempts;
}
