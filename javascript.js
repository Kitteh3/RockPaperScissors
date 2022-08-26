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

/* Win or lose? */
function updateScores(playerScore, computerScore) {
    if ((playRound(playerSelection, computerSelection)) === "You Lose.") {

    }
}

/* One round of the game */
function playRound(playerSelection, computerSelection) {
    userChoice
    console.log(playerSelection);
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            alert("Paper beats rock. You lose! Loser.")
            return "You Lose.";
        } else if (computerSelection === "scissors") {
            alert("Rock beats scissors. Guess that means you win this round.");
            return "You Win.";
        } else {
            alert("It's a tie, but a winner must be named...try again.");
            return "Tie.";
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            alert("My scissors cut you all up. You lose!");
            return "You Lose.";
        } else if (computerSelection === "rock") {
            alert("My rock has been defeated. Damn you, human!");
            return "You Win.";
        } else {
            alert("Paper vs. paper. The battle no one asked for. Try again.");
            return "Tie.";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            alert("Ha Ha! My rock has obliterated your puny scissors! You lose.");
            return "You Lose.";
        } else if (computerSelection === "paper") {
            alert("You have sliced my paper to bits. You win...but I don't like it.");
            return "You Win.";
        } else {
            alert("Scissor duel to the death! JK. It's a tie. Try again.");
            return "Tie";
        }
    }
    if (playerSelection !== "paper" || playerSelection !== "rock" || playerSelection !== "scissors") {
        alert("You have to choose a weapon available. Dummy.")
        return 0;
    }
}
/* Asking for user selection */
const userChoice = prompt("Choose your weapon. Type rock, paper, or scissors.");
const playerSelection = userChoice.toLowerCase();
/* Getting the computer's selection */
const computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;

/* Win or lose? */
function updateScores(playerScore, computerScore) {
    if (playRound(playerSelection, computerSelection) === "You Lose.") {
        computerScore += 1;
    } else if (playRound(playerSelection, computerSelection) === "You Win.") {
        playerScore += 1;
    } else if (playRound(playerSelection, computerSelection) === "Tie") {
        computerScore += 0;
        playerScore += 0;
    }
}

/* Loop the round to play a 5 round game */

function game() {
    for (let i=0; i<5; i++) {
        playRound(playerSelection, computerSelection);
        updateScores(playerScore, computerScore);
        if (playerScore >= 3) {
            alert("You've won the game! Congratulations. Now you've made an enemy.");
            return "Winner!";
        } else if (playerScore <= 3) {
            alert("You've lost the game. Don't cry, human. I've always been superior.");
            return "Loser.";
        }
    }
}

/* Results */
console.log(game());
