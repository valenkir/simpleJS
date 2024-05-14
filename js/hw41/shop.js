import { Book } from "./books.js";
import { Clothing } from "./clothing.js";

const bookObj1 = [
  {
    price: 10,
    type: "book",
    name: "Test Book 1",
    description: "Some test description. Quite short indeed.",
    isAvailable: true,
    imgUrl: "",
  },
  {
    author: "Test Author1",
    publisher: "Test Publisher 1",
    pages: 250,
    langauge: "English",
    publicationDate: "2024-02-10",
  },
];

const clothingObj1 = [
  {
    price: 37.5,
    type: "clothing",
    name: "T-shirt",
    description: "Perfect for the summer",
    isAvailable: true,
    imgUrl: "",
  },
  {
    origin: "Italy",
    brand: "TestBrand1",
    fabric: "100% cotton",
    colorSizeInfo: [
      {
        size: "S",
        colors: ["red", "white", "blue"],
      },
      {
        size: "M",
        colors: ["white", "blue"],
      },
      {
        size: "L",
        colors: ["red", "white", "blue", "green"],
      },
    ],
  },
];

const book1 = new Book(bookObj1[0], bookObj1[1]);
const clothing1 = new Clothing(clothingObj1[0], clothingObj1[1]);

console.log(book1);
console.log(clothing1);

clothing1.addColorToSize("S", "purple");
console.log(clothing1);
clothing1.addSize({ size: "XS", colors: ["black", "white"] });
console.log(clothing1);
clothing1.removeSize("XS");
console.log(clothing1.getSizes());
console.log(clothing1);
