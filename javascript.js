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

//Player selection from buttons
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', (e) => {
    playerSelection = 'rock';
    computerSelection = getComputerChoice();
    playRound;
    console.log(playRound(playerSelection, computerSelection));
});
paper.addEventListener('click', (e) => {
    playerSelection = 'paper';
    computerSelection = getComputerChoice();
    playRound;
    console.log(playRound(playerSelection, computerSelection));
});
scissors.addEventListener('click', (e) => {
    playerSelection = 'scissors';
    computerSelection = getComputerChoice();
    playRound;
    console.log(playRound(playerSelection, computerSelection));
});

//Displaying results

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

/* Tie Breaker
function tieBreaker(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("It's your last chance. Choose wisely.");
    playRound();
    console.log(playRound(playerSelection, computerSelection));
    updateScores(playerScore, computerScore);
    if (playerScore > computerScore) {
        alert("Congratulations! You've won the tie breaker and the game!");
        return "You're the Winner!";
    } else if (playerScore < computerScore) {
        alert("Your best wasn't good enough. You lost the game.");
        return "You're definitely a Loser.";
    } else {
        tieBreaker();
    }
} */

/* The game */
/* function playGame() {
    for (let i=0; i<5; i++) {
        // Getting the computer's selection
        let computerSelection = getComputerChoice();
        // Getting the player's selection
        let playerSelection = prompt("Choose your weapon. Type rock, paper, or scissors.");
        playerSelection.toLowerCase;
        console.log(playerSelection, computerSelection);
        playRound();
        console.log(playRound(playerSelection, computerSelection));
        updateScores(playerScore, computerScore);
        console.log(playerScore, computerScore);
    }
    if (playerScore > computerScore) {
        alert("You've won the game! Congratulations. Now you've made an enemy.");
        return "You've won the game!";
    } else if (playerScore < computerScore) {
        alert("You've lost the game. Don't cry, human. I've always been superior.");
        return "You've lost. Now go cry to your human mommy.";
    } else {
        alert("We seem to be tied... Let's try one more round.");
        tieBreaker();
    }
} */
/* intializing game...do I need this? 
playGame(); */
