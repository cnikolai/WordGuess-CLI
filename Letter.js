function Letter(aLetter) {
    this.letter = aLetter;
    this.hasBeenGuessedYet = false;
    this.findOut = function () {
        if (this.hasBeenGuessedYet) {
            return this.letter;
        }
        else {
            return "_";
        }
    };
    this.updateGuessed = function (aLetter) {
        if (this.letter === aLetter) {
            this.hasBeenGuessedYet = true;
        }
    };
};

module.exports = Letter;