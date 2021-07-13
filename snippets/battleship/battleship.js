function validateUserInput(gridLowerLimit, gridUpperLimit, input){
    if (input < gridLowerLimit || input > gridUpperLimit) {
        alert("Please, enter a valid cell number!");
        return false;
    }
    return true;
}

function isCorrectGuess(userGuess, shipStartLocation, shipLength) {
    var minCorrectLimit = shipStartLocation;
    var maxCorrectLimit = shipStartLocation + shipLength - 1;

    if (userGuess > maxCorrectLimit || userGuess < minCorrectLimit){
        alert("Miss");
        console.log("Guess: " + userGuess + " .Result: Miss.");
        return false;
    }
    alert("Hit");
    console.log("Guess: " + userGuess + " .Result: Hit.");
    return true;
}

function generateRandomValue(){
    // Generates the random number between 0 and 4 (because the game grid is limited - [0;6]).
    return Math.floor(Math.random() * 5);
}

function main() {
    /* The one dimensional (1D) battleship game.
    For the learning purpose the battlefield (grid) has a constant range from zero to six [0;6].*/

    var GRID_LOWER_LIMIT = 0;
    var GRID_UPPER_LIMIT = 6;

    var SHIP_LENGTH = 3;
    var SHIP_START_LOCATION = generateRandomValue();

    var isShipSunk = false;

    var userCurrentGuess;
    var userGuessesCount = 0;
    var hitsCount = 0;

    while (isShipSunk == false){
        userCurrentGuess = prompt("Ready, aim, fire! (enter a number 0-6):");

        if (validateUserInput(GRID_LOWER_LIMIT, GRID_UPPER_LIMIT, userCurrentGuess))
        {
            userGuessesCount++;

            if (isCorrectGuess(userCurrentGuess, SHIP_START_LOCATION, SHIP_LENGTH)){
                hitsCount++;
            }

            if (hitsCount >= SHIP_LENGTH) {
                isShipSunk = true;
                alert("Hey, you sank my battleship!");
            }
        }
    }

    var status = "You took " + userGuessesCount + " guesses to sink the battleship, " +
        "which means your shooting accurancy was " + ((GRID_UPPER_LIMIT - GRID_LOWER_LIMIT)/userGuessesCount);
    alert(status);

    console.log("Ship start location: " + SHIP_START_LOCATION + " .Ship length: " + SHIP_LENGTH);
};

main();