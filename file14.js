// Number Guessing Game with Quotes

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "It does not matter how slowly you go, as long as you do not stop. - Confucius",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
];

function displayRandomQuote() {
    const randomIndex = getRandomNumber(0, quotes.length - 1);
    document.getElementById("quote").textContent = "Motivational Quote: " + quotes[randomIndex];
}

function startNumberGuessingGame() {
    const secretNumber = getRandomNumber(1, 100);
    let attempts = 0;

    document.getElementById("result").textContent = "";
    document.getElementById("quote").textContent = "";

    document.getElementById("guessInput").value = "";

    alert("Welcome to the Number Guessing Game!\nTry to guess the number between 1 and 100.");

    function checkGuess() {
        const userGuess = parseInt(document.getElementById("guessInput").value);

        if (isNaN(userGuess)) {
            alert("Please enter a valid number.");
            return;
        }

        attempts++;

        if (userGuess === secretNumber) {
            document.getElementById("result").textContent = "Congratulations! You guessed the number in " + attempts + " attempts.";
            displayRandomQuote();
        } else {
            document.getElementById("result").textContent = "Try again! " + (userGuess < secretNumber ? "Go higher." : "Go lower.");
        }
    }

    window.checkGuess = checkGuess;
}

startNumberGuessingGame();