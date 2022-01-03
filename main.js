const rock = "rock";
const scissors = "scissors";
const paper = "paper";

function player(playerInput) {
    if (
        playerInput !== rock &&
        playerInput !== scissors &&
        playerInput !== paper 
        
    ) {
        console.log("Oops not a valid input but we will pick rock for you");
        return rock;
    }else {
        return playerInput
    }
};

function computer() {
    const num = Math.random();
    if (num < 0.3) {
        return rock; 
    } else if (num < 6) {
        return scissors
    } else {
        return paper
    }
}

function game(player, computer) {
    console.log(player, computer)
    if(player == computer ) {
                console.log("Draw")
                

    } else if (player == rock && computer == scissors || player == paper && computer == rock || player == scissors && computer == paper) {
        console.log("Player wins")
    } else {
       console.log("Computer wins") 
    }
    
}

function runGame() {
    player(scissors)
    computer();
    game( player(scissors),computer())
}

runGame() 