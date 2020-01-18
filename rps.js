//track scores
var wins = 0;
var losses = 0;

//declaration of variables
rock = document.getElementById("rock");
paper = document.getElementById("paper");
scissors = document.getElementById("scissors");
const play['rock', 'paper','scissors'];

//Player choice
function playerSelection(play)
 playerChoice = window.prompt("Rock, Paper, or Scissors?");
    
}

//computer random choice

function computerSelection(play) {
    return play[Math.floor(Math.random() * play.length)];
    
 }

 //play round
 function playRound(playerSelection, computerSelection) {
	// your code here!
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))