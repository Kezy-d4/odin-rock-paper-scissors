function getComputerChoice() {
  randomNumber = Math.random();
  console.log(randomNumber);

  if (randomNumber < 0.33) {
    console.log("Rock");
  } else if (randomNumber >= 0.33 && randomNumber <= 0.66) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
}

getComputerChoice();