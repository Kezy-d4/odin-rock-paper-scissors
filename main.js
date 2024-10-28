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
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Which hand will you throw: Rock, Paper, or Scissors? Type in your choice.");

  if (humanChoice !== null) {
  humanChoice = humanChoice.toLowerCase();
  }

  if (humanChoice === null) {
    alert("Cancelled.");
  } else if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
    return humanChoice;
  } else {
    alert("Invalid hand entry. Ensure you spell your chosen hand correctly.");
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice !== undefined) {
      humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.substring(1);
    }

    if (humanChoice === undefined) {
      console.warn("You failed to input a valid hand entry. This match is invalidated. Please reset the page to play again.");
    } else {
      console.log(`You throw ${humanChoice}. Computer throws ${computerChoice}.`);
    }

    if (humanChoice === computerChoice) {
      console.log("This hand is a draw! No points are scored.");

    } else if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
          humanScore++;
          console.log("You win this hand! Rock beats Scissors.");
        } else if (computerChoice === "Paper") {
          computerScore++;
          console.log("Computer wins this hand! Paper beats Rock.");
        }

    } else if (humanChoice === "Paper") {
       if (computerChoice === "Rock") {
        humanScore++;
        console.log("You win this hand! Paper beats Rock.");
       } else if (computerChoice === "Scissors") {
        computerScore++;
        console.log("Computer wins this hand! Scissors beats Paper.");
       }

    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Paper") {
          humanScore++;
          console.log("You win this hand! Scissors beats Paper");
        } else if (computerChoice === "Rock") {
          computerScore++;
          console.log("Computer wins this hand! Rock beats Scissors.");
        }
    }

    if (humanChoice !== undefined) {
      console.log(`Player score: ${humanScore}`);
      console.log(`Computer score: ${computerScore}`);
    }
  }

  console.log("Round1:");
  playRound(getHumanChoice(), getComputerChoice());
  console.log("Round2:");
  playRound(getHumanChoice(), getComputerChoice());
  console.log("Round3:");
  playRound(getHumanChoice(), getComputerChoice());
  console.log("Round4:");
  playRound(getHumanChoice(), getComputerChoice());
  console.log("Round5:");
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore === computerScore) {
    console.log("This match is a draw! Good game.");
  } else if (humanScore > computerScore) {
    console.log("You win the match! Well played.");
  } else {
    console.log("Computer wins the match! Good game.");
  }
}

playGame();


