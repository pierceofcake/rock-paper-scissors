/* 
  Basic text-based rock paper scissors game. Plays to 5 rounds and keeps score.
*/

const compSelection = getComputerChoice();
let rounds = 0;
let userScore = 0;
let compScore = 0;

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);

  if (compChoice < 1) {
    return "rock";
  } else if (compChoice < 2) {
    return "paper";
  } else if (compChoice < 3) {
    return "scissors";
  }
}

function playRound(playerSelection, compSelection) {
  let playerChoice = playerSelection.toLowerCase();

  if (playerChoice === compSelection) {
    alert("Tie!");
    return 2;
  } else {
    if (playerChoice === "rock") {
      if (compSelection === "scissors") {
        alert("You win! Rock beats scissors.");
        return 1;
      } else {
        alert("You lose! Paper beats rock.");
        return 0;
      }
    } else if (playerChoice === "paper") {
      if (compSelection === "rock") {
        alert("You win! Paper beats rock.");
        return 1;
      } else {
        alert("You lose! Scissors beats paper.");
        return 0;
      }
    } else if (playerChoice === "scissors") {
      if (compSelection === "paper") {
        alert("You win! Scissors beats paper.");
        return 1;
      } else {
        alert("You lose! Rock beats scissors.");
        return 0;
      }
    }
  }
}

function game() {
  let userInput = prompt('Type "rock", "paper", or "scissors".');
  let result = playRound(userInput, getComputerChoice());

  if (result === 1) {
    return 1;
  } else if (result === 0) {
    return 0;
  }
}

while (true) {
  if (rounds >= 5) {
    alert(
      `Final score after 5 rounds: You scored ${userScore} point(s). The computer's score was ${compScore} point(s).`
    );
    break;
  }
  let result = game();

  if (result === 1) {
    userScore++;
  } else if (result === 0) {
    compScore++;
  }
  rounds++;
}
