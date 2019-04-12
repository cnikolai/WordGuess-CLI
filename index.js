var Word = require("./Word.js");
var inquirer = require("inquirer");

var Words = ["fighting","irish","blue"];
var remainingGuesses = 10;
var wordGuessed = false;
var word = "";
var randomWordIndex = 0;
var remainingSpaces = 0;

var game = function () {
   //randomly select a word, and create it
   randomWordIndex = Math.floor(Math.random()*Words.length)
   word = new Word(Words[randomWordIndex]);
   remainingSpaces = Words[randomWordIndex].length;
   //initialize remaining guesses
   remainingGuesses = 10;
   wordGuessed = false;
   promptUser();
}

var promptUser = function() {
    //prompt the user for a guess
    if (remainingGuesses > 0 && wordGuessed === false) {
   inquirer.prompt([
    {
      type: "input",
      message: "Guess a letter", 
      name: "guess"
    }
  ]).then(function(data) {
    console.log(data.guess);
    var tempwordbefore = word.stringWord();
    var tempremainingspacesbefore = tempwordbefore.length - tempwordbefore.replace(/[_]/g, "").length;
    word.guess(data.guess);
    wordGuessed = checkGame();
    var tempword = word.stringWord();
    var tempremainingspaces = tempword.length - tempword.replace(/[_]/g, "").length;
    // console.log(tempremainingspacesbefore);
    // console.log(tempremainingspaces);
    // console.log(remainingSpaces);
    if (tempremainingspacesbefore === tempremainingspaces && tempremainingspaces !== 0) {
      remainingSpaces = tempremainingspaces;
      remainingGuesses = remainingGuesses - 1;
    }
    if (wordGuessed) {
        console.log(word.stringWord());
        console.log("You Win!");
        process.exit();
    }
    else {
      if (remainingGuesses === 0) {
        console.log("Game Over. You Lose!");
        process.exit();
      }
    }
    console.log(word.stringWord());
    promptUser();
  });
}
}

function checkGame() {
    //console.log(Words[randomWordIndex]);
    return (word.stringWord() === Words[randomWordIndex]);
}

game();
