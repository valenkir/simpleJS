function isValidNumber(num) {
  return !isNaN(num) && num !== null && num.trim().length > 0;
}

function isNotEmptyString(promptString) {
  return (
    promptString !== null && promptString.length > 0 && promptString.trim()
  );
}

//CALCULATOR
const calculatorBtn = document.querySelector(".calculator-btn");
const calculatorErrorLabel = document.querySelector(".calculator-error-label");
const operations = ["+", "/", "*", "-"];

const continueCalculation = (answer) => {
  if (
    answer !== null &&
    answer.toLowerCase() !== "no" &&
    answer.toLowerCase() !== "yes"
  ) {
    return continueCalculation(prompt("Should we stop the calculation?", "No"));
  } else if (answer !== null && answer.toLowerCase() === "no") {
    return false;
  } else {
    return true;
  }
};

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
    switch (operation) {
      case "+":
        alert(Number(num1) + Number(num2));
        terminateCalculation = continueCalculation(
          prompt("Should we stop the calculation?", "No")
        );
        break;
      case "-":
        alert(Number(num1) - Number(num2));
        terminateCalculation = continueCalculation(
          prompt("Should we stop the calculation?", "No")
        );
        break;
      case "*":
        alert(Number(num1) * Number(num2));
        terminateCalculation = continueCalculation(
          prompt("Should we stop the calculation?", "No")
        );
        break;
      case "/":
        alert(Number(num1) / Number(num2));
        terminateCalculation = continueCalculation(
          prompt("Should we stop the calculation?", "No")
        );
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
    digitsToMove = parseInt(digitsToMove);
    if (numberToMove.length >= digitsToMove) {
      moveErrorLabel.innerHTML = "";

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

//DAY OF THE WEEK
const weekdays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const weekdayBtn = document.querySelector(".weekday-btn");
const weekdayErrorLabel = document.querySelector(".weekday-error-label");

const showNextDay = (days, nextDayIndex) => {
  const day =
    days[nextDayIndex].charAt(0).toUpperCase() + days[nextDayIndex].slice(1);
  alert(`Next day: ${day}`);
  return nextDayIndex === days.length ? -1 : ++nextDayIndex;
};

weekdayBtn.addEventListener("click", () => {
  const customDay = prompt("Enter a day of the week:");
  let terminateLoop = false;

  if (isNotEmptyString(customDay)) {
    const isValidDay = weekdays.some(
      (day) => day.toLowerCase() === customDay.toLowerCase()
    );
    weekdayErrorLabel.innerHTML = "";
    if (isValidDay) {
      let nextDayIndex = weekdays.indexOf(customDay.toLowerCase()) + 1;
      do {
        if (confirm("Show the next day?")) {
          nextDayIndex =
            nextDayIndex !== weekdays.length
              ? showNextDay(weekdays, nextDayIndex)
              : showNextDay(weekdays, 0);
        } else {
          terminateLoop = true;
        }
      } while (!terminateLoop);
    } else {
      weekdayErrorLabel.innerHTML = "Enter a valid weekday";
    }
  } else {
    weekdayErrorLabel.innerHTML = "Enter a weekday";
  }
});

//MULTIPLICATION TABLE
for (let i = 2; i < 10; i++) {
  console.log(`The multiplication table for the number ${i}:`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} by ${j} equals ${i * j}`);
  }
}

//GUESS NUMBER GAME
const startGameBtn = document.querySelector(".start-game-btn");
const gameErrorLabel = document.querySelector(".game-error-label");

const findDuplicatedGuesses = (prevGuesses) => {
  debugger;
  const counts = {};
  prevGuesses.forEach((value) => {
    if (!counts[value]) {
      counts[value] = 1;
    } else {
      counts[value]++;
    }
  });

  return Object.values(counts).find((elem) => elem > 2) ? true : false;
};

startGameBtn.addEventListener("click", () => {
  let maxNum = 100;
  let minNum = 0;
  let guess = Math.floor(maxNum / 2);
  let prevGuess = [];
  const acceptableAnswers = ["<", ">", "="];
  let endGame = false;

  let answer = prompt(`Is your number ${guess}? Answer with <, > or = signs`);
  debugger;
  while (!endGame) {
    if (acceptableAnswers.includes(answer)) {
      prevGuess.push(guess);
      if (!findDuplicatedGuesses(prevGuess)) {
        switch (answer) {
          case ">":
            minNum = guess + 1;
            guess = minNum + Math.floor((maxNum - minNum) / 2);
            answer = prompt(`Is your number ${guess}`);
            break;
          case "<":
            maxNum = guess - 1;
            guess = maxNum - Math.floor((maxNum - minNum) / 2);
            answer = prompt(`Is your number ${guess}`);
            break;
          case "=":
            alert(`Your number is ${guess}!`);
            endGame = true;
        }
      } else {
        alert(`Your number is either ${guess} or you've cheated!`);
        break;
      }
    } else {
      gameErrorLabel.innerHTML = "The answer should be <, > or =";
      break;
    }
  }
});
