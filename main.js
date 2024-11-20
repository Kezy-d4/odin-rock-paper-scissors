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

let gameLog = document.querySelector('.log-messages');

let humanScoreIndicator = document.querySelector('.human-score');
let computerScoreIndicator = document.querySelector('.computer-score');

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let handChoices = document.createElement('p');
  handChoices.textContent = `You throw ${humanChoice}. Computer throws ${computerChoice}.`;
  gameLog.appendChild(handChoices);

  let roundWinner = document.createElement('p');
  roundWinner.textContent = compareHands(humanChoice, computerChoice);

  if (roundWinner.textContent === youWinText) {
    humanScore++;
    humanScoreIndicator.textContent = humanScore;    
  } else if (roundWinner.textContent === computerWinsText) {
    computerScore++
    computerScoreIndicator.textContent = computerScore;
  }

  gameLog.appendChild(roundWinner);
  
  let nextRound = document.createElement('p');
  
  if (humanScore !== 5 && computerScore !== 5) {    
    nextRound.textContent = 'On to the next round...';

  } else if (humanScore === 5 || computerScore === 5) {

    if (roundWinner.textContent === youWinText) {
      nextRound.textContent = `Match complete! You have won ${humanScore} to ${computerScore}. Good game!`;

    } else if (roundWinner.textContent === computerWinsText) {
      nextRound.textContent = `Match complete! Computer has won ${computerScore} to ${humanScore}. Good game!`;
    }
  }
  gameLog.appendChild(nextRound);
}

let buttons = document.querySelectorAll('button');
let roundNumIndicator = document.querySelector('.round-number');
let roundNum = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    removeAllChildNodes(gameLog);

    if (humanScore !== 5 && computerScore !== 5) {
      roundNum++;
      roundNumIndicator.textContent = roundNum;
      playRound(capitalize(button.className), getComputerChoice());

    } else if (humanScore === 5 || computerScore === 5) {
      let matchComplete = document.createElement('p');
      matchComplete.textContent = 'Match complete. Refresh the page to play again.';
      gameLog.appendChild(matchComplete);
    }
  });
});
