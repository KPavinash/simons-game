var buttonColours=[ "red", "blue", "green", "yellow"];
var gamePattern= [] ;
var userClickedPattern= [];



var randomChosenColour = buttonColours[nextSequence()];
// alert(randomChosenColour);

var audioElement = new Audio("sounds/" + randomChosenColour+ ".mp3");
audioElement.play();


function nextSequence(){
    var randomNumber = Math.floor( Math.random()*4);
    return randomNumber;
}
gamePattern= (randomChosenColour);

// Animation
$("." + randomChosenColour).delay(5).fadeOut().fadeIn('fast') ;





