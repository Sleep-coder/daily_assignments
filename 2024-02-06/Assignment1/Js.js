let num = prompt("Input a number: ");
num = parseFloat(num);
if (num === 0) {
  alert(`${num} is Zero`);
} else if (num > 0) {
  alert(`${num} is Positive`);
} else {
  alert(`${num} is Negative`);
}
