class Animal {
  constructor(name, species, diet, habitat, sound) {
    this.name = name;
    this.species = species;
    this.diet = diet;
    this.habitat = habitat;
    this.sound = sound;
  }

  makeSound() {
    return `${this.name} is trying to communicate`;
  }

  feed(food) {
    return this.diet.includes(food)
      ? `${this.name} is fed`
      : `You should stick to the ${this.name}'s diet!`;
  }
}

export class Mammal extends Animal {
  //state - object: {isHibernating: true, isAsleep: false}
  constructor(name, species, diet, habitat, sound, states) {
    super(name, species, diet, habitat, sound);
    this.vaccinationInfo = vaccinationInfo;
    this.states = states;
  }

  makeSound(sound = this.sound) {
    return sound !== sound.toUpperCase()
      ? `${this.name}: ${sound}.`
      : `${sound}! 
      You'd better be careful.`;
  }

  wakeUp(sound) {
    if (this.states.isAsleep) {
      this.isAsleep = false;
      this.makeSound(sound.toUpperCase());
    } else if (this.states.isHibernating) {
      return `Don't wake up the hibernating ${this.name}`;
    } else {
      return `${this.name} is not sleeping.`;
    }
  }
}

export class Bird extends Animal {
  constructor(name, species, diet, habitat, sound, states, canFly) {
    super(name, species, diet, habitat, sound);
    this.canFly = canFly;
    this.states = states;
  }

  makeSound(sound = this.sound) {
    return `${this.name}: ${sound}.`;
  }

  wakeUp() {
    if (this.states.isAsleep) {
      this.states.isAsleep = false;
      this.makeSound();
    } else {
      return `${this.name} is not sleeping.`;
    }
  }
}

export class Reptile extends Animal {
  //states: isAsleep, isBrumating
  constructor(name, species, diet, habitat, sound, states, isAquatic) {
    super(name, species, diet, habitat, sound);
    this.isAquatic = isAquatic;
    this.states = states;
  }

  makeSound(sound = this.sound) {
    return sound !== sound.toUpperCase()
      ? `${this.name}: ${sound}.`
      : `${this.name}: ${sound}! 
      You'd better be careful.`;
  }

  wakeUp() {
    if (this.states.isAsleep) {
      this.states.isAsleep = false;
      this.makeSound();
    } else {
      return `${this.name} is not sleeping.`;
    }
  }
}
