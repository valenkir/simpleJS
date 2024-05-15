export class ProductCard {
  constructor(products, container) {
    this.products = products;
    this.container = container;
  }

  renderCard() {
    this.products.forEach((product) => {
      const card = $("<div class='card'></div>");
      const imgCover = $(
        `<img src="${product.imgUrl}" class="card-img-top card-img" alt="${product.snippet}"/>`
      );
      const cardBody = $("<div class='card-body'></div>");
      const productName = $("<h5 class='card-title'></h5>");
      const productDescription = $("<p class='card-text'></p>");
      const productPrice = $("<label class='card-text'></label>");
      productName.text(`${product.name}`);
      productDescription.text(`${product.description}`);
      productPrice.text(`${product.price}$`);
      cardBody.append(productName, productDescription, productPrice);
      card.append(imgCover, cardBody);
      this.card = card;
      const bookInfoList = $("<ul class='list-group list-group-flush'></ul>");
      this.list = bookInfoList;
      switch (product.type) {
        case "book":
          this.#renderBookInfo(product);
          break;
        case "clothing":
          this.#renderClothingInfo(product);
          break;
        case "electronics":
          this.#renderElectronics(product);
          break;
      }
      $(this.container).append(card);
    });
  }

  #renderBookInfo(product) {
    const authorItem = $("<li class='list-group-item'></li>");
    const publisherItem = $("<li class='list-group-item'></li>");
    const pagesItem = $("<li class='list-group-item'></li>");
    const languageItem = $("<li class='list-group-item'></li>");
    const publicationDateItem = $("<li class='list-group-item'></li>");
    authorItem.text(`Author: ${product.author}$`);
    publisherItem.text(`Published by: ${product.publisher}`);
    pagesItem.text(`Number of pages: ${product.pages}`);
    languageItem.text(`Language: ${product.langauge}`);
    publicationDateItem.text(`Published: ${product.publicationDate}`);
    this.list.append(
      authorItem,
      publisherItem,
      pagesItem,
      languageItem,
      publicationDateItem
    );
    this.card.append(this.list);
  }

  #renderClothingInfo(product) {
    const fabricItem = $("<li class='list-group-item'></li>");
    const brandItem = $("<li class='list-group-item'></li>");
    const originItem = $("<li class='list-group-item'></li>");
    const colorSizeItems = [];
    fabricItem.text(`Fabric: ${product.fabric}$`);
    brandItem.text(`Brand: ${product.brand}`);
    originItem.text(`Country of origin: ${product.origin}`);
    this.list.append(fabricItem, brandItem, originItem);

    for (let colorSize in product.colorSizeInfo) {
      colorSizeItems.push($("<li class='list-group-item'></li>"));
    }
    colorSizeItems.forEach((item, index) => {
      item.text(
        `${product.colorSizeInfo[index].size}: ${product.colorSizeInfo[
          index
        ].colors.join(", ")}`
      );
      this.list.append(item);
    });
    this.card.append(this.list);
  }

  #renderElectronics(product) {
    const manufacturerItem = $("<li class='list-group-item'></li>");
    const rateItem = $("<li class='list-group-item'></li>");
    manufacturerItem.text(`Manufacturer: ${product.manufacturer}`);
    rateItem.text(`Rate: ${product.rate}/5`);
    this.list.append(manufacturerItem, rateItem);
    this.card.append(this.list);
  }
}
