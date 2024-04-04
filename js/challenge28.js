function isValidNumber(num) {
  return !isNaN(num) && num !== null && num.trim().length > 0;
}

function isNotEmptyString(promptString) {
  return (
    promptString.length > 0 && promptString.trim() && promptString !== null
  );
}

//CALCULATOR
const calculatorBtn = document.querySelector(".calculator-btn");
const calculatorErrorLabel = document.querySelector(".calculator-error-label");
const operations = ["+", "/", "*", "-"];

calculatorBtn.addEventListener("click", () => {
  let terminateCalculation = false;
  while (!terminateCalculation) {
    let num1 = prompt("Enter the 1st number");
    if (!isValidNumber(num1)) {
      calculatorErrorLabel.innerHTML = "Enter a valid number";
      break;
    }
    let num2 = prompt("Enter the 2nd number");
    if (!isValidNumber(num2)) {
      calculatorErrorLabel.innerHTML = "Enter a valid number";
      break;
    }
    let operation = prompt("Enter the operation", "+");
    if (!operations.includes(operation)) {
      calculatorErrorLabel.innerHTML = "Enter a valid operation (+, /, * or -)";
      break;
    }
    let answer;
    switch (operation) {
      case "+":
        alert(Number(num1) + Number(num2));
        answer = prompt("Should we continue?", "No");
        terminateCalculation = answer.toLowerCase() === "no" ? true : false;
        break;
      case "-":
        alert(Number(num1) - Number(num2));
        answer = prompt("Should we continue?", "No");
        terminateCalculation = answer.toLowerCase() === "no" ? true : false;
        break;
      case "*":
        alert(Number(num1) * Number(num2));
        answer = prompt("Should we continue?", "No");
        terminateCalculation = answer.toLowerCase() === "no" ? true : false;
        break;
      case "/":
        alert(Number(num1) / Number(num2));
        answer = prompt("Should we continue?", "No");
        terminateCalculation = answer.toLowerCase() === "no" ? true : false;
        break;
    }
  }
});

//MOVE DIGITS
const moveNumberField = document.querySelector(".move-number-field");
const moveDigitsField = document.querySelector(".move-digits-field");
const moveResultField = document.querySelector(".move-result-field");
const moveBtn = document.querySelector(".move-btn");
const moveErrorLabel = document.querySelector(".move-error-label");

moveBtn.addEventListener("click", () => {
  const numberToMove = moveNumberField.value;
  let digitsToMove = moveDigitsField.value;

  if (isNotEmptyString(numberToMove) && isValidNumber(digitsToMove)) {
    if (numberToMove.length >= Number(digitsToMove)) {
      moveErrorLabel.innerHTML = "";
      digitsToMove = Number(digitsToMove);

      let result = numberToMove.slice(digitsToMove);
      console.log(result);
      for (let i = 0; i < digitsToMove; i++) {
        result += numberToMove.charAt(i);
      }

      moveResultField.value = result;
    } else {
      moveErrorLabel.innerHTML =
        "The number of digits should be less than the number";
      moveResultField.value = "";
    }
  } else {
    moveErrorLabel.innerHTML = "Enter valid numbers";
    moveResultField.value = "";
  }
});
