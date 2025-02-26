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

// Get user choice
function getHumanChoice(){
    humanChoice = prompt("Please chose rock, paper or scissors.")
    return humanChoice.toLowerCase()
}

// Play a round
function playRound(humanChoice, computerChoice, humanScore, computerScore){
    // In event of a tie
    if (humanChoice === computerChoice){
        console.log("It's a tie! You both chose " + humanChoice)
        // If user inputs rock
    } else if (humanChoice === "rock"){
        if (computerChoice === "scissors"){
            console.log("You Win! Rock beats Scissors.")
            ++humanScore;
        }
        else if (computerChoice === "paper"){
            console.log("You Lose! Paper beats Rock.")
            ++computerScore;
        }
        // If user inputs paper
    } else if (humanChoice === "paper"){
        if (computerChoice === "scissors"){
            console.log("You Lose! Scissors beats Paper.")
            ++computerScore;
        }
        else if (computerChoice === "rock"){
            console.log("You Win! Paper beats Rock.")
            ++humanScore;
        }
        // If user inputs scissors
    } else if (humanChoice === "scissors"){
        if (computerChoice === "paper"){
            console.log("You Win! Scissors beats Paper.")
            ++humanScore;
        }
        else if (computerChoice === "rock"){
            console.log("You Lose! Rock beats Scissors.")
            ++computerScore;
        }
    }
    return [humanScore, computerScore]
}

// Play game with 5 rounds
function playGame(){
    // Declare the players score variables
    let humanScore = 0;
    let computerScore = 0;
    console.log("Welcome to Rock Paper Scissors! The winner is best out of 5")
    for (let i = 0; i <= 4; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        [humanScore, computerScore] = playRound(humanSelection, computerSelection, humanScore, computerScore)
        console.log("Score: Human - " + humanScore + " Computer - " + computerScore)
    }

    let playAgain = "";

    if (humanScore > computerScore) {
        playAgain = prompt("Congrats! You win. Type Y to play again.")
    } else if (humanScore < computerScore) {
        playAgain = prompt("Sorry! You lose. Type Y to play again.")
    } else {
        playAgain = prompt("It's a tie!. Type Y to play again.")
    } 
    
    if (playAgain === "Y") {
        playGame();
    }
}

playGame()


