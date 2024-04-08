import {
  isValidPositiveNumber,
  isNotEmptyString,
  isValidNumber,
} from "../validation.js";

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

//CAR OBJECT
const car = {
  manufecturer: "Toyota",
  model: "bZ4X",
  yearOfRelease: 2024,
  averageSpeed: 65,
  info() {
    return `Manufecturer: ${this.manufecturer} \nModel: ${this.model} \nYear of release: ${this.yearOfRelease} \nAverage speed: ${this.averageSpeed}`;
  },
  timeToDestination(distance) {
    const timeWithoutRestInHours = distance / this.averageSpeed;
    const time = {};
    if (timeWithoutRestInHours / 4 > 1) {
      const timeWithoutRestInSeconds = timeWithoutRestInHours * 3600;
      const restHoursInSeconds = Math.round(
        (timeWithoutRestInHours / 4) * 3600
      );
      const timeInSeconds = timeWithoutRestInSeconds + restHoursInSeconds;
      time.hours = Math.trunc(timeInSeconds / 3600);
      time.minutes = Math.round((timeInSeconds - time.hours * 3600) / 60);
      return time;
    } else {
      time.hours = Math.trunc(timeWithoutRestInHours);
      time.minutes = Math.round(
        (timeWithoutRestInHours * 3600 - time.hours * 3600) / 60
      );
      return time;
    }
  },
};

const carInfoField = document.querySelector(".car-info-field");
const carInfoBtn = document.querySelector(".car-info-btn");
const distanceField = document.querySelector(".distance-field");
const timeResultField = document.querySelector(".time-field");
const calcTimeBtn = document.querySelector(".time-btn");
const distanceErrorLabel = document.querySelector(".distance-error-label");

carInfoBtn.addEventListener("click", () => {
  carInfoField.value = car.info();
});

calcTimeBtn.addEventListener("click", () => {
  const distance = distanceField.value;
  if (isValidPositiveNumber(distance)) {
    const time = car.timeToDestination(distance);
    timeResultField.value = `Covered in ${time.hours} hour(s) and ${time.minutes} minute(s)`;
    distanceErrorLabel.innerHTML = "";
  } else {
    timeResultField.value = "";
    distanceErrorLabel.innerHTML = "Enter a valid distance (> 0)";
  }
});
