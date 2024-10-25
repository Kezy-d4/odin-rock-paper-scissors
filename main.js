function getComputerChoice() {
  let randomNumber = Math.random() * 100;
  let computerChoice;
  console.log(randomNumber);

  if (randomNumber < 33.33) {
    computerChoice = "Rock";
  } else if (randomNumber >= 33.33 && randomNumber <= 66.66) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  console.log(computerChoice);
  return computerChoice;
}

getComputerChoice();