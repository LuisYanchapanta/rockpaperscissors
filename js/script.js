// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
  
  
  var winner = "";
  
function makeComputerChoice(){
    var randomNumber = Math.random();
    console.log(randomNumber);
    
    var computerChoice = "";
    
    if(randomNumber < 1/3) {
        computerChoice = "Rock";
    } else if(randomNumber < 2/3) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }   
    
    return computerChoice;
}

$("#shoot").click(function(){
    $("#result").text("");
    
    var userChoice = $("#input").val();
    console.log(userChoice);
    
    if (userChoice === "") {
        $("#result").text("Try Again");
        return;
    }
    
    $("#userChoice").text(userChoice);
    
    var computerChoice = makeComputerChoice();
    console.log(computerChoice);
    
    $("#computerChoice").text(computerChoice);
    
    if(userChoice === "Rock" && computerChoice == "Rock"){
        $("#result").text( "Draw!");
    }
    
    if(userChoice === "Rock" && computerChoice == "Paper"){
        $("#result").text( "Computer has won : (");
    }
    
    if(userChoice === "Rock" && computerChoice == "Scissors"){
        $("#result").text( "You Win! : )");
    }
    
    if(userChoice == "Paper" && computerChoice == "Paper"){
        $("#result").text( "Draw!");
    }
    
    if(userChoice == "Paper" && computerChoice == "Rock"){
        $("#result").text( "You Win! : )");
    }
    
    if(userChoice == "Paper" && computerChoice == "Scissors"){
      $("#result").text( "Computer has won : (");
    }
    
    if(userChoice == "Scissors" && computerChoice == "Rock"){
        $("#result").text( "Computer has won : (");
    }
    
    if(userChoice == "Scissors" && computerChoice == "Paper"){
        $("#result").text( "You Win! : )");
    }
    
    if(userChoice == "Scissors" && computerChoice == "Scissors"){
        $("#result").text( "Draw!");
    }
});






  
