/* 
  Basic text-based rock paper scissors game. Plays to 5 rounds and keeps score.
*/

let rounds = 0;
let userScore = 0;
let compScore = 0;
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const resultContainer = document.querySelector(".results");

// while (true) {
//   if (rounds >= 5) {
//     alert(
//       `Final score after 5 rounds: You scored ${userScore} point(s). The computer's score was ${compScore} point(s).`
//     );
//     break;
//   }
//   let result = game();

//   if (result === 1) {
//     userScore++;
//   } else if (result === 0) {
//     compScore++;
//   }
//   rounds++;
// }

// Player chooses rock

btnRock?.addEventListener("click", () => {
  const compSelection = getComputerChoice();
  const result = playRound("rock", compSelection);

  if (result === 1) {
    const p = document.createElement("p");
    p.textContent = "You win! Rock beats scissors.";
    resultContainer?.appendChild(p);
  } else if (result === 0) {
    const p = document.createElement("p");
    p.textContent = "You lose! Paper beats rock.";
    resultContainer?.appendChild(p);
  } else {
    const p = document.createElement("p");
    p.textContent = "It's a tie! You both chose rock.";
    resultContainer?.appendChild(p);
  }
});

// Player chooses paper

btnPaper?.addEventListener("click", () => {
  const compSelection = getComputerChoice();
  const result = playRound("paper", compSelection);

  if (result === 1) {
    const p = document.createElement("p");
    p.textContent = "You win! Paper beats rock.";
    resultContainer?.appendChild(p);
  } else if (result === 0) {
    const p = document.createElement("p");
    p.textContent = "You lose! Scissors beats paper.";
    resultContainer?.appendChild(p);
  } else {
    const p = document.createElement("p");
    p.textContent = "It's a tie! You both chose paper.";
    resultContainer?.appendChild(p);
  }
});

// Player chooses scissors

btnScissors?.addEventListener("click", () => {
  const compSelection = getComputerChoice();
  const result = playRound("scissors", compSelection);

  if (result === 1) {
    const p = document.createElement("p");
    p.textContent = "You win! Scissors beats paper.";
    resultContainer?.appendChild(p);
  } else if (result === 0) {
    const p = document.createElement("p");
    p.textContent = "You lose! Rock beats scissors.";
    resultContainer?.appendChild(p);
  } else {
    const p = document.createElement("p");
    p.textContent = "It's a tie! You both chose scissors.";
    resultContainer?.appendChild(p);
  }
});

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

// function game() {
//   // let userInput = prompt('Type "rock", "paper", or "scissors".');
//   let result = playRound(userInput, getComputerChoice());

//   if (result === 1) {
//     return 1;
//   } else if (result === 0) {
//     return 0;
//   }
// }
