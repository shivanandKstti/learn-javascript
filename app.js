const startGameBtn = document.getElementById('start-game');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS'
let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} OR ${SCISSORS}`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! we choose ${DEFAULT_USER_CHOICE} for you`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (cChoice, pChoice) => {

    return cChoice === pChoice ? RESULT_DRAW : (
            cChoice === ROCK && pChoice === PAPER ||
            cChoice === PAPER && pChoice == SCISSORS ||
            cChoice === SCISSORS && pChoice === ROCK
        ) ? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS
        // if (cChoice === pChoice) {
        //     return RESULT_DRAW
        // } else if (
        //     cChoice === ROCK && pChoice === PAPER ||
        //     cChoice === PAPER && pChoice == SCISSORS ||
        //     cChoice === SCISSORS && pChoice === ROCK
        // ) {
        //     return RESULT_PLAYER_WINS;
        // } else {
        //     return RESULT_COMPUTER_WINS;
        // }
}
startGameBtn.addEventListener('click', function() {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log("Game is staring...");
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerSelection);
    // console.log(winner);
    let message = `You picked ${playerSelection}, computer picked ${computerChoice},`;
    if (winner === RESULT_DRAW) {
        message = message + ' had a draw';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + ' won';
    } else {
        message = message + 'Lost.';
    }

    alert(message);
    gameIsRunning = false;
});