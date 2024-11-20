function capitalize(string) {
  return string.at(0).toUpperCase() + string.substring(1).toLowerCase();
}

function removeAllChildNodes(parent) {
  while (parent.firstElementChild) {
    parent.removeChild(parent.firstElementChild);
  }
}

let youWinText = 'You win this round and score a point!';
let computerWinsText = 'Computer wins this round and scores a point!';
let drawText = 'This round is a draw! No points are scored.';

function compareHands(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return drawText;
  
  } else if (humanChoice === 'Rock') {

    switch (computerChoice) {
      case 'Scissors':
        return youWinText;
      case 'Paper':
        return computerWinsText;
    }

  } else if (humanChoice === 'Paper') {
    
    switch (computerChoice) {
      case 'Rock':
        return youWinText;
      case 'Scissors':
        return computerWinsText;
    }

  } else if (humanChoice === 'Scissors') {

    switch (computerChoice) {
      case 'Paper':
        return youWinText;
      case 'Rock':
        return computerWinsText;
    }
  }
}