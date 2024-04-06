import { isValidNumber, isValidPositiveNumber } from "./validation.js";

//COMPARE NUMBERS
const compareNums = (num1, num2) => {
  if (num1 > num2) {
    return 1;
  } else if (num1 < num2) {
    return -1;
  } else {
    return 0;
  }
};

const num1Field = document.querySelector(".compare-num1-field");
const num2Field = document.querySelector(".compare-num2-field");
const comparisonResultField = document.querySelector(".compare-result-field");
const compareBtn = document.querySelector(".compare-btn");
const compareErrorLabel = document.querySelector(".compare-error-label");

compareBtn.addEventListener("click", () => {
  const num1 = num1Field.value;
  const num2 = num2Field.value;
  if (isValidNumber(num1) && isValidNumber(num2)) {
    compareErrorLabel.innerHTML = "";
    comparisonResultField.value =
      compareNums(Number(num1), Number(num2)) === 0
        ? "Equal"
        : compareNums(Number(num1), Number(num2)) === 1
        ? `${num1} > ${num2}`
        : `${num2} > ${num1}`;
  } else {
    compareErrorLabel.innerHTML = "Enter a valid number";
    comparisonResultField.value = "";
  }
});

//FACTORIAL
const factorial = (number) => {
  for (let i = 2, j = number; i < j; i++) {
    number *= i;
  }
  return number;
};

const factorialNumField = document.querySelector(".factorial-num-field");
const factorialResultField = document.querySelector(".factorial-result-field");
const calcFactorialBtn = document.querySelector(".calc-factorial-btn");
const factorialErrorLabel = document.querySelector(".factorial-error-label");

calcFactorialBtn.addEventListener("click", () => {
  const num = factorialNumField.value;
  if (isValidPositiveNumber(num)) {
    factorialErrorLabel.innerHTML = "";
    factorialResultField.value = factorial(parseInt(num));
  } else {
    factorialErrorLabel.innerHTML = "Enter a valid number";
    factorialResultField.value = "";
  }
});

//MAKE NUMBER OUT OF SEPARATE DIGITS
const makeNumberFromDigits = (digits) => {
  let result = "";
  digits.forEach((digit) => {
    result += digit;
  });
  return result;
};

const isWrongDigit = (digit, index) => {
  if (index === 0 && +digit === 0) return true;
  return (
    digit === null || !isValidNumber(digit) || digit.length > 1 || digit < 0
  );
};

function getDigits() {
  let digits = [];
  for (let i = 0; i < 3; i++) {
    digits.push(prompt("Enter a digit"));
    if (isWrongDigit(digits[i], i)) return -1;
    digits[i] += "";
  }
  return digits;
}

const makeNumberBtn = document.querySelector(".make-num-btn");
const makeNumberResultField = document.querySelector(
  ".make-number-result-field"
);
const makeNumErrorLabel = document.querySelector(".make-num-error-label");

makeNumberBtn.addEventListener("click", () => {
  const digits = getDigits();
  if (digits !== -1) {
    makeNumErrorLabel.innerHTML = "";
    makeNumberResultField.value = makeNumberFromDigits(digits);
  } else {
    makeNumErrorLabel.innerHTML = "Enter a valid digit";
    makeNumberResultField.value = "";
  }
});

//AREA OF A RECTANGLE
const calculateRectangleArea = (side1, side2) => {
  if (!side2) {
    return side1 * side1;
  } else {
    return side1 * side2;
  }
};

const widthField = document.querySelector(".width-field");
const lengthField = document.querySelector(".length-field");
const areaResultField = document.querySelector(".area-result-field");
const areaErrorLabel = document.querySelector(".area-error-label");
const areaBtn = document.querySelector(".area-btn");

areaBtn.addEventListener("click", () => {
  const width = widthField.value;
  const length = lengthField.value;

  if (isValidNumber(width) && isValidNumber(length)) {
    if (+width === 0 && +length === 0) {
      areaErrorLabel.innerHTML = "Both width and length cannot be 0";
      areaResultField.value = "";
    } else {
      areaErrorLabel.innerHTML = "";
      areaResultField.value =
        width > 0
          ? calculateRectangleArea(+width, +length)
          : calculateRectangleArea(+length, +width);
    }
  } else {
    areaErrorLabel.innerHTML = "The fields cannot be empty";
    areaResultField.value = "";
  }
});

