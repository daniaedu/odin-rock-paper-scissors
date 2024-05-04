const gameButtons = document.querySelector(".buttonContainer");
const displayPlayerScore = document.querySelector(".playerScore");
const displayComputerScore = document.querySelector(".computerScore");
const displayMoveStatus = document.querySelector(".moveStatus");
const displayWinner = document.querySelector(".winner");

// Event listener triggers 1 game of rock paper scissors
gameButtons.addEventListener("click", event => {
    if (event.target.classList.contains("gameButton")) {
        playGame(event.target.innerText.toLowerCase());  
    }
})

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
        console.log(`${humanChoice} beats ${computerChoice}`)
        displayMoveStatus.innerText = `${humanChoice} beats ${computerChoice}`
        return 'human';
    }
    else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') 
    ) {
        console.log(`${computerChoice} beats ${humanChoice}`)
        displayMoveStatus.innerText = `${computerChoice} beats ${humanChoice}`;
        return 'computer';
    }
    else {
        displayMoveStatus.innerText = `both threw ${computerChoice}`;
        return 'tie';
    }
}

// Plays 1 round of Rock Paper Scissors and keeps score
function playGame(humanSelection) {
    let computerSelection = getComputerChoice();
    let humanScore = 0;
    let computerScore = 0;
    let winner;

    winner = playRound(humanSelection,computerSelection);

    // Updates scores based on the winner on the scoreboard
    switch (winner) {
        case 'human': 
            humanScore++;
            displayPlayerScore.innerText = Number(displayPlayerScore.innerText) + humanScore;
            break;
        case 'computer': 
            computerScore++;
            displayComputerScore.innerText = Number(displayComputerScore.innerText) + computerScore;
            break;
        case 'tie': 
            break;
    }

    // Calls gameWinner() to determine winner
    gameWinner(humanScore, computerScore)
}

// Determines the winner based on final scores
function gameWinner (humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log('Human wins!');
        displayWinner.innerText = 'Human wins!'
    }
    else if (computerScore > humanScore) {
        console.log('Computer wins!')
        displayWinner.innerText = 'Computer wins!'
    }
    else {
        console.log('Tied game!')
        displayWinner.innerText = 'Tied game!'
    }
}