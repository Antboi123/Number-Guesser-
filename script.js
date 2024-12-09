Let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
Let previousGuesses = [];
Let attempts = 0;

Document.getElementById(‘submit-guess’).addEventListener(‘click’, function() {
    Let userGuess = Number(document.getElementById(‘guess-input’).value);
    Attempts++;
    If (userGuess < 1 || userGuess > 100) {
        Document.getElementById(‘result-message’).textContent = “Please enter a number between 1 and 100!”;
        Return;
    }
    previousGuesses.push(userGuess);
    document.getElementById(‘previous-guesses’).textContent = “Previous guesses: “ + previousGuesses.join(‘, ‘);
    if (userGuess === randomNumber) {
        document.getElementById(‘result-message’).textContent = “Congratulations! You guessed the number in “ + attempts + “ attempts.”;
        resetGame();
    } else if (userGuess < randomNumber) {
        Document.getElementById(‘result-message’).textContent = “Too low! Try again.”;
    } else {
        Document.getElementById(‘result-message’).textContent = “Too high! Try again.”;
    }
});

Document.getElementById(‘restart-game’).addEventListener(‘click’, resetGame);

Function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    previousGuesses = [];
    attempts = 0;
    document.getElementById(‘guess-input’).value = ‘’;
    document.getElementById(‘result-message’).textContent = ‘’;
    document.getElementById(‘previous-guesses’).textContent = ‘’;
}


