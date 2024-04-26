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

