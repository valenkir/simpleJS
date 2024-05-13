//ANIMAL

function Animal(species, name, sound) {
  this.species = species;
  this.name = name;
  this.sound = sound.replace("!", "");
  this.makeSound = function () {
    return `${this.sound}-${this.sound}-${this.sound}!`;
  };
  this.renderAnimalInfo = function (container) {
    const animalInfo = $("<p class='fs-5 ms-5'></p>");
    animalInfo.text(`This is ${this.name} the ${this.species}.`);
    const soundBtn = $(
      "<button class='btn btn-primary w-25 ms-5'>Sound</button>"
    );
    $(container).append(animalInfo, soundBtn);
    $(soundBtn).on("click", () => {
      alert(this.makeSound());
    });
  };
}

//BOOK
function Book(title, author, pages, isRead = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.renderBookInfo = function (container) {
    const bookInfo = $("<p class='fs-5 ms-5'></p>");
    bookInfo.text(
      `${this.title} by ${this.author} (${pages} pages). ${
        isRead ? "Already read" : "Not read"
      }.`
    );
    const markAsReadBtn = $(
      "<button class='btn btn-primary w-25 ms-5'>Mark as Read</button>"
    );
    if (isRead) {
      markAsReadBtn.prop("disabled", true);
    }
    $(container).append(bookInfo, markAsReadBtn);
    $(markAsReadBtn).on("click", () => {
      bookInfo.text(
        `${this.title} by ${this.author} (${pages} pages). Already read.`
      );
      this.isRead = true;
      markAsReadBtn.prop("disabled", true);
    });
  };
}

const cat = new Animal("cat", "Luna", "meow");
const dog = new Animal("dog", "Bob", "bow-wow");
const book1 = new Book("Test Book 1", "John Test", "252");
const book2 = new Book("Test Book 2", "Lilly Smith", "340", true);

$(() => {
  cat.renderAnimalInfo(".animal");
  dog.renderAnimalInfo(".animal");
  book1.renderBookInfo(".book");
  book2.renderBookInfo(".book");
});
