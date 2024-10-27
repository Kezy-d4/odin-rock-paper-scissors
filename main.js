function getComputerChoice() {
  let randomNumber = Math.random() * 100;
  let computerChoice;

  if (randomNumber < 33.33) {
    computerChoice = "rock";
  } else if (randomNumber >= 33.33 && randomNumber <= 66.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  console.log(randomNumber);
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Which hand will you throw: Rock, Paper, or Scissors? Type in your choice.");

  if (humanChoice !== null) {
  humanChoice = humanChoice.toLowerCase();
  }

  if (humanChoice === null) {
    alert("Cancelled. Refresh the page to try again.");
  } else if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
    return humanChoice;
  } else {
    alert("Invalid hand entry. Ensure you spell your chosen hand correctly. Refresh the page to try again.");
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === undefined) {
    console.log("Refresh the page to try again.");
  } else {
    console.log(`You throw ${humanChoice}. Computer throws ${computerChoice}.`);
  }
  
  if (humanChoice === computerChoice) {
    console.log("This hand is a draw! No points are scored.");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);