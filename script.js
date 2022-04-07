//create game logic that takes 5 rounds and display the winner
function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(i=0; i<5; i++){
        let playerSelect = window.prompt("Please enter your choice", "rock, scissors, paper");
        let result = playRound(playerSelect, computerPlay());
        if(result == "won") {alert("You won this round");playerScore++}
        else if(result == "lost") {alert("You lost this round");computerScore++;}
        else if(result == "tie"){alert("it's a tie")}
        else {alert("Wrong value"); return};
    }

    let winner = (playerScore > computerScore) ? "Congrats, you won the game!!!":
        (playerScore < computerScore) ? "You lost the game. Sorry.":
        "TIE! Try again? y/n";
s
    return winner;
}

//create opponent/computer logic
function computerPlay(){
    let randNum = Math.floor(Math.random()*3);
    return (randNum == 0) ? "rock": (randNum == 1) ? "paper": "scissors"; 
}


//create game round logic
function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();

    let result = hasWrongVal(playerChoice) ? "error":
        (playerChoice == computerChoice) ? "tie": 
        ((playerChoice == "rock" && computerChoice == "paper") ||
        (playerChoice == "scissors" && computerChoice == "rock") ||
        (playerChoice == "paper" && computerChoice == "scissors")) ? "lost": "won";
    return result;
}

function hasWrongVal(value){
    return (value == "rock" || value == "paper" || value == "scissors")? false: true;
}


