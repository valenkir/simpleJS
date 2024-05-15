import { Book } from "./books.js";
import { Clothing } from "./clothing.js";
import { ProductCard } from "./productCard.js";
import { Electronics } from "./electronics.js";

const bookObj1 = [
  {
    price: 10,
    type: "book",
    name: "Test Book 1",
    description: "Some test description. Quite short indeed.",
    snippet: "Test Book 1 cover",
    isAvailable: true,
    imgUrl: "../../assets/images/book.jpg",
  },
  {
    author: "Test Author1",
    publisher: "Test Publisher 1",
    pages: 250,
    langauge: "English",
    publicationDate: "2024-02-10",
  },
];

const bookObj2 = [
  {
    price: 15,
    type: "book",
    name: "The Two Towers",
    description: "The perfect book.",
    snippet: "Test Book 2 cover",
    isAvailable: true,
    imgUrl: "../../assets/images/book2.jpg",
  },
  {
    author: "J.R.R. Tolkien",
    publisher: "Test Publisher 1",
    pages: 250,
    langauge: "English",
    publicationDate: "2023-10-12",
  },
];

const clothingObj1 = [
  {
    price: 37.5,
    type: "clothing",
    name: "T-shirt",
    snippet: "T-shirt image",
    description: "Perfect for the summer",
    isAvailable: true,
    imgUrl: "../../assets/images/t-shirt.jpg",
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

const electronicsObj1 = [
  {
    price: 37.5,
    type: "electronics",
    name: "laptop",
    snippet: "Cool laptop",
    description: "Perfect for work",
    isAvailable: true,
    imgUrl: "../../assets/images/laptop.jpg",
  },
  {
    rate: 4,
    manufacturer: "TestBrand2",
  },
];

const book1 = new Book(bookObj1[0], bookObj1[1]);
const book2 = new Book(bookObj2[0], bookObj2[1]);
const clothing1 = new Clothing(clothingObj1[0], clothingObj1[1]);
const device1 = new Electronics(electronicsObj1[0], electronicsObj1[1]);
const bookProductCard = new ProductCard([book1, book2], ".book-card");
const clothingProductCard = new ProductCard([clothing1], ".clothing-card");
const deviceProductCard = new ProductCard([device1], ".electronics-card");

console.log(clothing1);

clothing1.addColorToSize("S", "purple");
console.log(clothing1);
clothing1.addSize({ size: "XS", colors: ["black", "white"] });
console.log(clothing1);
clothing1.removeSize("XS");
console.log(clothing1.getSizes());
console.log(clothing1);

$(() => {
  bookProductCard.renderCard();
  clothingProductCard.renderCard();
  deviceProductCard.renderCard();
});
