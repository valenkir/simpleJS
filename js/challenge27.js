import {
  isValidNumber,
  isNotEmptyString,
  isValidPositiveNumber,
} from "./validation.js";

//for any number of chars in a string (hopefully)
function findIdenticalChars(str) {
  let identicalChars = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str.charAt(i) === str.charAt(j)) {
        identicalChars.push(str.charAt(j));
      }
    }
  }
  return identicalChars;
}

function isNumberOfDigitsCorrect(numberOfDigits, numberToCheck) {
  numberToCheck += "";
  return numberToCheck.trim().length === numberOfDigits ? true : false;
}

//3 DIGITS
const digitsBtn = document.querySelector(".check-digits-btn");
const digitsField = document.querySelector(".digits-field");

digitsBtn.addEventListener("click", () => {
  let numberToCheck = prompt("Enter a 3-digit number:");
  if (
    numberToCheck !== null &&
    isValidNumber(numberToCheck) &&
    isNumberOfDigitsCorrect(3, numberToCheck)
  ) {
    numberToCheck = Math.abs(numberToCheck) + "";

    //remove the duplicated values
    const containsIdenticalDigits = new Set(findIdenticalChars(numberToCheck));
    if (containsIdenticalDigits.size) {
      digitsField.value = `Contains identical digits: ${[
        ...containsIdenticalDigits,
      ]}`;
    } else {
      digitsField.value = "No identical digits";
    }
  } else {
    digitsField.value = "Enter a 3-digit number";
  }
});

//PALINDROME
const palindromeBtn = document.querySelector(".check-palindrome-btn");
const palindromeField = document.querySelector(".palindrome-field");

palindromeBtn.addEventListener("click", () => {
  let numberToCheck = prompt("Enter a 5-digit number:");

  if (
    numberToCheck !== null &&
    isValidNumber(numberToCheck) &&
    isNumberOfDigitsCorrect(5, numberToCheck)
  ) {
    numberToCheck = Math.abs(numberToCheck) + "";

    if (
      numberToCheck.charAt(0) === numberToCheck.charAt(4) &&
      numberToCheck.charAt(1) === numberToCheck.charAt(3)
    ) {
      palindromeField.value = "The number is a palindrome";
    } else {
      palindromeField.value = "The number is not a palindrome";
    }
  } else {
    palindromeField.value = "Enter a 5-digit number";
  }
});

//CURRENCY CONVERTER
const amountField = document.querySelector(".currency-amount-field");
const currencyDropDown = document.querySelector(".choose-currency-dropdown");
const converterBtn = document.querySelector(".converter-btn");
const converterResultField = document.querySelector(".converter-result-field");
const errorLabel = document.querySelector(".converter-error-label");

const rates = {
  EUR: 0.92,
  UAH: 39.13,
  BGN: 1.81,
};

converterBtn.addEventListener("click", () => {
  const amount = amountField.value;

  if (isValidPositiveNumber(amount)) {
    const selectedCurrency =
      currencyDropDown.options[currencyDropDown.selectedIndex].text;
    for (const currency in rates) {
      if (currency === selectedCurrency)
        converterResultField.value = `${+amount * rates[currency]} (rate: ${
          rates[currency]
        })`;
    }
    errorLabel.innerHTML = "";
  } else {
    errorLabel.innerHTML = "Enter a valid number";
    converterResultField.value = "";
  }
});

//CIRCLE INSCRIBED IN SQUARE
const circumferenceField = document.querySelector(".circumference-field");
const perimeterField = document.querySelector(".perimeter-field");
const checkInscribedCircleBtn = document.querySelector(
  ".check-inscribed-circle-btn"
);
const inscribedCircleResultField = document.querySelector(
  ".inscribed-circe-result-field"
);
const errorLabelInscribedCircle = document.querySelector(
  ".inscribed-circle-error-label"
);

checkInscribedCircleBtn.addEventListener("click", () => {
  const circumference = circumferenceField.value;
  const perimeter = perimeterField.value;
  const pi = 3.14;
  if (
    isValidPositiveNumber(circumference) &&
    isValidPositiveNumber(perimeter)
  ) {
    const sideLength = +perimeter / 4;
    const diameter = +circumference / pi;
    inscribedCircleResultField.value =
      sideLength === diameter
        ? "Circle is inscribed in square"
        : "Circle is not inscribed in square";
    errorLabelInscribedCircle.innerHTML = "";
  } else {
    errorLabelInscribedCircle.innerHTML = "Enter a valid number";
    inscribedCircleResultField.value = "";
  }
});

//EMAIL VALIDATION
const emailField = document.querySelector(".email-field");
const emailErrorLabel = document.querySelector(".email-error-label");
const emailSubmitBtn = document.querySelector(".email-submit-btn");

emailSubmitBtn.addEventListener("click", () => {
  const email = emailField.value;
  if (isNotEmptyString(email)) {
    if (email.length > 20 || !email.includes("@")) {
      emailErrorLabel.innerHTML =
        "The email should include @ and the number of characters should be <20";
    }
  } else {
    emailErrorLabel.innerHTML = "The email should not be empty";
  }
});
