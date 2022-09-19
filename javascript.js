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

//result of each round text
const roundResult = document.querySelector('.round-result');

/* One round of the game */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            roundResult.textContent = "Paper beats rock. You lose! Loser."
            result = "You Lose.";
            return "You Lose.";
        } else if (computerSelection === "scissors") {
            roundResult.textContent = "Rock beats scissors. Guess that means you win this round.";
            result = "You Win.";
            return "You Win.";
        } else {
            roundResult.textContent = "It's a tie, but a winner must be named...try again.";
            result = "Tie.";
            return "Tie.";
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            roundResult.textContent = "My scissors cut you all up. You lose!";
            result = "You Lose.";
            return "You Lose.";
        } else if (computerSelection === "rock") {
            roundResult.textContent = "My rock has been defeated. Damn you, human!";
            result = "You Win.";
            return "You Win.";
        } else {
            roundResult.textContent = "Paper vs. paper. The battle no one asked for. Try again.";
            result = "Tie.";
            return "Tie.";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            roundResult.textContent = "Ha Ha! My rock has obliterated your puny scissors! You lose.";
            result = "You Lose.";
            return "You Lose.";
        } else if (computerSelection === "paper") {
            roundResult.textContent = "You have sliced my paper to bits. You win...but I don't like it.";
            result = "You Win.";
            return "You Win.";
        } else {
            roundResult.textContent = "Scissor duel to the death! JK. It's a tie. Try again.";
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

//Click Sound
const audio = new Audio('sounds/cork-85200.mp3');

//Play Again button
function playAgainButton() {
    const playAgainDiv = document.querySelector('.play-again');
    const playAgain = document.createElement('img');
    playAgain.src = "images/rps_play-again.png";
    playAgainDiv.appendChild(playAgain);
    playAgain.addEventListener('click', () => {
        audio.play();
        window.location.href = window.location.href;
    })
}

//Game over image
function showOver() {
    if (computerScore === 3) {
        const gameOverDiv = document.querySelector('.game-over');
        const gameOver = document.createElement('img');
        gameOver.src = "images/rps_game-over.png";
        gameOverDiv.appendChild(gameOver);
    } else if (playerScore === 3) {
        const youWinDiv = document.querySelector('.you-win');
        const youWin = document.createElement('img');
        youWin.src = "images/rps_you-win.png";
        youWinDiv.appendChild(youWin);
    }
    playAgainButton();
}


//End of Game
function gameEnd(playerScore, computerScore) {
    if (playerScore === 3) {
        roundResult.textContent = "You've won the game! Congratulations. Now you've made an enemy.";
        showOver();
        playerScoreBox.textContent = 0;
        computerScoreBox.textContent = 0;
        document.getElementById('selection').style.display = 'none';
    } else if (computerScore === 3) {
        roundResult.textContent = "You've lost the game. Don't cry, human. I've always been superior.";
        showOver();
        playerScoreBox.textContent = 0;
        computerScoreBox.textContent = 0;
        document.getElementById('selection').style.display = 'none';
    }
}

function playGame() {
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
    playerScoreBox.textContent = playerScore;
    computerScoreBox.textContent = computerScore;
}

//Player selection from buttons
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('button');
//Displaying results
const playerScoreBox = document.querySelector('.player-score-box');
const computerScoreBox = document.querySelector('.computer-score-box');

buttons.forEach( (button) => {
    button.addEventListener('click', () => {
        audio.play();
        playerSelection = button.id;
        computerSelection = getComputerChoice();
        playGame();
        gameEnd(playerScore, computerScore);
    });
});
/*
rock.addEventListener('click', (e) => {
    playerSelection = 'rock';
    computerSelection = getComputerChoice();
    playGame();
});
paper.addEventListener('click', (e) => {
    playerSelection = 'paper';
    computerSelection = getComputerChoice();
    playGame();
});
scissors.addEventListener('click', (e) => {
    playerSelection = 'scissors';
    computerSelection = getComputerChoice();
    playGame();
}); */