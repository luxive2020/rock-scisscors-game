console.log("Hello, World!");
let Choice;
let ROCK = 'rock';
let SCISSORS = 'scissors';
let PAPER = 'paper';
let humanScore = 0;
let computerScore = 0;


//Function to Get Computer Choice.
function getComputerChoice(){
    randNum = Math.random()
    if (randNum <0.33){
        console.log("paper");
    } else if( randNum<0.67){
        console.log("rock")
    }else if(randNum <1){
        console.log("scissors")
    }
}

//Function to get Human Choice.
function getHumanChoice(){
    let humanChoice = prompt("Please select any option between Rock/Scissors/Paper: ");
    humanChoice = humanChoice.trim().toLowerCase();
    if (humanChoice === ROCK){
        // console.log(`Your choice is ${ROCK}`)
        return humanChoice;
    } else if(humanChoice === SCISSORS){
        // console.log(`Your choice is ${SCISSORS}`)
        return humanChoice;
    } else if (humanChoice === PAPER){
        // console.log(`Your choice is ${PAPER}`)
        return humanChoice;
    }else{
        console.log('Your select option not available. Please try again!')
    }  
}

// Function to play the game for 1 round
function playRound(humanChoice, computerChoice){
    if (humanChoice === SCISSORS || computerChoice === PAPER){
        humanScore++;
        console.log(`You win ${SCISSORS} beats ${PAPER}`);
    }else if(humanChoice=== PAPER || computerChoice=== ROCK){
        console.log(`You lose ${ROCK} beats ${SCISSORS}`);
        computerScore++
    } else if( humanChoice === ROCK || computerChoice=== SCISSORS){
        console.log(`You win ${ROCK} beats ${SCISSORS}`);
        humanScore++
    }
    else{
        console.log('You draw!')
    }
};


// function to play the game for 5 rounds
function playGame(){
    let i;
    for (i=0;  i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(); 
        playRound(humanSelection, computerSelection);
        
    }
    if (humanScore>computerScore){
        console.log('Human wins the overall game')
    }else if (humanScore === computerScore){
        console.log('Draw!')
    } else{
        console.log('Computer wins the overall game')
    }
  
}
playGame()

//Make a Variable for each humman and computer selection






