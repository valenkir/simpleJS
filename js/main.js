function isValidNumber(promptNumber) {
  return !isNaN(promptNumber) && Math.sign(promptNumber > 0);
}

//USERNAME
const getUsernameBtn = document.querySelector(".get-username-btn");
const displayUsernameField = document.querySelector(".set-username-field");

getUsernameBtn.addEventListener("click", () => {
  let username = prompt("Enter your username:", "anonymous");
  if (username !== null) {
    username = username.trim();
    if (username) {
      displayUsernameField.value = username;
      displayUsernameField.classList.remove("text-bg-warning");
    } else {
      displayUsernameField.value = "The username must not be empty";
      displayUsernameField.classList.add("text-bg-warning");
    }
  } else {
    displayUsernameField.classList.remove("text-bg-warning");
    displayUsernameField.value = "Click the button";
  }
});

//AGE
const getBirthYearBtn = document.querySelector(".get-birth-year-btn");
const displayAgeField = document.querySelector(".set-age");

getBirthYearBtn.addEventListener("click", () => {
  const currentYear = 2024;
  let birthYear = prompt("Enter your year of birth:", 1990);
  if (birthYear !== null) {
    birthYear = Math.trunc(Number(birthYear));
    if (isValidNumber(birthYear) && birthYear >= 1900 && birthYear < 2025) {
      displayAgeField.value = currentYear - birthYear;
      displayAgeField.classList.remove("text-bg-warning");
    } else {
      displayAgeField.value = "The birth year must be a valid number";
      displayAgeField.classList.add("text-bg-warning");
    }
  } else {
    displayAgeField.classList.remove("text-bg-warning");
    displayAgeField.value = "Click the button";
  }
});

//SQUARE
const getSquareSideLengthBtn = document.querySelector(".get-length-btn");
const displayPerimeterContainer = document.querySelector(".square-container");

getSquareSideLengthBtn.addEventListener("click", () => {
  let sideLength = prompt("Enter the length of the side:", 4);
  if (sideLength !== null) {
    if (isValidNumber(sideLength)) {
      displayPerimeterContainer.innerHTML = `Perimeter: ${
        Number(sideLength) * 4
      }`;
    } else {
      displayPerimeterContainer.innerHTML = "";
      alert("The side length must be a positive number");
    }
  }
});

//CIRCLE
const getCircleRadiusBtn = document.querySelector(".get-radius-btn");
const displayAreaContainer = document.querySelector(".circle-container");

getCircleRadiusBtn.addEventListener("click", () => {
  let radius = prompt("Enter the radius:", 4);
  if (radius !== null) {
    if (isValidNumber(radius)) {
      displayAreaContainer.innerHTML = `Area: ${Math.round(
        Math.PI * Number(radius) * Number(radius)
      )}`;
    } else {
      displayAreaContainer.innerHTML = "";
      alert("The side length must be a positive number");
    }
  }
});

//SPEED
const getSpeedCalcDataBtn = document.querySelector(".get-speed-calc-data-btn");
const displaySpeedLabel = document.querySelector(".speed-label");

getSpeedCalcDataBtn.addEventListener("click", () => {
  let distance = prompt("Enter the distance (km):", 4);
  let time = prompt("Enter the time (hours):", 2);
  if (distance !== null && time !== null) {
    if (isValidNumber(distance) && isValidNumber(time)) {
      displaySpeedLabel.innerHTML = `Speed: ${Math.round(distance / time)} KPH`;
      displaySpeedLabel.classList.remove("text-danger");
    } else {
      displaySpeedLabel.innerHTML = "Please, enter valid distance and time";
      displaySpeedLabel.classList.add("text-danger");
    }
  }
});

//SPEED
const getUserDataBtn = document.querySelector(".get-user-data-btn");
const userInfoLabel = document.querySelector(".console-userinfo-label");

getUserDataBtn.addEventListener("click", () => {
  let name = prompt("Enter your name:", "John Smith");
  let age = prompt("Enter your age:", 25);
  let country = prompt("Enter your country of birth:", "Ukraine");
  if (name !== null && age !== null && country !== null) {
    if (isValidNumber(age) && name.trim() && country.trim()) {
      console.log(
        `%cUsername: ${name} \n%cAge: ${age} \n%cCountry: ${country}`,
        "color: green;",
        "color: blue",
        "color: orange"
      );
      userInfoLabel.innerHTML = "Open the console!";
      userInfoLabel.classList.remove("text-danger");
      userInfoLabel.classList.add("text-success");
    } else {
      userInfoLabel.innerHTML = "Please, enter valid data";
      userInfoLabel.classList.add("text-danger");
      userInfoLabel.classList.remove("text-success");
    }
  }
});
