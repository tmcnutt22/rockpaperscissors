//track scores
var wins = 0;
var losses = 0;

// declaration of variables
r = document.getElementById("rock").onclick;
p = document.getElementById("paper").onclick;
s = document.getElementById("scissors").onclick;

// Player choice
function playerSelection(rock, paper, scissors)
    var playerSelection= r;

//computer random choice
var play = ['r','p','s'];
function computerSelection(play) {
    computerPlay = Math.floor.play(Math.random.play() * play.length];
        return (computerPlay);  
 }
   


 //play round
 function playRound(playerSelection, computerSelection) {
        var i;
        for (i = 0; wins < 3 || losses < 3; i++){
            while (playerSelection == computerSelection);{
                if (playerSelection = r && computerSelection == s){
                    wins = wins++;
                }
                else if (playerSelection = r && computerSelection == p) {
                    losses = losses++;
                }
                else if (playerSelection = p && computerSelection == r){
                    wins = wins++;
                }
                else if(playerSelection = p && computerSelection == s){
                    losses = losses++;
                }
                else if(playerSelection = s && computerSelection ==p){
                    wins = wins++;
                }
                else if(playerSelection = s && computerSelection == r){
                    losses = losses++;
                }
            }
            break;
        }   
}

