const compChoiceDisplay = document.getElementById("comp-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let compChoice;
let result;

possibleChoices.forEach((possibleChoice) => {
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateCompChoice();
    getResult();
  });
});

function generateCompChoice() {
  const randomNum = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNum === 1) {
    compChoice = "rock";
  }
  if (randomNum === 2) {
    compChoice = "paper";
  }
  if (randomNum === 3) {
    compChoice = "scissors";
  }
  compChoiceDisplay.innerHTML = compChoice;
}

function getResult() {
  if (compChoice === userChoice) {
    result = "it's a draw";
  }
  if (compChoice === "rock" && userChoice === "paper") {
    result = "You win";
  }
  if (compChoice === "rock" && userChoice === "scissors") {
    result = "You lost";
  }
  if (compChoice === "paper" && userChoice === "scissors") {
    result = "You win";
  }
  if (compChoice === "paper" && userChoice === "rock") {
    result = "You lost";
  }
  if (compChoice === "scissors" && userChoice === "rock") {
    result = "You win";
  }
  if (compChoice === "scissors" && userChoice === "paper") {
    result = "You lost";
  }
  resultDisplay.innerHTML = result;
}
