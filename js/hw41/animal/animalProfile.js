export class animalProfile {
  constructor(animals, container) {
    this.animals = animals;
    this.container = container;
  }

  renderAnimals() {
    this.animals.forEach((animal) => {
      const card = $("<div class='card'></div>");
      const cardBody = $("<div class='card-body'></div>");
      const name = $("<h5 class='card-title'></h5>");
      const species = $(
        " <h6 class='card-subtitle mb-2 text-body-secondary'></h6>"
      );
      name.text(`${animal.name}`);
      species.text(`${animal.species}`);
      cardBody.append(name, species);
      card.append(cardBody);
      this.#renderAnimalStates(animal.states, cardBody);

      const cardFooter = $("<div class='card-footer'></div>");
      const petBtn = $(
        "<button type='button' class='btn btn-primary'>Pet</button>"
      );
      petBtn.on("click", () => {
        $(".sound-message").text(`${animal.makeSound()}`);
        $(".sound-message").removeClass("d-none");
        setTimeout(() => {
          $(".sound-message").addClass("d-none");
        }, 3000);
      });

      cardFooter.append(petBtn);
      card.append(cardFooter);
      $(this.container).append(card);
    });
  }

  #renderAnimalStates(states, cardBody) {
    const actualStates = [];
    for (let key in states) {
      if (states[key]) {
        actualStates.push(key);
      }
    }
    this.#render(actualStates, cardBody);
  }

  #render(states, cardBody) {
    states.forEach((state) => {
      const stateElem = $("<p class='card-text'></p>");
      switch (state) {
        case "isHibernating":
          stateElem.text(`Hibernating peacefully. Do not disturb.`);
          break;
        case "isBrumating":
          stateElem.text(
            `In a state of brumation. Don't panic. Don't bother your vet.`
          );
          break;
        case "isAsleep":
          stateElem.text(`Sleeping peacefully. Let it have some rest.`);
          break;
      }

      cardBody.append(stateElem);
    });
  }
}
