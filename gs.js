const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const targetNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let attempts = 0;

function askGuess() {
    rl.question("Guess a number between 1-100: ", (input) => {
        const guess = Number(input); // Convert input to a number
        attempts++;

        if (isNaN(guess)) {
            console.log("Invalid input. Please enter a number.");
            askGuess(); // Retry if input is not a number
        } else if (guess === targetNumber) {
            console.log(`Congratulations! You guessed the correct number ${targetNumber} in ${attempts} attempts.`);
            rl.close(); // Close the readline interface
        } else if (guess < targetNumber) {
            console.log("Too low! Try again.");
            askGuess(); // Retry if the guess is too low
        } else if (guess > targetNumber) {
            console.log("Too high! Try again.");
            askGuess(); // Retry if the guess is too high
        } else {
            console.log("Something went wrong. Please try again.");
            askGuess(); // Fallback for unexpected issues
        }
    });
}

try {
    askGuess();
} catch (error) {
    console.error("An unexpected error occurred:", error.message);
    rl.close();
}
