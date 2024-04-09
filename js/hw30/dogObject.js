//DOG OBJECTS

let dogId = 1;

const johnTheDog = {
  id: dogId,
  name: "John",
  ageInYears: 13,
  address: "Kyiv",
};

const ivanTheDog = {
  name: "Ivan",
  id: ++dogId,
  ageInYears: 0.5,
  address: "Sofia",
};

const teddyTheDog = {
  name: "Teddy",
  id: ++dogId,
  ageInYears: 2,
  address: "Poltava",
};

const roccoTheDog = {
  name: "Rocco",
  id: ++dogId,
  ageInYears: 5,
  address: "Kharkiv",
};

const sparkyTheDog = {
  name: "Sparky",
  id: ++dogId,
  ageInYears: 7.5,
  address: "Kharkiv",
};

const dogs = [sparkyTheDog, roccoTheDog, teddyTheDog, ivanTheDog, johnTheDog];

const showDogInfo = (dogs) => {
  let info = "";
  dogs.forEach((dog) => {
    info += `Name: ${dog.name} \nAge: ${dog.ageInYears} year(s) \nId: ${dog.id} \n`;
  });
  return info;
};

const defineOldestDog = (dogs) => {
  debugger;
  let oldestDog = { ...dogs[0] };

  dogs.forEach((dog, index) => {
    if (index !== dogs.length - 1) {
      if (oldestDog.ageInYears < dogs[index + 1].ageInYears) {
        oldestDog = { ...dogs[index + 1] };
      }
    }
  });
  return oldestDog.name;
};

const dogInfoField = document.querySelector(".dog-info-field");
const dogInfoBtn = document.querySelector(".dog-info-btn");
const oldestDogField = document.querySelector(".oldest-dog");

dogInfoBtn.addEventListener("click", () => {
  dogInfoField.value = showDogInfo(dogs);
  oldestDogField.value = defineOldestDog(dogs);
});

Object.seal(roccoTheDog); //existing properties cannot be deleted
Object.freeze(ivanTheDog); //the object cannot be changed
