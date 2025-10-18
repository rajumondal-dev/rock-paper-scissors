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

function getHumanChoice (){
    let choice = prompt ("Rock, Paper or Scissors");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    
    if((humanChoice === "rock" && computerChoice === "rock")){
        console.log("You : Rock,\nComputer : Rock");
        console.log ("It's a draw - You both chose Rock");
        console.log("\n\n");

    }

    else if((humanChoice === "rock") && (computerChoice === "paper")){
        console.log("You : Rock,\nComputer : Paper");
        console.log ("You lose - Paper beats Rock");
        console.log("\n\n");
        computerScore++;
    }
    else if((humanChoice === "rock" && computerChoice === "scissors")){
        console.log("You : Rock,\nComputer : Scissors");
        console.log ("You win - Rock beats Scissors");
        console.log("\n\n");
        humanScore++;
    }
    
    
    else if((humanChoice === "paper" && computerChoice === "paper")){
        console.log("You : Paper,\nComputer : Paper");
        console.log ("It's a draw - You both chose paper");
        console.log("\n\n");

    }
    else if((humanChoice === "paper" && computerChoice === "rock")){
        console.log("You : Paper,\nComputer : Rock");
        console.log ("You win - Paper beats Rock");
        console.log("\n\n");
        humanScore++;
    }
    else if((humanChoice === "paper" && computerChoice === "scissors")){
        console.log("You : Paper,\nComputer : Scissors");
        console.log ("You lose - Scissors beat Rock");
        console.log("\n\n");
        computerScore++;
    }
    
    
    else if ((humanChoice === "scissors" && computerChoice === "scissors")){
        console.log("You : Scissors,\nComputer : Scissors");
        console.log ("It's a draw - You both chose Scissors");
        console.log("\n\n");

    }
    else if((humanChoice === "scissors" && computerChoice === "rock")){
        console.log("You : Scissors,\nComputer : Rock");
        console.log ("You lose - Rock beats Scissors");
        console.log("\n\n");
        computerScore++;
    }
    else if((humanChoice === "scissors" && computerChoice === "paper")){
        console.log("You : Scissors,\nComputer : Paper");
        console.log ("You win - Scissors beat Paper");
        console.log("\n\n");
        humanScore++;
    }
    
}

function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

for (let i = 1; i<=5; i++){
    playGame();
}

console.log(`Your total score is ${humanScore}`);
console.log("\n")
console.log(`Computer's total score is ${computerScore}`);
console.log("\n\n")

if(humanScore < computerScore){
    console.log("Computer wins");
} else if(humanScore > computerScore){
    console.log("🎉🎉🎉You win🎉🎉🎉");
}
else{
    console.log("It's a draw");
}