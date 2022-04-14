


let playerScore = 0;
let computerScore = 0;
let round = 0;
const buttons = document.querySelectorAll('button')
const displayDiv = document.querySelector("#displayResults");
const scoreText = document.createElement('h3');
const winnerText = document.createElement('h1');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerChoice = (button.id == 'rock')? "rock": 
            (button.id == 'paper')? "paper" : "scissors";

        displayDiv.appendChild(scoreText);
        if(round>=5){
            displayWinner(); return}
        else{
            displayScore(playRound(playerChoice, computerPlay()))
            round++;
            };       
    });
});


function displayScore(result){
    (result == "won")? playerScore++ : (result == "lost")? computerScore++: 
        (playerScore++, computerScore++);
    scoreText.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
}    


function displayWinner(){
    let winner = (playerScore > computerScore) ? "Congrats, you won the game!!!":
        (playerScore < computerScore) ? "You lost the game. Sorry.":
        "TIE! Try again? y/n";
        
    winnerText.textContent = winner;
    displayDiv.appendChild(winnerText);
}

//opponent/computer
function computerPlay(){
    let randNum = Math.floor(Math.random()*3);
    return (randNum == 0) ? "rock": (randNum == 1) ? "paper": "scissors"; 
}


//game round
function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    let result = (playerChoice == computerChoice) ? "tie": 
        ((playerChoice == "rock" && computerChoice == "paper") ||
        (playerChoice == "scissors" && computerChoice == "rock") ||
        (playerChoice == "paper" && computerChoice == "scissors")) ? "lost": "won";

    console.log(result);
    return result;
}

