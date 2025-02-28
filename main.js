// Get computers choice
function getComputerChoice(){
    let computerChoice;
    let generateNum = Math.random()
    if (generateNum < .33){
        computerChoice = "rock";
      } else if (generateNum < .66){
        computerChoice = "paper";
      } else {
        computerChoice = "scissors"
      }
    return computerChoice
}

// Select resultsDiv and scoreDiv Container
const resultsDiv = document.querySelector("#resultsDiv");
const scoreDiv = document.querySelector("#scoreDiv");

let humanScore = 0;
let computerScore = 0;

// Play a round
function playRound(humanChoice, computerChoice){
    
    // In event of a tie
    if (humanChoice === computerChoice){
        resultsDiv.textContent = "It's a tie! You both chose " + humanChoice;
        // If user inputs rock
    } else if (humanChoice === "rock"){
        if (computerChoice === "scissors"){
            resultsDiv.textContent = "You Win! Rock beats Scissors.";
            humanScore++;
        }
        else if (computerChoice === "paper"){
            resultsDiv.textContent = "You Lose! Paper beats Rock.";
            computerScore++;
        }
        // If user inputs paper
    } else if (humanChoice === "paper"){
        if (computerChoice === "scissors"){
            resultsDiv.textContent = "You Lose! Scissors beats Paper.";
            computerScore++;
        }
        else if (computerChoice === "rock"){
            resultsDiv.textContent = "You Win! Paper beats Rock.";
            humanScore++;
        }
        // If user inputs scissors
    } else if (humanChoice === "scissors"){
        if (computerChoice === "paper"){
            resultsDiv.textContent = "You Win! Scissors beats Paper.";
            humanScore++;
        }
        else if (computerChoice === "rock"){
            resultsDiv.textContent = "You Lose! Rock beats Scissors.";
            computerScore++;
        }
    }
    scoreDiv.textContent = "Score: Human - " + humanScore + " Computer - " + computerScore;
    
    if (humanScore > 4) {
        const playAgain = prompt("Congrats! You win. Type Y to play again.")
        if (playAgain === "Y") {
            humanScore = 0;
            computerScore = 0;
            playGame();
        }
    } else if (computerScore > 4) {
        const playAgain = prompt("Sorry! You lose. Type Y to play again.")
        if (playAgain === "Y") {
            humanScore = 0;
            computerScore = 0;
            playGame();
        }
    } 

}



function playGame(){
    // Declare the players score variables
    console.log("Welcome to Rock Paper Scissors! The winner is best out of 5");

        // Add Event Listeners to Buttons
    const rockbtn = document.querySelector("#rock");
    const paperbtn = document.querySelector("#paper");
    const scissorsbtn = document.querySelector("#scissors");

    rockbtn.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        playRound ("rock", computerSelection);
    })
    paperbtn.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        playRound ("paper", computerSelection);
    })
    scissorsbtn.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        playRound ("scissors", computerSelection);
    })
}


playGame()


