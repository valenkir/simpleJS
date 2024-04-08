import { isNotEmptyString, isValidNumber } from "../validation.js";

function getGCD(greaterNum, smallerNum) {
  greaterNum = Math.abs(greaterNum);
  smallerNum = Math.abs(smallerNum);
  if (greaterNum % smallerNum === 0) {
    return smallerNum;
  } else {
    for (let i = Math.floor(smallerNum / 2); i >= 1; i--) {
      if (smallerNum % i === 0 && greaterNum % i === 0) return i;
    }
  }
}

function getLCM(num1, num2, gcd) {
  return (num1 * num2) / gcd;
}

//FRACTION OBJECT
const fractions = {
  firstFraction: {
    numerator: 0,
    denominator: 0,
  },

  secondFraction: {
    numerator: 0,
    denominator: 0,
  },
  fractionResult: {
    numerator: 0,
    denominator: 0,
  },
  add(firstFraction, secondFraction) {
    if (firstFraction.denominator === secondFraction.denominator) {
      this.fractionResult.numerator =
        firstFraction.numerator + secondFraction.numerator;
      this.fractionResult.denominator = firstFraction.denominator;
      this.simplify(this.fractionResult);
    } else {
      this.fractionResult.numerator =
        firstFraction.numerator * secondFraction.denominator +
        secondFraction.numerator * firstFraction.denominator;
      this.fractionResult.denominator =
        firstFraction.denominator * secondFraction.denominator;
      this.simplify(this.fractionResult);
    }
  },
  substract(firstFraction, secondFraction) {
    if (firstFraction.denominator === secondFraction.denominator) {
      this.fractionResult.numerator =
        firstFraction.numerator - secondFraction.numerator;

      this.fractionResult.denominator = firstFraction.denominator;
    } else {
      const gcd =
        Math.abs(firstFraction.denominator) >
        Math.abs(secondFraction.denominator)
          ? getGCD(firstFraction.denominator, secondFraction.denominator)
          : getGCD(secondFraction.denominator, firstFraction.denominator);

      const lcm = getLCM(
        firstFraction.denominator,
        secondFraction.denominator,
        gcd
      );
      this.fractionResult.denominator = lcm;
      this.fractionResult.numerator =
        (lcm / firstFraction.denominator) * firstFraction.numerator -
        (lcm / secondFraction.denominator) * secondFraction.numerator;

      this.simplify(this.fractionResult);
    }
  },
  multiply(firstFraction, secondFraction) {
    this.fractionResult.numerator =
      firstFraction.numerator * secondFraction.numerator;
    this.fractionResult.denominator =
      firstFraction.denominator * secondFraction.denominator;
    this.simplify(this.fractionResult);
  },
  divide(firstFraction, secondFraction) {
    const reciprocal = {
      numerator: secondFraction.denominator,
      denominator: secondFraction.numerator,
    };
    this.multiply(firstFraction, reciprocal);
  },

  simplify(fractionObj) {
    if (
      Math.abs(fractionObj.numerator) === 0 ||
      Math.abs(fractionObj.denominator) === 0
    ) {
      fractionObj.numerator = 0;
      fractionObj.denominator = 0;
    } else {
      const gcd =
        Math.abs(fractionObj.numerator) > Math.abs(fractionObj.denominator)
          ? getGCD(fractionObj.numerator, fractionObj.denominator)
          : getGCD(fractionObj.denominator, fractionObj.numerator);

      fractionObj.numerator = fractionObj.numerator / gcd;
      fractionObj.denominator = fractionObj.denominator / gcd;
    }
  },
};

//FIELDS
const firstFractionField = document.querySelector(".fraction1-field");
const secondFractionField = document.querySelector(".fraction2-field");

//LABELS
const numeratorLabel1 = document.querySelector(".fr1-label-numerator");
const denominatorLabel1 = document.querySelector(".fr1-label-denominator");
const numeratorLabel2 = document.querySelector(".fr2-label-numerator");
const denominatorLabel2 = document.querySelector(".fr2-label-denominator");
const fractionsErrorLabel = document.querySelector(".fractions-error-label");
const numeratorResultLabel = document.querySelector(".result-label-numerator");
const denominatorResultLabel = document.querySelector(
  ".result-label-denominator"
);

//BUTTONS
const setFractionBtn = document.querySelector(".set-fraction-btn");
const simplifyBtn = document.querySelector(".simplify-fractions-btn");
const resetFractionBtn = document.querySelector(".reset-fractions-btn");
const addFractionsBtn = document.querySelector(".add-fractions-btn");
const substractFractionsBtn = document.querySelector(
  ".substract-fractions-btn"
);
const multiplyFractionsBtn = document.querySelector(".multiply-fractions-btn");
const divideFractionsBtn = document.querySelector(".divide-fractions-btn");

