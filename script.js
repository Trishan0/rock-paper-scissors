const choices = ["Rock", "Paper", "Scissor"];
let cmChoice = document.getElementById("cm-choice");
let result = document.getElementById("game-result");
let computerScore = 0;
let humanScore = 0;
let round = 1;

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function playRound(humanChoice, computerChoice) {
  console.log(
    `Your choice: ${choices[humanChoice]}\nComputer choice: ${choices[computerChoice]}`
  );
  cmChoice.innerHTML = choices[computerChoice];

  // Handle tie case
  if (humanChoice === computerChoice) {
    console.log("It's a tie...");
    result.innerHTML = "It's a tie...";
    round++;
    return;
  }

  // Define winning conditions
  const winningConditions = {
    0: 2, // Rock beats Scissor
    1: 0, // Paper beats Rock
    2: 1, // Scissor beats Paper
  };

  // Determine winner
  const humanWins = winningConditions[humanChoice] === computerChoice;
  const winner = humanWins ? "You" : "Computer";

  // Get winning and losing choices
  const winningChoice = humanWins
    ? choices[humanChoice]
    : choices[computerChoice];
  const losingChoice = humanWins
    ? choices[computerChoice]
    : choices[humanChoice];

  if (humanWins) {
    humanScore += 1;
  } else {
    computerScore += 1;
  }

  // Log results
  console.log(`${winningChoice} beats ${losingChoice}`);
  console.log(`Winner is: ${winner}`);
  console.log(`Computer Score: ${computerScore}\nHuman Score: ${humanScore}`);

  result.innerHTML = `Winner is: ${winner}</br>${winningChoice} beats ${losingChoice}</br>
        Computer Score: ${computerScore} Human Score: ${humanScore}`;
  round++;

  if (round > 5) {
    endGame();
  }
}

function userChoice(index) {
  if (round <= 5) {
    playRound(index, getComputerChoice());
  } else {
    console.log("Game has already ended. Refresh to play again.");
  }
}

function endGame() {
  console.log("GAME OVER!");
  console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
  result.innerHTML = `GAME OVER!<br>Final Score - You: ${humanScore}, Computer: ${computerScore}<br>`;

  if (humanScore > computerScore) {
    console.log("You win the game!");
    result.innerHTML += "You win the game!";
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
    result.innerHTML += "Computer wins the game!";
  } else {
    console.log("The game is a tie!");
    result.innerHTML += "The game is a tie!";
  }
}

function restart() {
  round = 1;
  cmChoice.innerHTML = "?";
  result.innerHTML = "Choose your move!";
  humanScore = 0;
  computerScore = 0;
}
