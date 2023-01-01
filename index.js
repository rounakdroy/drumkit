//Created an array to store all the buttons with .drum class &
//stored it in a variable
var allButtons = document.querySelectorAll(".drum");

//Created a forEach loop to loop through all the elements of the array allButtons[]
allButtons.forEach((button) => {
  //Adds an event listener to execute the _() function on click
  button.addEventListener("click", function _() {
    var buttonName = this.innerHTML;
    buttonAnimation(buttonName);
    makeSound(buttonName); // calling the make sound function from below.
  });
});

//Detecting keyboard press
document.addEventListener("keydown", function (event) {
  var buttonName = event.key; //key is the keyword that gives the output of which key was pressed.
  buttonAnimation(buttonName);
  makeSound(buttonName); // calling the make sound function from below.
});

//will take the key value as input and make the sound as per switch case
//Here we used a switch case statement to play different
//sound for different button.
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      //  Asigning audio to button
      //  new Audio() method creats an object of the
      //  HTML "audio" element with the mentioned url.
      //  var audio = new Audio("./sounds/tom-1.mp3");

      audio.play(); //play() evokes the function.
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(key);
  }
}

function buttonAnimation(key) {
  // //Button press effect setting method
  var activeButton = document.querySelector("." + key);

  activeButton.classList.add("pressed"); //it will add the .pressed class to the element selected.

  //Below line creates an object of setTimeout function.
  //First parameter takes the name of the function to run
  //and the second parameter takes the time in ms of delay.
  //1 sec = 1000ms
  setTimeout(resetButton, 100);
  function resetButton() {
    activeButton.classList.remove("pressed");
  }
}
