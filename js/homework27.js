import {
  isValidNumber,
  isNotEmptyString,
  isValidPositiveNumber,
} from "./validation.js";

//CHILDREN
const getChildrenInfoBtn = document.querySelector(".get-children-info-btn");
const showChild1InfoField = document.querySelector(".show-child1-info-field");
const showChild2InfoField = document.querySelector(".show-child2-info-field");
const timLabel = document.querySelector(".tim-label");

getChildrenInfoBtn.addEventListener("click", () => {
  const firstChildName = prompt("What's the name of the 1st child?", "None");
  const firstChildAge = prompt(`What's their age?`);
  const secondChildName = prompt("What's the name of the 2nd child?", "None");
  const secondChildAge = prompt(`What's their age?`);

  if (
    isNotEmptyString(firstChildName) &&
    isNotEmptyString(secondChildName) &&
    firstChildAge !== null &&
    secondChildAge !== null &&
    isValidPositiveNumber(firstChildAge) &&
    isValidPositiveNumber(secondChildAge)
  ) {
    showChild1InfoField.value = `${firstChildName.trim()}, ${firstChildAge}-year-old`;
    showChild2InfoField.value = `${secondChildName.trim()}, ${secondChildAge}-year-old`;
    if (
      Number(firstChildAge) > Number(secondChildAge) &&
      firstChildName.trim().toLowerCase() === "tim"
    ) {
      timLabel.innerHTML = "We've found Tim!";
    } else {
      timLabel.innerHTML = "";
    }
  } else {
    showChild1InfoField.value = "Enter valid name and age";
    showChild2InfoField.value = "Enter valid name and age";
    timLabel.innerHTML = "";
  }
});

//RSA FLAG
const flagColors = ["black", "yellow", "green", "white", "red", "blue"];
const colorField = document.querySelector(".flag-color-input");
const guessColorBtn = document.querySelector(".guess-color-btn");

guessColorBtn.addEventListener("click", () => {
  let guessedColor = prompt("Enter the color");

  if (isNotEmptyString(guessedColor)) {
    guessedColor = guessedColor.trim().toLowerCase();
    if (flagColors.includes(guessedColor)) {
      colorField.value = "Correct!";
      colorField.style.color = guessedColor.toLowerCase();
      if (guessedColor === "yellow" || guessedColor === "white") {
        colorField.style.backgroundColor = "black";
      } else {
        colorField.style.backgroundColor = null;
      }
    } else {
      colorField.value = "Nope, try again!";
      colorField.style.color = "#AE0EA2";
      colorField.style.backgroundColor = null;
    }
  } else {
    colorField.value = "Color field cannot be empty";
    colorField.removeAttribute("style", "color: #AE0EA2");
    colorField.removeAttribute("style", `background-color: black`);
  }
});

//ODD NUMBER
const checkOddNumBtn = document.querySelector(".check-odd-number");
const oddNumResultField = document.querySelector(".odd-number-input");

checkOddNumBtn.addEventListener("click", () => {
  const promptNumber = prompt("Enter a number");
  if (promptNumber !== null && isValidNumber(promptNumber)) {
    if (Math.abs(parseInt(promptNumber)) % 2 === 1) {
      oddNumResultField.value = "The number is odd!";
    } else {
      oddNumResultField.value = "";
    }
  } else {
    oddNumResultField.value = "Enter valid number";
  }
});

//DIVIDE AND ROUND
const getNumbersBtn = document.querySelector(".get-numbers-btn");
const calcResultField = document.querySelector(".calc-result-input");

getNumbersBtn.addEventListener("click", () => {
  const firstNum = prompt("Enter the 1st number");
  const secondNum = prompt("Enter the 2nd number");
  if (firstNum !== null && secondNum !== 0) {
    if (isValidNumber(firstNum) && isValidNumber(secondNum) && secondNum != 0) {
      const calcResult = (Number(firstNum) / Number(secondNum)).toFixed();
      calcResultField.value = calcResult;
    } else {
      calcResultField.value = "Enter valid numbers";
    }
  }
});

//CALCULATE AGE
const getAgeBtn = document.querySelector(".get-age-btn");
const calcAgeField = document.querySelector(".calc-age-input");

getAgeBtn.addEventListener("click", () => {
  const dateOfBirth = prompt("Enter the birth date (YYYY/MM/DD)");
  if (Date.parse(dateOfBirth)) {
    const birthYear = new Date(dateOfBirth).getFullYear();
    const age = new Date().getFullYear() - birthYear;
    if (age >= 0) {
      calcAgeField.value = `${
        age >= 18 ? "You are over 18: " + age : "You are underaged: " + age
      }`;
    } else {
      calcAgeField.value = "The date should be a past date";
    }
  } else {
    calcAgeField.value = "Enter a valid date";
  }
});

//CHECK IF NULL OR UNDEFINED
let nonInitialized;
const isNullField = document.querySelector(".is-null-field");
const isUndefinedField = document.querySelector(".is-undefined-field");

isNullField.value = nonInitialized === null;
isUndefinedField.value = nonInitialized === undefined;

//NUMBER BETWEEN 10 & 50
const getRangeNumberBtn = document.querySelector(".get-number-btn");
const isNumberField = document.querySelector(".is-number-input");
const isInRangeField = document.querySelector(".is-in-range-input");
const errorLabel = document.querySelector(".error-label");

getRangeNumberBtn.addEventListener("click", () => {
  const num = prompt("Enter a number");
  if (num !== null && isValidNumber(num)) {
    isNumberField.value = typeof Number(num);
    isInRangeField.value = num >= 10 && num <= 50;
    errorLabel.innerHTML = "";
    errorLabel.classList.remove("text-danger");
  } else {
    errorLabel.innerHTML = "Enter a valid number";
    errorLabel.classList.add("text-danger");
    isNumberField.value = typeof num;
    isInRangeField.value = "";
  }
});
