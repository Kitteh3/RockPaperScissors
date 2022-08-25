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

/* One round of the game */
function playRound(playerSelection, computerSelection) {
    if (playerSelection = "rock") {
        if (computerSelection = "paper") {
            return "Paper beats rock. You lose! Loser.";
        } else if (computerSelection = "scissors") {
            return "Rock beats scissors. Guess that means you win that round.";
        } else {
            return "It's a tie, but a winner must be named...try again.";
        }
    }
    if (playerSelection = "paper") {
        if (computerSelection = "scissors") {
            return "My scissors cut you all up. You lose!";
        } else if (computerSelection = "rock") {
            return "My rock has been defeated. Damn you, human!";
        } else {
            return "Paper vs. paper. The battle no one asked for. Try again.";
        }
    }
    if (playerSelection = "scissors") {
        if (computerSelection = "rock") {
            return "Ha Ha! My rock has obliterated your puny scissors! You lose.";
        } else if (computerSelection = "paper") {
            return "You have sliced my paper to bits. You win...but I don't like it.";
        } else {
            return "Scissor duel to the death! JK. It's a tie. Try again.";
        }
    }
}
const playerSelection = userChoice.toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
