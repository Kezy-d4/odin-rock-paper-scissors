function getComputerChoice() {
  let randomNumber = Math.random() * 100;
  let computerChoice;

  if (randomNumber < 33.33) {
    computerChoice = "Rock";
  } else if (randomNumber >= 33.33 && randomNumber <= 66.66) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  console.log(randomNumber);
  console.log(computerChoice);
  return computerChoice;
}

getComputerChoice();

function getHumanChoice() {
  let humanChoice = prompt("Which hand will you throw: Rock, Paper, or Scissors? ");
  console.log(humanChoice);

  if (humanChoice === null) {
    alert("Cancelled. Refresh the page to try again.");

  } else if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors") {
    return humanChoice;

  } else {
    alert("Invalid hand entry. Ensure you spell and capitalize your chosen hand correctly. Refresh the page to try again.");
  }
}

getHumanChoice();