const resetFractions = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      obj[key].numerator = 0;
      obj[key].denominator = 0;
    }
  }
  numeratorLabel1.innerHTML = "?";
  denominatorLabel1.innerHTML = "?";
  numeratorLabel2.innerHTML = "?";
  denominatorLabel2.innerHTML = "?";
  numeratorResultLabel.innerHTML = "?";
  denominatorResultLabel.innerHTML = "?";
  firstFractionField.value = "";
  secondFractionField.value = "";
  simplifyBtn.disabled = true;
  addFractionsBtn.disabled = true;
  substractFractionsBtn.disabled = true;
  multiplyFractionsBtn.disabled = true;
  divideFractionsBtn.disabled = true;
};

const isValidFraction = (num) => {
  return isValidNumber(num) && Number(num) !== 0;
};

const parseFraction = (fractionStr) => {
  try {
    const fractionArr = fractionStr.split("/");
    if (isValidFraction(fractionArr[0]) && isValidFraction(fractionArr[1])) {
      return fractionArr;
    } else {
      throw "Wrong fraction format";
    }
  } catch (error) {
    return error;
  }
};

setFractionBtn.addEventListener("click", () => {
  const firstFractionInput = firstFractionField.value;
  const secondFractionInput = secondFractionField.value;
  if (
    isNotEmptyString(firstFractionInput) &&
    isNotEmptyString(secondFractionInput)
  ) {
    if (
      parseFraction(firstFractionInput) !== "Wrong fraction format" &&
      parseFraction(secondFractionInput) !== "Wrong fraction format"
    ) {
      fractionsErrorLabel.innerHTML = "";
      const firstParsedFraction = parseFraction(firstFractionInput);
      const secondParsedFraction = parseFraction(secondFractionInput);

      fractions.firstFraction.numerator = Number(firstParsedFraction[0]);
      numeratorLabel1.innerHTML = fractions.firstFraction.numerator;
      fractions.firstFraction.denominator = Number(firstParsedFraction[1]);
      denominatorLabel1.innerHTML = fractions.firstFraction.denominator;

      fractions.secondFraction.numerator = Number(secondParsedFraction[0]);
      numeratorLabel2.innerHTML = fractions.secondFraction.numerator;
      fractions.secondFraction.denominator = Number(secondParsedFraction[1]);
      denominatorLabel2.innerHTML = fractions.secondFraction.denominator;

      simplifyBtn.disabled = false;
      addFractionsBtn.disabled = false;
      multiplyFractionsBtn.disabled = false;
      divideFractionsBtn.disabled = false;
      substractFractionsBtn.disabled = false;
    } else {
      fractionsErrorLabel.innerHTML = "Wrong fraction format";
      firstFractionField.value = "";
      secondFractionField.value = "";
      resetFractions(fractions);
    }
  } else {
    fractionsErrorLabel.innerHTML = "The fraction fields cannot be empty";
    resetFractions(fractions);
  }
});

resetFractionBtn.addEventListener("click", () => {
  resetFractions();
  fractionsErrorLabel.innerHTML = "";
});

simplifyBtn.addEventListener("click", () => {
  fractions.simplify(fractions.firstFraction);
  fractions.simplify(fractions.secondFraction);
  numeratorLabel1.innerHTML = fractions.firstFraction.numerator;
  denominatorLabel1.innerHTML = fractions.firstFraction.denominator;
  numeratorLabel2.innerHTML = fractions.secondFraction.numerator;
  denominatorLabel2.innerHTML = fractions.secondFraction.denominator;
  fractionsErrorLabel.innerHTML = "";
});

addFractionsBtn.addEventListener("click", () => {
  fractions.add(fractions.firstFraction, fractions.secondFraction);
  numeratorResultLabel.innerHTML = fractions.fractionResult.numerator;
  denominatorResultLabel.innerHTML = fractions.fractionResult.denominator;
  fractionsErrorLabel.innerHTML = "";
});

substractFractionsBtn.addEventListener("click", () => {
  fractions.substract(fractions.firstFraction, fractions.secondFraction);
  numeratorResultLabel.innerHTML = fractions.fractionResult.numerator;
  denominatorResultLabel.innerHTML = fractions.fractionResult.denominator;
  fractionsErrorLabel.innerHTML = "";
});

multiplyFractionsBtn.addEventListener("click", () => {
  fractions.multiply(fractions.firstFraction, fractions.secondFraction);
  numeratorResultLabel.innerHTML = fractions.fractionResult.numerator;
  denominatorResultLabel.innerHTML = fractions.fractionResult.denominator;
  fractionsErrorLabel.innerHTML = "";
});

divideFractionsBtn.addEventListener("click", () => {
  fractions.divide(fractions.firstFraction, fractions.secondFraction);
  numeratorResultLabel.innerHTML = fractions.fractionResult.numerator;
  denominatorResultLabel.innerHTML = fractions.fractionResult.denominator;
  fractionsErrorLabel.innerHTML = "";
});
