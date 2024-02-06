// : Calculate the simple interest for given principal, rate of interest, and time period.
// :Use prompt() to ask the user for the principal amount.Ask for the rate of interest per annum.Ask for the time period in years.Calculate the simple interest using the formula SI=P×R×T/100​.Display the calculated interest using alert() or console.log().

let principal = prompt("Amount:");
let rate = prompt("Rate of Interest per annum");
let timePeriod = prompt("Time Period(yrs)");
principal = parseFloat(principal);
rate = parseFloat(rate);
timePeriod = parseFloat(timePeriod);
let simpleInterest = (principal * rate * timePeriod) / 100;
if (!isNaN(principal) && !isNaN(rate) && !isNaN(timePeriod)) {
  alert(`Simple Interest is ${simpleInterest}`);
} else {
  alert("Invalid Inputs");
}
