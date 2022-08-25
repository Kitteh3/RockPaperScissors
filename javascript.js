/* Generating random number for the idiot computer */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/* Telling the idiot computer how to use the random number to play the game */
function getComputerChoice() {
    let randomChoice = getRandomIntInclusive(1, 3);
    if (randomChoice === 1) {
        return "rock";
    } else if (randomChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

/* Asking for user selection */
let userChoice = prompt("Choose your weapon. Type rock, paper, or scissors.");

/* Win or lose? */
let result;

/* One round of the game */
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            alert("Paper beats rock. You lose! Loser.")
            return 2;
        } else if (computerSelection === "scissors") {
            alert("Rock beats scissors. Guess that means you win this round.");
            return 1;
        } else {
            alert("It's a tie, but a winner must be named...try again.");
            return 0;
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            alert("My scissors cut you all up. You lose!");
            return 2;
        } else if (computerSelection === "rock") {
            alert("My rock has been defeated. Damn you, human!");
            return 1;
        } else {
            alert("Paper vs. paper. The battle no one asked for. Try again.");
            return 0;
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            alert("Ha Ha! My rock has obliterated your puny scissors! You lose.");
            return 2;
        } else if (computerSelection === "paper") {
            alert("You have sliced my paper to bits. You win...but I don't like it.");
            return 1;
        } else {
            alert("Scissor duel to the death! JK. It's a tie. Try again.");
            return 0;
        }
    }
}
const playerSelection = userChoice.toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

/* Loop the round to play a 5 round game */

