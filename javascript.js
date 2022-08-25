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
console.log(getComputerChoice());
