// Rock Paper Scissors game

playerScore = 0;
computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(2);
    // Al sumar 1 a la diferencia, permitimos que el redondeo de Math.floor alcance el valor máximo
    return choices[Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)];
}

function getHumanChoice() {
    humanChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
    return humanChoice;
}

function playRound(humanChoice,computerChoice) {
        switch(humanChoice) {
        case "rock":
             (computerChoice === "scissors") ? playerScore++ : computerScore++;
            break;
        case "paper":
            (computerChoice === "rock") ? playerScore++ : computerScore++;
            break;
        case "scissors":
            (computerChoice === "paper") ? playerScore++ : computerScore++;
            break;
        }
}

function playGame() {
    for (let i=1 ; i <= 5 ; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
    
    console.log("Player Score: ", playerScore);
    console.log("Player Score: ", computerScore);
    (playerScore > computerScore) ? console.log("Player Wins") : console.log("Computer Wins");
}

playGame();