/* Telling the idiot computer how to make it's choice */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min + 1) + min);
}
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

/* One round of the game */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            alert("Paper beats rock. You lose! Loser.");
            result = "You Lose.";
            return "You Lose.";
        } else if (computerSelection === "scissors") {
            alert("Rock beats scissors. Guess that means you win this round.");
            result = "You Win.";
            return "You Win.";
        } else {
            alert("It's a tie, but a winner must be named...try again.");
            result = "Tie.";
            return "Tie.";
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            alert("My scissors cut you all up. You lose!");
            result = "You Lose.";
            return "You Lose.";
        } else if (computerSelection === "rock") {
            alert("My rock has been defeated. Damn you, human!");
            result = "You Win.";
            return "You Win.";
        } else {
            alert("Paper vs. paper. The battle no one asked for. Try again.");
            result = "Tie.";
            return "Tie.";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            alert("Ha Ha! My rock has obliterated your puny scissors! You lose.");
            result = "You Lose.";
            return "You Lose.";
        } else if (computerSelection === "paper") {
            alert("You have sliced my paper to bits. You win...but I don't like it.");
            result = "You Win.";
            return "You Win.";
        } else {
            alert("Scissor duel to the death! JK. It's a tie. Try again.");
            result = "Tie";
            return "Tie";
        }
    } 
}

/* Win or lose? */
/* Scores */
let result;
let playerScore = 0;
let computerScore = 0;
function updateScores() {
    if (result === "You Lose.") {
        return ++computerScore;
    } else if (result === "You Win.") {
        return ++playerScore;
    } else if (result === "Tie.") {
        computerScore+=0;
        playerScore+=0;
    }
} 

/* The game */
function playGame() {
    for (let i=0; i<5; i++) {
        /* Getting the computer's selection */
        let computerSelection = getComputerChoice();
        /* Getting the player's selection */
        let playerSelection = prompt("Choose your weapon. Type rock, paper, or scissors.");
        playerSelection.toLowerCase;
        playRound();
        console.log(playRound(playerSelection, computerSelection));
        updateScores(playerScore, computerScore);
        console.log(playerScore, computerScore);
    }
    if (playerScore > computerScore) {
        alert("You've won the game! Congratulations. Now you've made an enemy.");
        return "Winner!";
    } else if (playerScore < computerScore) {
        alert("You've lost the game. Don't cry, human. I've always been superior.");
        return "Loser.";
    } else {
        alert("Something went terribly wrong.")
    }
}
/* intializing game...do I need this? */
playGame();