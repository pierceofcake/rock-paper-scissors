/* 
  Basic rock paper scissors game with UI and buttons.
  Plays to 5 rounds and keeps score.
*/

let playerScore = 0;
let compScore = 0;
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const resultContainer = document.querySelector(".results-container");
const resultsText = document.createElement("p");
const scoreContainer = document.querySelector(".score-container");
const scoreText = document.createElement("p");

// Initialize scoreboard

scoreText.textContent = `You: ${playerScore}  Computer: ${compScore}`;
scoreContainer?.appendChild(scoreText);

// Player chooses rock

btnRock?.addEventListener("click", playRock);

// Player chooses paper

btnPaper?.addEventListener("click", playPaper);

// Player chooses scissors

btnScissors?.addEventListener("click", playScissors);

// Helper functions

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

function playRock() {
  const compSelection = getComputerChoice();
  const result = playRound("rock", compSelection);

  if (result === 1) {
    resultsText.textContent = "You win! Rock beats scissors.";
    resultContainer?.appendChild(resultsText);
    playerScore++;
  } else if (result === 0) {
    resultsText.textContent = "You lose! Paper beats rock.";
    resultContainer?.appendChild(resultsText);
    compScore++;
  } else {
    resultsText.textContent = "It's a tie! You both chose rock.";
    resultContainer?.appendChild(resultsText);
  }
  scoreText.textContent = `You: ${playerScore}  Computer: ${compScore}`;

  if (checkForWinner(playerScore, compScore) === 1) {
    btnRock?.removeEventListener("click", playRock);
    btnPaper?.removeEventListener("click", playPaper);
    btnScissors?.removeEventListener("click", playScissors);
  }
}

function playPaper() {
  const compSelection = getComputerChoice();
  const result = playRound("paper", compSelection);

  if (result === 1) {
    resultsText.textContent = "You win! Paper beats rock.";
    resultContainer?.appendChild(resultsText);
    playerScore++;
  } else if (result === 0) {
    resultsText.textContent = "You lose! Scissors beats paper.";
    resultContainer?.appendChild(resultsText);
    compScore++;
  } else {
    resultsText.textContent = "It's a tie! You both chose paper.";
    resultContainer?.appendChild(resultsText);
  }
  scoreText.textContent = `You: ${playerScore}  Computer: ${compScore}`;

  if (checkForWinner(playerScore, compScore) === 1) {
    btnRock?.removeEventListener("click", playRock);
    btnPaper?.removeEventListener("click", playPaper);
    btnScissors?.removeEventListener("click", playScissors);
  }
}

function playScissors() {
  const compSelection = getComputerChoice();
  const result = playRound("scissors", compSelection);

  if (result === 1) {
    resultsText.textContent = "You win! Scissors beats paper.";
    resultContainer?.appendChild(resultsText);
    playerScore++;
  } else if (result === 0) {
    resultsText.textContent = "You lose! Rock beats scissors.";
    resultContainer?.appendChild(resultsText);
    compScore++;
  } else {
    resultsText.textContent = "It's a tie! You both chose scissors.";
    resultContainer?.appendChild(resultsText);
  }
  scoreText.textContent = `You: ${playerScore}  Computer: ${compScore}`;

  if (checkForWinner(playerScore, compScore) === 1) {
    btnRock?.removeEventListener("click", playRock);
    btnPaper?.removeEventListener("click", playPaper);
    btnScissors?.removeEventListener("click", playScissors);
  }
}

function playRound(playerChoice, getComputerChoice) {
  const compSelection = getComputerChoice;
  if (playerChoice === compSelection) {
    return 2;
  } else {
    if (playerChoice === "rock") {
      if (compSelection === "scissors") {
        return 1;
      } else {
        return 0;
      }
    } else if (playerChoice === "paper") {
      if (compSelection === "rock") {
        return 1;
      } else {
        return 0;
      }
    } else if (playerChoice === "scissors") {
      if (compSelection === "paper") {
        return 1;
      } else {
        return 0;
      }
    }
  }
}

function checkForWinner(playerScore, compScore) {
  if (playerScore === 5) {
    const h2 = document.createElement("h2");
    h2.classList.add("results-text");
    h2.textContent = `Nice! You won with ${playerScore} points. The computer's score was ${compScore}.`;
    resultContainer?.appendChild(h2);
    return 1;
  }
  if (compScore === 5) {
    const h2 = document.createElement("h2");
    h2.classList.add("results-text");
    h2.textContent = `Better luck next time! The computer won with ${compScore} points. Your score was ${playerScore}.`;
    resultContainer?.appendChild(h2);
    return 1;
  }
}
