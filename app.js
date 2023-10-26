const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const choices = document.querySelector('#choices')
let userChoice
let computerChoice
let result

choices.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResult();
    }
});

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'scissors';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        default:
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    const outcomes = {
        rock: { rock: 'It\'s a draw!', paper: 'You win!', scissors: 'You lose!' },
        paper: { rock: 'You lose!', paper: 'It\'s a draw!', scissors: 'You win!' },
        scissors: { rock: 'You win!', paper: 'You lose!', scissors: 'It\'s a draw!' }
    };

    result = outcomes[computerChoice][userChoice];
    resultDisplay.innerHTML = result;
}