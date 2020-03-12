let btn = document.getElementById("btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS"
const DefaultValue = ROCK;
const Result_Draw  = "DRAW";
const Result_Player_Wins = "PLAYER WINS";
const Result_Computer_Wins = "COMPUTER_WINS";

let gameIsRuning = false;


const getPlayerChoice = () =>{
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`,'').toUpperCase();
    if (selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid Choice! we choose ${DefaultValue} for you!`);
        return DefaultValue;
    }    
    return selection;
}

const getComputerChoice = function() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    }
    else if(randomValue < 0.67){
    return PAPER;
    }
    else{
        return SCISSORS;
    }
};
const getWiner = function(eChoice, pChoice) {
    if (eChoice === pChoice) {
        return Result_Draw;
    }
    else if (
        eChoice === ROCK && pChoice === PAPER ||
        eChoice === PAPER && pChoice === SCISSORS ||
        eChoice === SCISSORS && pChoice === ROCK
    ) {
        return Result_Player_Wins;
    }
    else{
        return Result_Computer_Wins;
    }
};

btn.addEventListener('click',function () {
    if (gameIsRuning) {
        return;
        }
        gameIsRuning = true;
    console.log("starting Game...........");   
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWiner(computerChoice,playerSelection);
    let message = `you picked ${playerSelection}, computer picked ${computerChoice}, therefor you `;
    if (winner === Result_Draw) {
        message = message + "had a draw";
    }
        else if (winner === Result_Player_Wins) {
            message = message + "won";
        }
        else{
        message = message + "lost";
        }
        alert(message);
        gameIsRuning = false;
    
});