//CHECK IF NUMBER IS PERFECT
const getDivisors = (num) => {
  let divisors = [];

  for (let i = Math.floor(num / 2); i >= 1; i--) {
    if (num % i === 0) divisors.push(i);
  }

  return divisors;
};

const isNumberPerfect = (num) => {
  const divisors = getDivisors(num);
  let sum = 0;
  divisors.forEach((divisor) => {
    sum += divisor;
  });

  return +num === sum;
};

const perfectNumField = document.querySelector(".perfect-num-field");
const perfectNumBtn = document.querySelector(".perfect-num-btn");
const perfectNumResultField = document.querySelector(
  ".perfect-num-result-field"
);
const perfectNumErrorLabel = document.querySelector(".perfect-num-error-label");

perfectNumBtn.addEventListener("click", () => {
  const num = perfectNumField.value;
  if (isValidNumber(num) && +num > 0) {
    perfectNumResultField.value = isNumberPerfect(+num) ? "It is!" : "Nope";
  } else {
    perfectNumResultField = "";
    perfectNumErrorLabel.innerHTML = "Enter a valid number";
  }
});

//FIND PERFECT NUMBERS IN A RANGE
const getPerfectNumsFromRange = (min, max) => {
  let perfectNums = [];
  for (let i = min; i <= max; i++) {
    console.log(i);
    if (isNumberPerfect(i)) {
      perfectNums.push(i);
    }
  }

  return perfectNums.length > 0 ? perfectNums : -1;
};

const minField = document.querySelector(".min-num-field");
const maxField = document.querySelector(".max-num-field");
const perfectRangeResultField = document.querySelector(
  ".perfect-range-result-field"
);
const perfectRangeBtn = document.querySelector(".perfect-range-btn");
const perfectRangeErrorLabel = document.querySelector(
  ".perfect-range-error-label"
);

perfectRangeBtn.addEventListener("click", () => {
  const min = minField.value;
  const max = maxField.value;
  if (isValidPositiveNumber(min) && isValidPositiveNumber(max) && +max > +min) {
    let perfectNumsInRange = getPerfectNumsFromRange(Number(min), Number(max));

    perfectRangeResultField.value =
      perfectNumsInRange !== -1
        ? perfectNumsInRange
        : "There are no perfect numbers in this range";
    perfectRangeErrorLabel.innerHTML = "";
  } else {
    perfectRangeResultField.value = "";
    perfectRangeErrorLabel.innerHTML = "Enter valid numbers";
  }
});

//FORMAT TIME

const formatTime = (hours, minutes, seconds) => {
  if (!seconds) seconds = "00";
  return `${hours}:${minutes}:${seconds}`;
};

const areValidHours = (hours) => {
  return (
    isValidNumber(hours) &&
    hours % 1 === 0 &&
    hours <= 24 &&
    hours >= 0 &&
    hours.length === 2
  );
};

const areValidMinutes = (mins) => {
  return (
    isValidNumber(mins) &&
    mins % 1 === 0 &&
    mins <= 60 &&
    mins >= 0 &&
    mins.length === 2
  );
};

const areValidSeconds = (seconds) => {
  if (seconds) {
    return (
      isValidNumber(seconds) &&
      seconds % 1 === 0 &&
      seconds <= 60 &&
      seconds >= 0 &&
      seconds.length === 2
    );
  } else {
    return true;
  }
};

const hoursField = document.querySelector(".hours-field");
const minsField = document.querySelector(".minutes-field");
const secondsField = document.querySelector(".seconds-field");
const formatResultField = document.querySelector(".format-time-result-field");
const formatBtn = document.querySelector(".format-time-btn");
const formatErrorLabel = document.querySelector(".format-time-error-label");

formatBtn.addEventListener("click", () => {
  const hours = hoursField.value;
  const minutes = minsField.value;
  const seconds = secondsField.value;

  if (
    areValidHours(hours) &&
    areValidMinutes(minutes) &&
    areValidSeconds(seconds)
  ) {
    formatErrorLabel.innerHTML = "";
    formatResultField.value = formatTime(hours, minutes, seconds);
  } else {
    formatErrorLabel.innerHTML =
      "Enter valid time; Hours and minutes cannot be empty";
    formatResultField.value = "";
  }
});
