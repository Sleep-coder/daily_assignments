while (true) {
  alert(
    "Select the operation: \nAddition \nSubtraction \nMultiplication \nDivision"
  );
  let add = (firstNum, secondNum) => firstNum + secondNum;
  let sub = (firstNum, secondNum) => firstNum - secondNum;
  let mult = (firstNum, secondNum) => firstNum * secondNum;
  let div = (firstNum, secondNum) => firstNum / secondNum;
  let operation = prompt("Choose the operation");

  operation = operation.toLowerCase();
  if (
    operation == "addition" ||
    operation == "subtraction" ||
    operation == "division" ||
    operation == "multiplication"
  ) {
    while (true) {
      let firstNum = parseFloat(prompt("first Number"));
      let secondNum = parseFloat(prompt("second Number"));
      if (!isNaN(firstNum) && !isNaN(secondNum)) {
        switch (operation) {
          case "addition":
            alert(
              `Addition of ${firstNum} and ${secondNum} is ${add(
                firstNum,
                secondNum
              )}`
            );
            break;
          case "subtraction":
            sub(firstNum, secondNum);
            alert(
              `Subtraction of ${firstNum} and ${secondNum} is ${sub(
                firstNum,
                secondNum
              )}`
            );
            break;
          case "multiplication":
            mult(firstNum, secondNum);
            alert(
              `Multiplication of ${firstNum} and ${secondNum} is ${mult(
                firstNum,
                secondNum
              )}`
            );
            break;
          case "division":
            if (secondNum !== 0) {
              div(firstNum, secondNum);
              alert(
                `Division of ${firstNum} and ${secondNum} is ${div(
                  firstNum,
                  secondNum
                )}`
              );
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
    }
    break;
  } else {
    alert("Invalid Input");
  }
}
