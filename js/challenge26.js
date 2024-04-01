function isValidNumber(promptNumber) {
  return (
    !isNaN(promptNumber) && Math.sign(promptNumber > 0) && promptNumber !== null
  );
}

//CONVERTER
const converterBtn = document.querySelector(".converter-btn");
const converterResultField = document.querySelector(".converter-result-field");

converterBtn.addEventListener("click", () => {
  const rate = 0.93;
  const usdAmount = prompt("From (USD amount):", 10);
  if (isValidNumber(usdAmount)) {
    converterResultField.value = `${
      Math.round(usdAmount * rate * 100) / 100
    } EUR`;
  } else {
    converterResultField.value = "";
  }
});

//FLASH DRIVE MEMORY
const memoryCalcBtn = document.querySelector(".memory-calc-btn");
const memoryCalcField = document.querySelector(".memory-calc-field");

memoryCalcBtn.addEventListener("click", () => {
  const fileSize = 820;
  const memory = prompt("Enter the memory volume (GB):", 2);
  if (isValidNumber(memory)) {
    memoryCalcField.value = `${Math.floor((memory * 1000) / fileSize)}`;
  } else {
    memoryCalcField.value = "";
  }
});

//CHOCOLATE BARS
const chocolateCalcBtn = document.querySelector(".choco-calc-btn");
const chocolateField = document.querySelector(".choco-calc-field");
const changeField = document.querySelector(".change-calc-field");

chocolateCalcBtn.addEventListener("click", () => {
  const chocoPrice = prompt("Enter the price of 1 chocolate bar, $:", 2.5);
  const money = prompt("Enter your cash amount, $:", 20);
  if (isValidNumber(chocoPrice) && isValidNumber(money)) {
    const numberOfChocoBars = Math.floor(money / chocoPrice);
    if (numberOfChocoBars > 0) {
      const changeAmount = money % chocoPrice;
      chocolateField.value = numberOfChocoBars;
      changeField.value = `${changeAmount}$`;
    } else {
      chocolateField.value = "You cannot afford a chocolate bar =(";
    }
  } else {
    chocolateField.value = "";
    changeField.value = "";
  }
});

//DEPOSIT
const interestCalcBtn = document.querySelector(".interest-calc-btn");
const interestField = document.querySelector(".interest-calc-field");

interestCalcBtn.addEventListener("click", () => {
  const principalAmount = prompt("Enter your deposit principal, $:", 1000);
  const rate = 0.05;
  //2 month in years
  const period = 0.166;

  if (isValidNumber(principalAmount)) {
    const interest = principalAmount * rate * period;
    interestField.value = interest;
  } else {
    interestField.value = "";
  }
});
