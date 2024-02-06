// : Develop a simple application that converts values from one unit to another (e.g., kilometers to miles, Celsius to Fahrenheit).
// :Ask the user for the value to convert using prompt().Ask the user for the unit they are converting from and the unit they are converting to (for simplicity, you can assume they will enter specific units you've taught them).Calculate the converted value.Display the result using alert() or console.log().

let num = prompt("Enter your desired number: ");
let conFrom = prompt("Unit of your number (Kilometres,celsius): ");
let conTo = prompt("Unit you want to convert your number (miles,farenheit): ");
conFrom = conFrom.toLowerCase();
conTo = conTo.toLowerCase();
num = parseFloat(num);

if (!Number.isNaN(num)) {
  if (conFrom == "kilometres" && conTo == "miles") {
    alert(num + " " + conFrom + " is equal to " + num * 0.621371 + " " + conTo);
  } else if (conFrom === "celsius" && conTo === "farenheit") {
    alert(
      num + " " + conFrom + " is equal to " + ((num * 9) / 5 + 32) + " " + conTo
    );
  } else {
    alert("Invalid Inputs");
  }
} else {
  alert("Not a Number");
}
