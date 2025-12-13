let humanScore = 0;
let computerScore = 0;
let roundWinner = "";

const emojis = {
    rock: "✊",
    paper: "🤚",
    scissors: "✌️"
};


const result = document.createElement("div");
const score = document.createElement("div");
const winnerMessage = document.createElement("div");
const resetButton = document.createElement("button");


result.id = "result";
score.id = "score";
winnerMessage.id = "winner";
resetButton.id = "reset";


resetButton.textContent = "RESET GAME";
score.textContent = "Score - You: 0 | Computer: 0"


document.body.append(result, score, winnerMessage, resetButton);


function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
    roundWinner = 'TIE';
    }

    else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ){
        humanScore++;
        roundWinner = "YOU";
    }
    
    else{
        computerScore++;
        roundWinner = "COMPUTER";
    }

    result.textContent = `
        You ${emojis[humanChoice]},
        Computer ${emojis[computerChoice]}.
    `;

    score.textContent = `
        Score - You: ${humanScore} | Computer: ${computerScore}
    `;

    checkWinner();
}

function checkWinner() {
    if (humanScore === 5) {
        winnerMessage.textContent = "🎉 YOU WON THE GAME!";
        disableButtons();
    } 
    else if (computerScore === 5) {
        winnerMessage.textContent = "💻 COMPUTER WON THE GAME!";
        disableButtons();
    }
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}


function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case (0) :
            return "rock";
        case (1) :
            return "paper";
        case (2) :
            return "scissors"
    }
}


const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", (event) => {
    const humanSelection = event.target.id;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})

paperButton.addEventListener("click", (event) => {
    const humanSelection = event.target.id;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})

scissorsButton.addEventListener("click", (event) => {
    const humanSelection = event.target.id;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})

resetButton.addEventListener("click", resetGame);

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundWinner = "";

    result.textContent = "";
    score.textContent = "Score — You: 0 | Computer: 0";
    winnerMessage.textContent = "";

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}