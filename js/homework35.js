import { isValidNumber } from "./validation.js";

//"Hello, Promises!" (1)
const helloPromise = () => {
  const promise = new Promise((resolve, reject) => {
    resolve("Hello, Promises!");
  });
  return promise;
};

//Promise resolves after a random delay (2)
let timerDelay = Math.floor(Math.random() * 5 + 1);
timerDelay *= 1000;

const randomDelayTimer = (timerDelay) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(`Promise resolved after ${timerDelay} seconds`),
      timerDelay
    );
  });
  return promise;
};

//Artist name
const artistNameTimer = (name) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(
      () =>
        name !== null && name.trim()
          ? resolve(name)
          : reject("The name cannot be empty"),

      2000
    );
  });
  return promise;
};

//Age
const checkUserAge = (age) => {
  const promise = new Promise((resolve, reject) => {
    if (age !== null && isValidNumber(age) && age >= 0 && age <= 120) {
      resolve("Welcome!");
    } else {
      reject("Invalid age");
    }
  });
  return promise;
};

$(() => {
  //1
  helloPromise().then((text) => {
    const hw35H1 = $("<h1></h1>");
    hw35H1.addClass("h1");
    hw35H1.text(text);
    $(".hw35-main").append(hw35H1);
  });

  //2
  randomDelayTimer(timerDelay).then(() => {
    const delayParagraph = $("<p></p>");
    delayParagraph.addClass("fs-5 mt-5");
    delayParagraph.text(`Promise resolved after ${timerDelay} seconds`);
    $(".hw35-main").append(delayParagraph);
  });

  //3
  const artistName = prompt("Input the artist's name");

  artistNameTimer(artistName)
    .then((result) => {
      const artistParagraph = $("<p></p>");
      artistParagraph.addClass("fs-5 mt-5");
      artistParagraph.text(`Artist name: ${result}`);
      $(".hw35-main").append(artistParagraph);
    })
    .catch((error) => console.log(error));

  //4
  const age = prompt("Enter your age");
  const welcomeSpan = $("<span></span>");
  welcomeSpan.addClass("fs-5 mt-5");
  checkUserAge(age)
    .then((result) => {
      welcomeSpan.text(result);
      $(".hw35-main").append(welcomeSpan);
    })
    .catch((error) => console.log(error));
});
