/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

const   gameDiv    = document.getElementById('game'),
        minNumSpan = document.getElementById('min-num'),
        maxNumSpan = document.getElementById('max-num'),
        guessInput = document.getElementById('guess-input'),
        guessBtn  = document.getElementById('guess-button'),
        messagePara= document.getElementById('message');

minNumSpan.textContent = min;
maxNumSpan.textContent = max;

function guessSubmitEvent(e){

}

guessBtn.addEventListener(MouseEvents.Click(), guessSubmitEvent)