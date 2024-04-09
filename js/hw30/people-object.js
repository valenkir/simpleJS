const person = {
  name: "",
  age: 0,
  greeting() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old. Nice to meet you!`;
  },
};

const joye = { ...person, name: "Joye", age: 20 };
const rachel = { ...person, name: "Rachel", age: 25 };

const joyeGreetingField = document.querySelector(".joye-info-field");
const rachelGreetingField = document.querySelector(".rachel-info-field");
const sayHelloBtn = document.querySelector(".say-hello-btn");

sayHelloBtn.addEventListener("click", () => {
  joyeGreetingField.value = joye.greeting();
  rachelGreetingField.value = rachel.greeting();
});
