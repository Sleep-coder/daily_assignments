while (true) {
  alert(
    "Select the operation: \nAddition \nSubtraction \nMultiplication \nDivision"
  );
  let operation = prompt("Choose the operation");
  operation = operation.toLowerCase();
  if (
    operation == "addition" ||
    operation == "subtraction" ||
    operation == "division" ||
    operation == "multiplication"
  ) {
    let firstNum = prompt("Enter the first number");
    let secondNum = prompt("Enter the second number");
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    if (!isNaN(firstNum) && !isNaN(secondNum)) {
      switch (operation) {
        case "addition":
          let add = firstNum + secondNum;
          alert(`Addition of ${firstNum} and ${secondNum} is ${add}`);
          break;
        case "subtraction":
          let sub = firstNum - secondNum;
          alert(`Subtraction of ${firstNum} and ${secondNum} is ${sub}`);
          break;
        case "multiplication":
          let mult = firstNum * secondNum;
          alert(`Multiplication of ${firstNum} and ${secondNum} is ${mult}`);
          break;
        case "division":
          if (secondNum !== 0) {
            let div = firstNum / secondNum;
            alert(`Division of ${firstNum} by ${secondNum} is ${div}`);
          } else {
            alert("Division by zero is not allowed");
            continue;
          }
          break;
      }
      break;
    } else {
      alert("Not a number");
    }
  } else {
    alert("Invalid Input");
  }
}
