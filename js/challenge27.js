function isValidNumber(promptNumber) {
  return !isNaN(promptNumber) && promptNumber !== null;
}

function isValidAge(promptNumber) {
  return isValidNumber(promptNumber) && Math.sign(promptNumber) > 0;
}

function isValidString(promptString) {
  return promptString && promptString.trim();
}

//made it not only for 3-char strings
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
