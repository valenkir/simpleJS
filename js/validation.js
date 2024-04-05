export function isValidNumber(num) {
  return !isNaN(num) && num.trim().length > 0;
}

export function isValidPositiveNumber(positiveNumber) {
  return isValidNumber(positiveNumber) && positiveNumber > 0;
}

export function isNotEmptyString(promptString) {
  return promptString !== null && promptString.trim().length > 0;
}
