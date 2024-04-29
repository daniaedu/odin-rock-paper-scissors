// Get player's move using a prompt and converts it to lowercase
const getHumanChoice = () => {
    return prompt('Choose your move: Rock, Paper or Scissors').toLowerCase();
};

// Generate computer's random choice (rock, paper, or scissors)
const getComputerChoice = () => {
    // Generates a random integer between 1-3
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1: return 'rock';
        case 2: return 'paper';
        case 3: return 'scissors';
    }
};

// Determines winner based on human and computer choices
function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ){
        console.log(`${humanChoice} beats ${computerChoice}, Player wins!`)
        return 'human';
    }
    else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') 
    ) {
        console.log(`${computerChoice} beats ${humanChoice}, Computer wins!`)
        return 'computer';
    }
    else {
        console.log(`It's a tie!`);
        return 'tie';
    }
}

// Plays 5 rounds of Rock Paper Scissors and keeps score
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let winner;

    // Loops playRound() 5 times
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        winner = playRound(humanSelection,computerSelection);
    
        // Updates scores based on the winner
        switch (winner) {
            case 'human': 
                humanScore++;
                break;
            case 'computer': 
                computerScore++;
                break;
            case 'tie': 
                break;
        }
    }
    // Calls gameWinner() to determine winner
    gameWinner(humanScore, computerScore)
}

// Determines the winner based on final scores
function gameWinner (humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log('Human wins!');
    }
    else if (computerScore > humanScore) {
        console.log('Computer wins!')
    }
    else {
        console.log('Tied game!')
    }
}

// Starts the game by calling the playGame() function
playGame();