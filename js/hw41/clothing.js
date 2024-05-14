import { Product } from "./productClass.js";

export class Clothing extends Product {
  constructor(productInfo, clothingInfo) {
    super(productInfo);
    for (let key in clothingInfo) {
      this[key] = clothingInfo[key];
    }
    //colorSizeInfo, origin, brand, fabricType
  }
  /*[{
   size: "S",
   colors: ["red", "white", "blue"],
 }]*/
  #findSize(size) {
    return this.colorSizeInfo.find((obj) => Object.values(obj).includes(size));
  }

  getSizes() {
    const sizes = [];
    this.colorSizeInfo.forEach((elem) => {
      sizes.push(elem.size);
    });
    return sizes;
  }

  addSize(sizeToAdd) {
    if (!this.#findSize(sizeToAdd.size)) {
      this.colorSizeInfo.push(sizeToAdd);
    }
  }

  removeSize(size) {
    let sizeIndex;
    this.colorSizeInfo.forEach((obj, index) => {
      if (obj.size === size) {
        sizeIndex = index;
      }
    });
    if (sizeIndex !== undefined) {
      this.colorSizeInfo.splice(sizeIndex, 1);
    }
  }

  getSizeColors(sizeToGet) {
    const size = this.#findSize(sizeToGet);
    return size !== undefined ? size.colors : -1;
  }

  removeColor(sizeToGet, color) {
    const size = this.#findSize(sizeToGet);

    if (size !== undefined) {
      const colorIndex = size.colors.indexOf(color);
      if (colorIndex !== undefined) {
        size.colors.splice(colorIndex, 1);
      }
    }
  }

  addColorToSize(sizeToGet, color) {
    const size = this.#findSize(sizeToGet);
    if (size !== undefined) {
      if (size.colors.indexOf(color) === -1) {
        size.colors.push(color);
      }
    }
  }
}
