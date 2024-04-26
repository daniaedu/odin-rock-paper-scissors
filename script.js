// Initialize player and computer scores
let humanScore = 0;
let computerScore = 0;

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
        humanScore++;
    }
    else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') 
    ) {
        console.log(`${computerChoice} beats ${humanChoice}, Computer wins!`)
        computerScore++;
    }
    else {
        console.log(`It's a tie!`);
    }
}

// Get player and computer choices 
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Plays a single round
playRound(humanSelection,computerSelection);
