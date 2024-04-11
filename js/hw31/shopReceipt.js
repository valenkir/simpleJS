const shopReceipt = [
  { productName: "Egg", amount: 10, pricePerItem: 4 },
  { productName: "Flour", amount: 1, pricePerItem: 5.5 },
  { productName: "Milk", amount: 5, pricePerItem: 2.45 },
  { productName: "Sugar", amount: 15, pricePerItem: 3 },
  { productName: "Strawberry", amount: 22, pricePerItem: 5.58 },
];

const getList = (list) => {
  let result = "";
  list.forEach((product) => {
    result += `${product.productName}, price: ${product.pricePerItem}, amount: ${product.amount}\n`;
  });
  return result;
};

const getPurchaseSum = (list) => {
  let sum = 0;
  list.forEach((product) => {
    sum += product.pricePerItem * product.amount;
  });
  return sum;
};

const getMostExpensiveProduct = (list) => {
  let highestPriceProduct = { ...list[0] };
  list.forEach((product, index) => {
    if (index !== list.length - 1) {
      if (highestPriceProduct.pricePerItem < list[index + 1].pricePerItem) {
        highestPriceProduct = { ...list[index + 1] };
      }
    }
  });
  return highestPriceProduct;
};

const getAveragePrice = (list) => {
  let sum = 0;
  list.forEach((product) => {
    sum += product.pricePerItem;
  });
  return sum / list.length;
};

const shopReceiptField = document.querySelector(".shop-receipt");
const getListBtn = document.querySelector(".get-list");
const getMostExpensiveProductBtn = document.querySelector(".expensive-btn");
const getTotalBtn = document.querySelector(".total-btn");
const getAvgBtn = document.querySelector(".avg-btn");
const infoField = document.querySelector(".info-field");

console.log(getMostExpensiveProduct(shopReceipt));
console.log(getPurchaseSum(shopReceipt));
console.log(getAveragePrice(shopReceipt));

getListBtn.addEventListener("click", () => {
  shopReceiptField.value = getList(shopReceipt);
});

getMostExpensiveProductBtn.addEventListener("click", () => {
  const mostExpensiveProduct = getMostExpensiveProduct(shopReceipt);
  infoField.value = `Product: ${mostExpensiveProduct.productName}, price: ${mostExpensiveProduct.pricePerItem}`;
});

getTotalBtn.addEventListener("click", () => {
  const sum = getPurchaseSum(shopReceipt);
  infoField.value = `Total price: ${sum}`;
});

getAvgBtn.addEventListener("click", () => {
  const avgPrice = getAveragePrice(shopReceipt);
  infoField.value = `Average price: ${avgPrice}`;
});
