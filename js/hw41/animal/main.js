import { animalProfile } from "./animalProfile.js";
import { Mammal, Reptile, Bird } from "./animal.js";

const polarBearObj = {
  name: "Polar Bear",
  species: "U. maritimus",
  diet: ["meat"],
  habitat: "Arctic",
  sound: "GROWL",
  states: {
    isHibernating: true,
    isAsleep: false,
  },
};

const cobra = {
  name: "King Cobra",
  species: "O. hannah",
  diet: ["meat"],
  habitat: "South and Southeast Asia",
  sound: "growling hiss",
  states: {
    isAsleep: true,
    isBrumating: false,
  },
};

const canary = {
  name: "Yellow Canary",
  species: "C. flaviventris",
  diet: ["seeds"],
  habitat: "Africa",
  sound: "chirping",
  states: {
    isAsleep: false,
  },
  canFly: true,
};

const polarBear = new Mammal(
  polarBearObj.name,
  polarBearObj.species,
  polarBearObj.diet,
  polarBearObj.habitat,
  polarBearObj.sound,
  polarBearObj.states
);

const kingCobra = new Reptile(
  cobra.name,
  cobra.species,
  cobra.diet,
  cobra.habitat,
  cobra.sound,
  cobra.states
);

const yellowCanary = new Bird(
  canary.name,
  canary.species,
  canary.diet,
  canary.habitat,
  canary.sound,
  canary.states,
  canary.canFly
);

const profiles = new animalProfile(
  [polarBear, kingCobra, yellowCanary],
  ".animal-cards"
);

$(() => {
  profiles.renderAnimals();
});
