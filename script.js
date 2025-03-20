    const choices = ['Rock', 'Paper', 'Scissor'];
    let cmChoice = document.getElementById('cm-choice')
    let huChoice = document.getElementById('hu-choice')
    let computerScore = 0
    let humanScore = 0
    let winner ;
    let round = 1

    function getComputerChoice() {
        const choice = Math.floor(Math.random() * 3);
        return choice
    }

    function playRound(humanChoice, computerChoice) {
        // Log choices first (done in all cases)
        console.log(`Your choice: ${choices[humanChoice]}\nComputer choice: ${choices[computerChoice]}`);
        
        // Handle tie case
        if (humanChoice === computerChoice) {
            console.log("It's a tie...");
            round ++
            return;
        }
        
        // Define winning conditions
        const winningConditions = {
            0: 2, // Rock beats Scissor
            1: 0, // Paper beats Rock
            2: 1  // Scissor beats Paper
        };
        
        // Determine winner
        const humanWins = winningConditions[humanChoice] === computerChoice;
        winner = humanWins ? "You" : "Computer";
        
        // Update score
        if (humanWins) {
            humanScore += 1;
        } else {
            computerScore += 1;
        }
        // Get winning and losing choices
        const winningChoice = humanWins ? choices[humanChoice] : choices[computerChoice];
        const losingChoice = humanWins ? choices[computerChoice] : choices[humanChoice];
        
        // Log results
        console.log(`${winningChoice} beats ${losingChoice}`);
        console.log(`Winner is: ${winner}`);
        console.log(`Computer Score: ${computerScore}\nHuman Score: ${humanScore}`);
        round ++
        if(round > 5) {
            console.log("GAME OVER!");
            console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
            if(humanScore > computerScore) {
                console.log("You win the game!");
            } else if(computerScore > humanScore) {
                console.log("Computer wins the game!");
            } else {
                console.log("The game is a tie!");
            }
        }
        
    }
    
        function userChoice(index) {
            if (round <= 5) {
                playRound(index, getComputerChoice());
            } else {
                console.log("Game has already ended. Refresh to play again.");
            }
        }

