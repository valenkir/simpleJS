//price, type, name, isAvailable, description, imgURL, snippet

export class Product {
  constructor(productInfo) {
    for (let key in productInfo) {
      this[key] = productInfo[key];
    }
  }

  getPrice() {
    return this.sale > 0 ? this.price - this.price * this.sale : this.price;
  }

  setSales(sale) {
    this.sale = sale / 100;
  }
}
