document.addEventListener('DOMContentLoaded', () => {
    const choices = ['Rock', 'Paper', 'Scissor'];
    let cmChoice = document.getElementById('cm-choice')
    let huChoice = document.getElementById('hu-choice')
    let computerScore = 0
    let humanScore = 0
    let winner ;

    function getComputerChoice() {
        // const choice = Math.floor(Math.random() * 3);
        const choice = 1
        
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

    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice){
            console.log(`Your choice : ${choices[humanChoice]}\nComputer choice : ${choices[computerChoice]}`);
            console.log("It's a tie...");
        }
        else if (humanChoice === 0 && computerChoice ===1){
                    winner = "Computer"
                    computerScore += 1 
                    console.log(`Your choice : ${choices[humanChoice]}\nComputer choice : ${choices[computerChoice]}`);;
                    console.log(`${choices[computerChoice]} beats ${choices[humanChoice]}`);
                    console.log(`Winner is : ${winner}`);
                    console.log(`Computer Score : ${computerScore}\nHuman Score : ${humanScore}`);
                    
        }
        else if (humanChoice === 0 && computerChoice ===2){
                    winner = "You"
                    humanScore += 1
                    console.log(`Your choice : ${choices[humanChoice]}\nComputer choice : ${choices[computerChoice]}`);;
                    console.log(`${choices[humanChoice]} beats ${choices[computerChoice]}`);
                    console.log(`Winner is : ${winner}`);
                    console.log(`Computer Score : ${computerScore}\nHuman Score : ${humanScore}`);
        }
        else if (humanChoice === 1 && computerChoice ===2){
                    winner = "Computer"
                    computerScore += 1 
                    console.log(`Your choice : ${choices[humanChoice]}\nComputer choice : ${choices[computerChoice]}`);;
                    console.log(`${choices[computerChoice]} beats ${choices[humanChoice]}`);
                    console.log(`Winner is : ${winner}`);
                    console.log(`Computer Score : ${computerScore}\nHuman Score : ${humanScore}`);
        }
        else if (humanChoice === 1 && computerChoice ===0){
                    winner = "You"
                    humanScore += 1
                    console.log(`Your choice : ${choices[humanChoice]}\nComputer choice : ${choices[computerChoice]}`);;
                    console.log(`${choices[humanChoice]} beats ${choices[computerChoice]}`);
                    console.log(`Winner is : ${winner}`);
                    console.log(`Computer Score : ${computerScore}\nHuman Score : ${humanScore}`);
        }
        else if (humanChoice === 2 && computerChoice ===0){
                    winner = "Computer"
                    computerScore += 1 
                    console.log(`Your choice : ${choices[humanChoice]}\nComputer choice : ${choices[computerChoice]}`);;
                    console.log(`${choices[computerChoice]} beats ${choices[humanChoice]}`);
                    console.log(`Winner is : ${winner}`);
                    console.log(`Computer Score : ${computerScore}\nHuman Score : ${humanScore}`);
        }
        else if (humanChoice === 2 && computerChoice ===1){
                    winner = "You"
                    humanScore += 1
                    console.log(`Your choice : ${choices[humanChoice]}\nComputer choice : ${choices[computerChoice]}`);;
                    console.log(`${choices[humanChoice]} beats ${choices[computerChoice]}`);
                    console.log(`Winner is : ${winner}`);
                    console.log(`Computer Score : ${computerScore}\nHuman Score : ${humanScore}`);
        }
    
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
do {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

} while (humanScore < 3 && computerScore < 3);

    
});
