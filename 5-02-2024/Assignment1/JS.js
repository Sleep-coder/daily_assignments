let number1 = prompt("Enter the first number: ");
let number2 = prompt("Enter the second number: ");
number1 = parseFloat(number1);
number2 = parseFloat(number2);
let add = number1 + number2;
let sub = number1 - number2;
let mul = number1 * number2;
let div = number1 / number2;

alert(
  "Addition of " +
    number1 +
    " and " +
    number2 +
    " is: " +
    add +
    "\nSubtraction of " +
    number1 +
    " and " +
    number2 +
    " is: " +
    sub +
    "\nMultiplication of " +
    number1 +
    " and " +
    number2 +
    " is: " +
    mul +
    "\nDivision of " +
    number1 +
    " and " +
    number2 +
    " is: " +
    div
);
