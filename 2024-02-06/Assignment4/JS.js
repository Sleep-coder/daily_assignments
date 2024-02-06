let replay;
do {
  let num = Math.floor(Math.random() * 100) + 1;
  let numGuess = 0;
  alert("The number is in Integers from 1 to 100");

  while (true) {
    let guess = parseInt(prompt("Enter your guess:"));

    if (isNaN(guess)) {
      alert("Enter a valid number.");
      continue;
    }

    numGuess = numGuess + 1;

    if (guess === num) {
      alert(
        `Congratulations! The total number of attempts taken = ${numGuess} attempts.`
      );
      break;
    } else if (guess < num) {
      alert("Too low! Try again.");
    } else {
      alert("Too high! Try again.");
    }
  }

  replay = prompt("Do you want to play again? (yes/no)");
  replay = replay.toLowerCase();
} while (replay === "yes");
