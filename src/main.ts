import './style.css'

let playerScore: number = 0;
let computerScore: number = 0;

let playerScoreSpan = document.getElementById('player_score') as HTMLElement;
let computerScoreSpan = document.getElementById('computer_score') as HTMLElement;
const resultDisplay = document.querySelector('.result_display') as HTMLOutputElement;
const rockSvg = document.getElementById('rock') as Element;
const paperSvg = document.getElementById('paper') as Element;
const scissorsSvg = document.getElementById('scissors') as Element;

function getComputerChoice() {
    const choices: string[] = ['rock', 'paper', 'scissors'];
    const randomNumber: number = Math.floor(Math.random() * 3 + 1);
    return choices[randomNumber];
}

function game(playerChoice: string) {
    const computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        resultDisplay.textContent = `player chose ${playerChoice} & computer chose ${computerChoice}(Game Tie!!)`;

    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        resultDisplay.textContent = `player chose ${playerChoice} & computer chose ${computerChoice}(player wins!)`;
        playerScore++;
        playerScoreSpan.textContent = playerScore.toString();

    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        resultDisplay.textContent = `player chose ${playerChoice} & computer chose ${computerChoice}(player wins!)`;
        playerScore++;
        playerScoreSpan.textContent = playerScore.toString();

    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        resultDisplay.textContent = `player chose ${playerChoice} & computer chose ${computerChoice}(player wins!)`;
        playerScore++;
        playerScoreSpan.textContent = playerScore.toString();

    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        resultDisplay.textContent = `computer chose ${computerChoice} & player chose ${playerChoice}(computer wins!)`;
        computerScore++;
        computerScoreSpan.textContent = computerScore.toString();

    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        resultDisplay.textContent = `computer chose ${computerChoice} & player chose ${playerChoice}(computer wins!)`;
        computerScore++;
        computerScoreSpan.textContent = computerScore.toString();

    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        resultDisplay.textContent = `computer chose ${computerChoice} & player chose ${playerChoice}(computer wins!)`;
        computerScore++;
        computerScoreSpan.textContent = computerScore.toString();
    }
};
game('');


(function playerChoice() {
    rockSvg.addEventListener('click', () => game('rock'));
    paperSvg.addEventListener('click', () => game('paper'));
    scissorsSvg.addEventListener('click', () => game('scissors'));
})();
