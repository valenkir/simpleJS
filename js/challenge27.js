function isValidNumber(promptNumber) {
  return !isNaN(promptNumber) && promptNumber !== null;
}

function isValidAge(promptNumber) {
  return isValidNumber(promptNumber) && Math.sign(promptNumber) > 0;
}

function isValidString(promptString) {
  return promptString && promptString.trim();
}

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
  if (identicalChars.length) {
    return identicalChars;
  } else {
    return false;
  }
}

//3 DIGITS
const digitsBtn = document.querySelector(".check-digits-btn");
const digitsField = document.querySelector(".digits-field");

digitsBtn.addEventListener("click", () => {
  let numberToCheck = prompt("Enter a 3-digit number:");
  if (isValidNumber(numberToCheck) && !Math.trunc(numberToCheck / 1000)) {
    if (numberToCheck % 1 !== 0) {
      numberToCheck = Math.trunc(Number(numberToCheck));
    }
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

  //division by 100000 doesn't seem like a proper way to do it
  if (isValidNumber(numberToCheck) && !Math.trunc(numberToCheck / 100000)) {
    numberToCheck = Math.trunc(Number(numberToCheck));
    numberToCheck = Math.abs(numberToCheck) + "";

    //TODO: write a function for any number of digits
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

//
