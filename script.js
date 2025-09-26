function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    switch(randomNumber){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors"
            break;
    }
}

function getHumanChoice(){
    let userInput = prompt("rock, paper or scissors").toLocaleLowerCase();
    return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    
    if((humanChoice === "rock") && (computerChoice === "paper")){
        computerScore++;
        console.log("You lose! Paper beats Rock");
    }

    else if ((humanChoice === "rock") && (computerChoice === "scissors")){
        humanScore++;
        console.log("You win! Rock beats Paper");
    }

    else if ((humanChoice === "rock") && (computerChoice === "rock")){
        console.log("it's a draw! You both chose rock");

    }

    else if ((humanChoice === "paper") && (computerChoice === "paper")){
        console.log("It's a draw! you both chose paper");
    }
    
    else if ((humanChoice === "paper") && (computerChoice === "scissors")){
        computerScore++;
        console.log("You lose! scissor beats rock");
    }

    else if ((humanChoice === "paper") && (computerChoice === "rock")){
        humanScore++;
        console.log("You win! paper beats rock");
    }

    else if ((humanChoice === "scissors") && (computerChoice === "scissors")){
        console.log("It's a draw! you both chose scissors");
    }

    else if ((humanChoice === "scissors") && (computerChoice === "paper")){
        humanScore++;
        console.log("You win! scissor beats paper");
    }

    else if ((humanChoice === "scissors") && (computerChoice === "rock")){
        computerScore++;
        console.log("You lose! rock beats scissor");
    }

}


function playGame(){

    
    for(i=1; i<=5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Your score is ${humanScore}`);
    console.log(`Computer's score is ${computerScore}`);

    if(humanScore > computerScore){
        console.log("You win");
    }
    else if(humanScore < computerScore){
        console.log("You lose");
    }
    else if(humanScore === computerScore){
        console.log("It's a draw");
    }

    
}

playGame();