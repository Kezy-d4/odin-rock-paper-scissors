function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;

  if (randomNumber === 0) {
    computerChoice = 'Rock';
  } else if (randomNumber === 1) {
    computerChoice = 'Paper';
  } else if (randomNumber === 2) {
    computerChoice = 'Scissors';
  }

  console.log(randomNumber);
  return computerChoice;
}

let logMsgs = document.querySelector('.log-messages');

let humanScoreIndicator = document.querySelector('.human-score');
let computerScoreIndicator = document.querySelector('.computer-score');

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let handChoices = document.createElement('p');
  handChoices.textContent = `You throw ${humanChoice}. Computer throws ${computerChoice}.`;
  logMsgs.appendChild(handChoices);

  let roundWinner = document.createElement('p');
  roundWinner.textContent = compareHands(humanChoice, computerChoice);

  if (roundWinner.textContent === youWinText) {
    humanScore++;
    humanScoreIndicator.textContent = humanScore;    
  } else if (roundWinner.textContent === computerWinsText) {
    computerScore++
    computerScoreIndicator.textContent = computerScore;
  }

  logMsgs.appendChild(roundWinner);
  
  let nextRound = document.createElement('p');
  
  if (humanScore !== 5 && computerScore !== 5) {    
    nextRound.textContent = 'On to the next round...';

  } else if (humanScore === 5 || computerScore === 5) {

    if (roundWinner.textContent === youWinText) {
      nextRound.textContent = `Match complete! You have won ${humanScore} to ${computerScore}. Good game.`;

    } else if (roundWinner.textContent === computerWinsText) {
      nextRound.textContent = `Match complete! Computer has won ${computerScore} to ${humanScore}. Good game.`;
    }
  }
  logMsgs.appendChild(nextRound);
}

let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    removeAllChildNodes(logMsgs);
    playRound(capitalize(button.className), getComputerChoice());
  });
});


/*
function getHumanChoice() {
  // let humanChoice = prompt("Which hand will you throw: Rock, Paper, or Scissors? Type in your choice.");

  let humanChoice;
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {

    button.addEventListener('click', () => {
      humanChoice = button.className;
      // console.log(humanChoice);

      playRound(humanChoice, getComputerChoice());
      
      
    });
  });

  // if (humanChoice !== null) {
  // humanChoice = humanChoice.toLowerCase();
  // }

  // if (humanChoice === null) {
  //   alert("Cancelled.");
  // } else if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
  //   return humanChoice;
  // } else {
  //   alert("Invalid hand entry. Ensure you spell your chosen hand correctly.");
  // }
}

// getHumanChoice();

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

  // function playRound(humanChoice, computerChoice) {

    // if (humanChoice !== undefined) {
    // humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.substring(1);
    // }

    // if (humanChoice === undefined) {
    //   console.warn("You failed to input a valid hand entry. This match is invalidated. Please reset the page to play again.");
    // } else {
    // console.log(`You throw ${humanChoice}. Computer throws ${computerChoice}.`);
    // }

    // if (humanChoice === computerChoice) {
    //   console.log("This hand is a draw! No points are scored.");

    // } else if (humanChoice === "Rock") {
    //     if (computerChoice === "Scissors") {
    //       humanScore++;
    //       console.log("You win this hand! Rock beats Scissors.");
    //     } else if (computerChoice === "Paper") {
    //       computerScore++;
    //       console.log("Computer wins this hand! Paper beats Rock.");
    //     }

    // } else if (humanChoice === "Paper") {
    //    if (computerChoice === "Rock") {
    //     humanScore++;
    //     console.log("You win this hand! Paper beats Rock.");
    //    } else if (computerChoice === "Scissors") {
    //     computerScore++;
    //     console.log("Computer wins this hand! Scissors beats Paper.");
    //    }

    // } else if (humanChoice === "Scissors") {
    //     if (computerChoice === "Paper") {
    //       humanScore++;
    //       console.log("You win this hand! Scissors beats Paper");
    //     } else if (computerChoice === "Rock") {
    //       computerScore++;
    //       console.log("Computer wins this hand! Rock beats Scissors.");
    //     }
    // }

    // if (humanChoice !== undefined) {
      // console.log(`Player score: ${humanScore}`);
      // console.log(`Computer score: ${computerScore}`);
    // }
  // }

  // console.log("Round1:");
  // playRound(getHumanChoice(), getComputerChoice());
  // console.log("Round2:");
  // playRound(getHumanChoice(), getComputerChoice());
  // console.log("Round3:");
  // playRound(getHumanChoice(), getComputerChoice());
  // console.log("Round4:");
  // playRound(getHumanChoice(), getComputerChoice());
  // console.log("Round5:");
  // playRound(getHumanChoice(), getComputerChoice());
  
  // if (humanScore === computerScore) {
  //   console.log("This match is a draw! Good game.");
  // } else if (humanScore > computerScore) {
  //   console.log("You win the match! Well played.");
  // } else {
  //   console.log("Computer wins the match! Good game.");
  // }
// }

// playGame();

*/
