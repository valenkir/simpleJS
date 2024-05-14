import { Product } from "./productClass.js";

export class Book extends Product {
  constructor(productInfo, bookInfo) {
    super(productInfo);
    for (let key in bookInfo) {
      this[key] = bookInfo[key];
    }
  }
  //methods are needed only if verification is needed or calculation happens
}
