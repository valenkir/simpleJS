function isValidNumber(num) {
  return !isNaN(num) && num !== null && num.trim().length > 0;
}

function isEmptyString(promptString) {
  return promptString.length > 0 && promptString.trim();
}
