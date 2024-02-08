// Refactor the number guessing game to use functions for each part of the game logic. Store the scores from each round in an array. At the conclusion of the game, output the array to display all the scores recorded during the game. This approach will help organize the game code and facilitate tracking of player performance across multiple rounds.log().
let attempts = [];
function guessTheNumber() {
  let num = Math.floor(Math.random() * 5) + 1;
  let numGuess = 0;
  alert("The number is in Integers from 1 to 100");
  while (true) {
    guess = parseInt(prompt("Enter your guess:"));
    if (isNaN(guess)) {
      alert("Enter a valid number.");
      continue;
    }
    numGuess += 1;
    if (guess === num) {
      alert(
        `Congratulations! The total number of attempts taken = ${numGuess} attempts.`
      );
      attempts.push(numGuess);
      break;
    } else if (guess < num) {
      alert("Too low! Try again.");
    } else {
      alert("Too high! Try again.");
    }
  }
}

function replayGame() {
  let replay = prompt("Do you want to play again? (yes/no)");
  replay = replay.toLowerCase();
  if (replay === "yes") {
    return replay === "yes";
  }
}
do {
  guessTheNumber();
} while (replayGame());
console.log("Your attempts: ", attempts);
