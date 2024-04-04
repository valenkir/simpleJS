function isValidNumber(num) {
  return !isNaN(num) && num !== null && num.trim().length > 0;
}

function isEmptyString(promptString) {
  return promptString.length > 0 && promptString.trim();
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

//GCD
const firstField = document.querySelector(".num-field1");
const secondField = document.querySelector(".num-field2");
const gcdField = document.querySelector(".gcd-field");
const gcdBtn = document.querySelector(".gcd-btn");
const gcdErrorLabel = document.querySelector(".gcd-error-label");

function getGCD(greaterNum, smallerNum) {
  if (greaterNum % smallerNum === 0) {
    return smallerNum;
  } else {
    for (i = Math.floor(smallerNum / 2); i >= 1; i--) {
      if (smallerNum % i === 0 && greaterNum % i === 0) return i;
    }
  }
}

gcdBtn.addEventListener("click", () => {
  let firstNum = firstField.value;
  let secondNum = secondField.value;
  let gcd;
  if (isValidNumber(firstNum) && isValidNumber(secondNum)) {
    gcdErrorLabel.innerHTML = "";
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    if (firstNum === secondNum) {
      gcdField.value = secondNum;
    } else {
      gcd =
        firstNum > secondNum
          ? getGCD(firstNum, secondNum)
          : getGCD(secondNum, firstNum);
      gcdField.value = gcd;
    }
  } else {
    gcdErrorLabel.innerHTML = "Enter a valid number";
    gcdField.value = "";
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

//STATISTICS
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

    if (Math.abs(number % 2) === 0 && number !== 0) {
      statistics.even++;
    } else if (number % 2 !== 0 && number !== 0) {
      statistics.odd++;
    }
  });

  statResultField.value = `Odd: ${statistics.odd} \nEven: ${statistics.even} \nPositive: ${statistics.positive} \nNegative: ${statistics.negative} \nZero: ${statistics.zero}`;
});

//FAVOURITE FRUIT
const answerField = document.querySelector(".answer-field");
const fruitResultField = document.querySelector(".fruit-result-field");
const fruitBtn = document.querySelector(".fruit-btn");
const fruitErrorLabel = document.querySelector(".fruit-error-label");

fruitBtn.addEventListener("click", () => {
  const fruit = answerField.value;
  if (isEmptyString(fruit)) {
    fruitErrorLabel.innerHTML = "";
    switch (fruit.toLowerCase()) {
      case "peach":
      case "apple":
      case "banana":
        fruitResultField.value = "It's my favourite too!";
        break;
      case "pear":
      case "grapefruit":
        fruitResultField.value = "I don't really like it. In fact, I hate it.";
        break;
      default:
        fruitResultField.value =
          "I haven't tried this one. Are you sure such fruit exists? :D";
    }
  } else {
    fruitErrorLabel.innerHTML = "Enter a valid fruit name";
  }
});

//CHECK NUMBER
const checkNumField = document.querySelector(".check-num-field");
const checkNumResultField = document.querySelector(".check-num-result-field");
const checkNumBtn = document.querySelector(".check-num-btn");
const checkNumErrorLabel = document.querySelector(".check-num-error-label");

checkNumBtn.addEventListener("click", () => {
  let numToCheck = checkNumField.value;
  if (isValidNumber(numToCheck)) {
    checkNumErrorLabel.innerHTML = "";

    switch (true) {
      case Number(numToCheck) === 0:
        checkNumResultField.value = "This is 0";
        break;
      case Number(numToCheck) % 2 === 0:
        checkNumResultField.value = "This number is even";
        break;
      case Number(numToCheck) % 2 !== 0:
        checkNumResultField.value = "This number is odd";
        break;
    }
  } else {
    checkNumErrorLabel.innerHTML = "Enter valid number";
    checkNumResultField.value = "";
  }
});
