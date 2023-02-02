const playerSelection = "rock";
const compSelection = getComputerChoice();

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
    return "Tie!";
  } else {
    if (playerChoice === "rock") {
      if (compSelection === "scissors") {
        return "You win! Rock beats scissors.";
      } else {
        return "You lose! Paper beats rock.";
      }
    } else if (playerChoice === "paper") {
      if (compSelection === "rock") {
        return "You win! Paper beats rock.";
      } else {
        return "You lose! Scissors beats paper.";
      }
    } else if (playerChoice === "scissors") {
      if (compSelection === "paper") {
        return "You win! Scissors beats paper.";
      } else {
        return "You lose! Rock beats scissors.";
      }
    }
  }
}

// TODO: fix game function - how to detect wins and add to score?

function game() {
  let score = 0;

  for (let i = 0; i < 5; i++) {
    let userInput = prompt('Type "rock", "paper", or "scissors".');
    if (playRound(userInput, getComputerChoice)[4] === "w") {
      score++;
    } else {
      continue;
    }
  }
  console.log(`Your final score after 5 rounds: ${score}`);
}

game();
