import { isValidNumber } from "../validation.js";

const areValidHours = (hours) => {
  return !isNaN(hours) && hours % 1 === 0 && hours <= 23;
};

const areValidMinutesAndSeconds = (units) => {
  return !isNaN(units) && units % 1 === 0 && units <= 60;
};

//INTIAL TIME
const hoursField = document.querySelector(".hours-field");
const minsField = document.querySelector(".minutes-field");
const secondsField = document.querySelector(".seconds-field");
const formatResultField = document.querySelector(".format-time-result-field");
const setInitTimeBtn = document.querySelector(".set-initial-time-btn");
const formatErrorLabel = document.querySelector(".format-time-error-label");

//CHANGE TIME
const changeTimeOptions = document.querySelector(".change-time-select");
const changeTimeField = document.querySelector(".change-time-field");
const changeTimeBtn = document.querySelector(".change-time-btn");
const changeTimeErrorLabel = document.querySelector(".change-time-error-label");

const timeObj = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  convertTimObjToSeconds() {
    return (
      Number(this.hours) * 3600 +
      Number(this.minutes) * 60 +
      Number(this.seconds)
    );
  },
  formatTime() {
    const h = this.convertNumbersToTimeFormat(this.hours);
    const m = this.convertNumbersToTimeFormat(this.minutes);
    const s = this.convertNumbersToTimeFormat(this.seconds);
    return `${h}:${m}:${s}`;
  },
  convertNumbersToTimeFormat(timeUnits) {
    timeUnits += "";
    return timeUnits.length === 2
      ? timeUnits
      : timeUnits === ""
      ? "00"
      : (timeUnits = `0${timeUnits}`);
  },
  recalculateDaysToOne(timeInSeconds) {
    const dayInSeconds = 24 * 3600;
    const days = Math.floor(timeInSeconds / dayInSeconds);
    return timeInSeconds - days * dayInSeconds;
  },
  convertSecondsToTime(timeInSeconds) {
    if (parseInt(timeInSeconds) !== 0) {
      let interValue = timeInSeconds / 3600;
      if (interValue % 1 === 0) {
        this.hours = interValue;
      } else {
        this.hours = Math.trunc(interValue);
        interValue = timeInSeconds - this.hours * 3600;
        interValue = interValue / 60;
        if (interValue % 1 === 0) {
          this.minutes = interValue;
        } else {
          this.minutes = Math.trunc(interValue);
          this.seconds =
            timeInSeconds - (this.hours * 3600 + this.minutes * 60);
        }
      }
    }
  },
  addTime(change, units) {
    const initialTime = this.convertTimObjToSeconds();
    switch (units.toLowerCase()) {
      case "hours":
        change *= 3600;
        break;
      case "minutes":
        change *= 60;
        break;
    }
    let totalTimeInSeconds = initialTime + change;
    //if total time > 24 hours, subtract the number of days from it and show only remaining hours
    if (Math.trunc(totalTimeInSeconds / 3600) >= 24)
      totalTimeInSeconds = this.recalculateDaysToOne(totalTimeInSeconds);
    this.convertSecondsToTime(totalTimeInSeconds);
  },
};

const resetForm = () => {
  formatResultField.value = "";
  hoursField.value = "";
  minsField.value = "";
  secondsField.value = "";
};

setInitTimeBtn.addEventListener("click", () => {
  timeObj.hours = hoursField.value;
  timeObj.minutes = minsField.value;
  timeObj.seconds = secondsField.value;

  if (
    areValidHours(timeObj.hours) &&
    areValidMinutesAndSeconds(timeObj.minutes) &&
    areValidMinutesAndSeconds(timeObj.seconds)
  ) {
    formatErrorLabel.innerHTML = "";
    formatResultField.value = timeObj.formatTime();
  } else {
    timeObj.hours = 0;
    timeObj.minutes = 0;
    timeObj.seconds = 0;
    formatErrorLabel.innerHTML = "Enter valid time";
    resetForm();
  }
});

changeTimeBtn.addEventListener("click", () => {
  const changeTimeByOption =
    changeTimeOptions.options[changeTimeOptions.selectedIndex].text;
  const timeToChange = changeTimeField.value;

  if (isValidNumber(timeToChange)) {
    changeTimeErrorLabel.innerHTML = "";
    timeObj.addTime(+timeToChange, changeTimeByOption);
    formatResultField.value = timeObj.formatTime();
  } else {
    changeTimeErrorLabel.innerHTML = "Enter a valid number";
  }
});
