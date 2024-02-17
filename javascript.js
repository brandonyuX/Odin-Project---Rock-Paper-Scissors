function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    const result = document.querySelector('#result');

    if (playerSelection === computerSelection) {
        result.textContent = "Tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        result.textContent = "You";;
    } else {
        result.textContent = "PC";;
    }
}

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


const selection = document.querySelectorAll('button')

selection.forEach(button => {
    let playerSelection = ''
    button.addEventListener('click', function () {
        const computerSelection = computerPlay();
        if (button.id === 'rock') {
            playerSelection = 'Rock';
        }
        else if (button.id === 'paper') {
            playerSelection = 'Paper';
        }
        else if (button.id === 'scissors') {
            playerSelection = 'Scissors';
        }
        playRound(playerSelection, computerSelection);
    });
})
