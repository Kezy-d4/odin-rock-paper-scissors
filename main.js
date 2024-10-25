function getComputerChoice() {
  randomNumber = Math.random() * 100;
  console.log(randomNumber);

  if (randomNumber < 33.33) {
    console.log("Rock");
  } else if (randomNumber >= 33.33 && randomNumber <= 66.66) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
}

getComputerChoice();