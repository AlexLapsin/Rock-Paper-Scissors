//game logic that takes 5 rounds and display the winner
// function game(){
//     let playerScore = 0;
//     let computerScore = 0;

//     for(i=0; i<5; i++){
//         let playerSelect = window.prompt("Please enter your choice", "rock, scissors, paper");
//         let result = playRound(playerSelect, computerPlay());
//         if(result == "won") {alert("You won this round");playerScore++}
//         else if(result == "lost") {alert("You lost this round");computerScore++;}
//         else if(result == "tie"){alert("it's a tie")}
//         else {alert("Wrong value"); return};
//     }

//     let winner = (playerScore > computerScore) ? "Congrats, you won the game!!!":
//         (playerScore < computerScore) ? "You lost the game. Sorry.":
//         "TIE! Try again? y/n";
        
//     return winner;
// }


const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerChoice = (button.id == 'rock')? "rock": 
            (button.id == 'paper')? "paper" : "scissors";
        playRound(playerChoice, computerPlay())}
    )
});
// ///////////////////////////////////////////////////////////////////////////
// SAME AS >>>>
//
// const rockBtn = document.querySelector('#rock')
// rockBtn.addEventListener('click', () => playRound('rock', computerPlay()));

// const paperBtn = document.querySelector('#paper')
// paperBtn.addEventListener('click', () => playRound('paper', computerPlay()));

// const scissorsBtn = document.querySelector('#scissors')
// scissorsBtn.addEventListener('click', () => playRound('scissors', computerPlay()));
// ///////////////////////////////////////////////////////////////////////////



//opponent/computer
function computerPlay(){
    let randNum = Math.floor(Math.random()*3);
    return (randNum == 0) ? "rock": (randNum == 1) ? "paper": "scissors"; 
}


//game round
function playRound(playerChoice, computerChoice){
    playerChoice
    playerChoice = playerChoice.toLowerCase();

    let result = (playerChoice == computerChoice) ? "tie": 
        ((playerChoice == "rock" && computerChoice == "paper") ||
        (playerChoice == "scissors" && computerChoice == "rock") ||
        (playerChoice == "paper" && computerChoice == "scissors")) ? "lost": "won";

        console.log("Player:"+ playerChoice);
        console.log("Computer:"+ computerChoice);
        console.log(result);
    return result;
}

