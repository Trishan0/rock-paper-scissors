document.addEventListener('DOMContentLoaded', () => {
    const choices = ['Rock', 'Paper', 'Scissor'];
    let cmChoice = document.getElementById('cm-choice')
    let huChoice = document.getElementById('hu-choice')
    let computerScore = 0
    let humanScore = 0
    let winner ;

    function getComputerChoice() {
        const choice = Math.floor(Math.random() * 3);
        
        cmChoice.innerHTML = (choices[choice]);
        return choice
    }

    function getHumanChoice(){
        let humanInput = parseInt(prompt("Enter your choice:\n1 -> Rock\n2 -> Paper\n3 -> Scissor\nPlease enter the number corresponding to your choice:"));
        let humanChoiceInput = humanInput-1

        let humanChoice = choices[humanChoiceInput]
        huChoice.innerHTML = humanChoice;
        return humanChoiceInput
    }

    function playRound(humanChoice, computerChoice) {
        // Log choices first (done in all cases)
        console.log(`Your choice: ${choices[humanChoice]}\nComputer choice: ${choices[computerChoice]}`);
        
        // Handle tie case
        if (humanChoice === computerChoice) {
            console.log("It's a tie...");
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
    }
    let round = 1
    do {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        round += 1
    } while (round <=5);

});
