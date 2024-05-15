import { Product } from "./productClass.js";

export class Electronics extends Product {
  constructor(productInfo, deviceInfo) {
    super(productInfo);
    for (let key in deviceInfo) {
      this[key] = deviceInfo[key];
    }
  }
}
