var Letter = require("./Letter.js");

function Word(word) {
   this.word = [];
   this.remainingSpaces = word.length;
   for (var i = 0; i < word.length; i++) {
       var myLetter = new Letter(word[i]);
       this.word.push(myLetter);
   }
   this.stringWord = function () {
       var myStringWord = "";
       for (var i = 0; i < this.word.length; i++) {
           myStringWord += this.word[i].findOut();
       }
       return myStringWord;
   };
   this.guess = function (aLetter) {
    for (var i = 0; i < this.word.length; i++) {
        this.word[i].updateGuessed(aLetter);
    }
   };
   this.printWord = function () {
       console.log(this.word);
   };
   this.howManyRemainingSpaces = function () {
       return this.word.remainingSpaces;
   };
};

module.exports = Word;