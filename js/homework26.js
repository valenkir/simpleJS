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
      displayUsernameField.value = `Hello, ${username}`;
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
  const sideLength = prompt("Enter the length of the side:", 4);
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
  const radius = prompt("Enter the radius:", 4);
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
  const distance = prompt("Enter the distance (km):", 4);
  const time = prompt("Enter the time (hours):", 2);
  if (distance !== null && time !== null) {
    if (isValidNumber(distance) && isValidNumber(time)) {
      displaySpeedLabel.innerHTML = `Speed: ${
        Math.round((distance / time) * 100) / 100
      } KPH`;
      displaySpeedLabel.classList.remove("text-danger");
    } else {
      displaySpeedLabel.innerHTML = "Please, enter valid distance and time";
      displaySpeedLabel.classList.add("text-danger");
    }
  }
});

//USER DATA
const getUserDataBtn = document.querySelector(".get-user-data-btn");
const userInfoLabel = document.querySelector(".console-userinfo-label");

getUserDataBtn.addEventListener("click", () => {
  const name = prompt("Enter your name:", "John Smith");
  const age = prompt("Enter your age:", 25);
  const country = prompt("Enter your country of birth:", "Ukraine");
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

//QUESTIONS
const questions = [
  "What's your name?",
  "What's your surname?",
  "Where are you from?",
  "How old are you?",
  "What do you do for a living?",
  "What's your favourite movie?",
  "What's your favourite color?",
  "Which country would you like visit?",
  "Sweets: yes or no?",
  "Sports: yes or no?",
];

let answers = [];

const questionsBtn = document.querySelector(".questions-btn");
const showAnswersBtn = document.querySelector(".show-answers-btn");

questionsBtn.addEventListener("click", () => {
  let answer;
  questions.forEach((question) => {
    answer = prompt(question);
    answers.push(answer);
  });
  if (answers.length) showAnswersBtn.removeAttribute("disabled");
});

showAnswersBtn.addEventListener("click", () => {
  alert(
    `Name: ${answers[0]} 
    \nSurname: ${answers[1]} 
    \nCountry: ${answers[2]} 
    \nAge: ${answers[3]} 
    \nJob: ${answers[4]} 
    \nFavourite movie: ${answers[5]} 
    \nFavourite color: ${answers[6]} 
    \n${answers[0]} would like to visit ${answers[7]} 
    \n${answers[0]} said ${answers[8]} to sweets :) 
    \n${answers[0]} said ${answers[9]} to sports :)`
  );
});

//AGE-2
const getBirthYearBtn2 = document.querySelector(".get-birth-year-btn2");
const ageInfoLabel = document.querySelector(".console-age-label");

getBirthYearBtn2.addEventListener("click", () => {
  let year = prompt("Enter your year of birth:", 1990);

  if (year !== null) {
    year = Math.trunc(Number(year));
    if (isValidNumber(year) && year >= 1930 && year < 2025) {
      console.log(
        `Age in 2025: ${2025 - year} \nAge in 2029: ${
          2029 - year
        } \nAge in 2050: ${2050 - year}`
      );
      ageInfoLabel.innerHTML = "Open the console!";
      ageInfoLabel.classList.remove("text-danger");
      ageInfoLabel.classList.add("text-success");
    } else {
      ageInfoLabel.innerHTML = "Please, enter the valid year";
      ageInfoLabel.classList.add("text-danger");
      ageInfoLabel.classList.remove("text-success");
    }
  }
});
