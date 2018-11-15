// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
  var userChoice = "";
  var computerChoice = "";
  var winner = "";
  var randomNumber = 0;

$("#shoot").click(function(){
    userChoice = $("#input").val();
    randomNumber = Math.random();
    $("#userChoice").text(userChoice);
    console.log(randomNumber)
    
     if(randomNumber < 1/3) {
        $("#computerChoice").text("Rock"); 
    } else if(randomNumber < 2/3) {
        $("#computerChoice").text("Paper"); 
    } else {
        $("#computerChoice").text("Scissors"); 
    }
});





  
