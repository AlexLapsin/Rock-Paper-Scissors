
//     let winner = (playerScore > computerScore) ? "Congrats, you won the game!!!":
//         (playerScore < computerScore) ? "You lost the game. Sorry.":
//         "TIE! Try again? y/n";
        
//     return winner;
// }


let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button')
const displayDiv = document.querySelector("#displayResults");
const scoreText = document.createElement('h3');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const playerChoice = (button.id == 'rock')? "rock": 
            (button.id == 'paper')? "paper" : "scissors";
        
        displayDiv.appendChild(scoreText);
        displayScore(playRound(playerChoice, computerPlay()))
        
        }
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


function displayScore(result){

    

    (result == "won")? playerScore++ : (result == "lost")? computerScore++: 
        (playerScore++, computerScore++);
    scoreText.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
}    

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

    console.log(result);
    return result;
}

