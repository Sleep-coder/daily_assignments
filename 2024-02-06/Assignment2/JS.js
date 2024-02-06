let score = prompt("Enter your score out of 100");
score = parseFloat(score);
if (!isNaN(score)) {
  if (score > 0 && score <= 100) {
    if (score >= 91) {
      alert("Your grade is A");
    } else if (score >= 81 && score < 91) {
      alert("Your grade is B");
    } else if (score >= 71 && score < 81) {
      alert("Your grade is C");
    } else if (score >= 61 && score < 71) {
      alert("Your grade is D");
    } else if (score >= 51 && score < 61) {
      alert("Your grade is E");
    } else {
      alert("Your grade is F");
    }
  } else if (score > 100) {
    alert("Score can't be greater than 100");
  } else {
    alert("Score can't be negative");
  }
} else {
  alert("Score should be number");
  score = prompt("Enter your score out of 100");
}
