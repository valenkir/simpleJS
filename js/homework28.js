function isValidNumber(num) {
  return !isNaN(num) && num !== null && num.trim().length;
}

//SUM NUMBERS
const numberField = document.querySelector(".sum-field");
const sumResultField = document.querySelector(".sum-result-field");
const sumBtn = document.querySelector(".sum-btn");
const sumErrorLabel = document.querySelector(".sum-error-label");

sumBtn.addEventListener("click", () => {
  let numSum = numberField.value;
  if (isValidNumber(numSum) && numSum > 0) {
    numSum = Number(numSum.trim());
    let result = 0;
    while (numSum >= 1) {
      result += numSum--;
    }
    sumResultField.value = result;
    sumErrorLabel.innerHTML = "";
  } else {
    sumErrorLabel.innerHTML = "Enter a valid number";
    sumResultField.value = "";
  }
});

//ALL DIVISORS
const numberDivisorsField = document.querySelector(".num-divisors-field");
const divisorsResultField = document.querySelector(".divisors-result-field");
const divisorsBtn = document.querySelector(".divisors-btn");
const divisorsErrorLabel = document.querySelector(".divisors-error-label");

divisorsBtn.addEventListener("click", () => {
  let numDivisors = numberDivisorsField.value;

  if (isValidNumber(numDivisors) && numDivisors > 0) {
    numDivisors = Number(numDivisors.trim());
    let divisors = [numDivisors];

    for (let i = Math.floor(numDivisors / 2); i >= 1; i--) {
      if (numDivisors % i === 0) divisors.push(i);
    }

    divisorsResultField.value = divisors;
    divisorsErrorLabel.innerHTML = "";
  } else {
    divisorsErrorLabel.innerHTML = "Enter a valid number";
    divisorsResultField.value = "";
  }
});

//CALCULATE THE NUMBER OF DIGITS
const numberOfDigitsField = document.querySelector(".num-of-digits-field");
const numberOfDigitsResultField = document.querySelector(
  ".num-of-digits-result-field"
);
const calcDigitsBtn = document.querySelector(".digits-num-btn");
const numberOfDigitsErrorLabel = document.querySelector(
  ".digits-num-error-label"
);

calcDigitsBtn.addEventListener("click", () => {
  let initNumber = numberOfDigitsField.value;

  if (isValidNumber(initNumber) && +initNumber % 1 === 0) {
    initNumber = Number(initNumber.trim());
    counter = 0;
    do {
      initNumber = Math.trunc(initNumber / 10);
      counter++;
    } while (initNumber > 0);

    numberOfDigitsResultField.value = counter;
    numberOfDigitsErrorLabel.innerHTML = "";
  } else {
    numberOfDigitsErrorLabel.innerHTML = "Enter a valid number";
    numberOfDigitsResultField.value = "";
  }
});

//Statistics
const statResultField = document.querySelector(".statistics-result-field");
const statBtn = document.querySelector(".statistics-btn");
const statErrorLabel = document.querySelector(".statistics-error-label");

statBtn.addEventListener("click", () => {
  let getNum;
  let statistics = {
    odd: 0,
    even: 0,
    positive: 0,
    negative: 0,
    zero: 0,
  };
  let promptNumbers = [];
  for (let i = 0; i < 10; i++) {
    getNum = prompt("Enter a number");
    if (isValidNumber(getNum)) {
      promptNumbers.push(Number(getNum));
    } else {
      statErrorLabel.innerHTML = "Enter a valid number";
      statResultField.value = "";
      break;
    }
  }

  console.log(promptNumbers);
  promptNumbers.forEach((number) => {
    if (number === 0) {
      statistics.zero++;
    } else if (number > 0) {
      statistics.positive++;
    } else if (number < 0) {
      statistics.negative++;
    }
  });

  promptNumbers.forEach((number) => {
    if (Math.abs(number % 2) === 0 && number !== 0) {
      statistics.even++;
    } else if (number % 2 !== 0 && number !== 0) {
      statistics.odd++;
    }
  });

  statResultField.value = `Odd: ${statistics.odd} \nEven: ${statistics.even} \nPositive: ${statistics.positive} \nNegative: ${statistics.negative} \nZero: ${statistics.zero}`;
});
