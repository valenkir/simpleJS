let groceriesList = [
  { productName: "Egg", amountToBuy: 10, isBought: false },
  { productName: "Flour", amountToBuy: 2, isBought: false },
  { productName: "Milk", amountToBuy: 2, isBought: false },
  { productName: "Sugar", amountToBuy: 1, isBought: false },
  { productName: "Strawberry", amountToBuy: 1, isBought: true },
];

const sortProductListByState = (list) => {
  const purchasedProducts = list.filter((product) => product.isBought === true);
  const productsToBuy = list.filter((product) => product.isBought === false);
  purchasedProducts.sort((a, b) => a.productName.localeCompare(b.productName));
  productsToBuy.sort((a, b) => a.productName.localeCompare(b.productName));
  const result = productsToBuy.concat(purchasedProducts);
  return result;
};

const isProductInList = (productName, list) => {
  debugger;
  let isInList = false;
  list.forEach((product) => {
    if (product.productName === productName) {
      isInList = true;
    }
  });
  return isInList;
};

const getProductIndexByName = (productName, list) => {
  let productIndex = -1;
  list.forEach((product, index) => {
    if (product.productName === productName) {
      productIndex = index;
    }
  });
  return productIndex;
};

const addProductToList = (product, list) => {
  if (typeof product === "object") {
    list.push(product);
    return sortProductListByState(list);
  } else {
    return "Invalid product";
  }
};

const purchaseTheProduct = (productName, list) => {
  const index = getProductIndexByName(productName, list);
  list[index].isBought = true;
  return sortProductListByState(list);
};

const changeProductStatus = (productName, isBought, list) => {
  const index = getProductIndexByName(productName, list);
  list[index].isBought = isBought;
  return sortProductListByState(list);
};

const removeProductFromList = (productName, list) => {
  let newList = [];
  list
    .filter((product) => product.productName !== productName)
    .forEach((product) => newList.unshift(product));
  newList = sortProductListByState(newList);
  return newList;
};

const changeProductAmount = (productName, amount, list) => {
  const index = getProductIndexByName(productName, list);
  list[index].amountToBuy = Number(amount);
};

const getList = (list) => {
  let result = "";
  let status = "";
  list.forEach((product) => {
    status = product.isBought ? "bought" : "not purchased";
    result += `${product.productName}, ${status}, ${product.amountToBuy}\n`;
  });
  return result;
};

//PAGE ELEMENTS
const groceriesListField = document.querySelector(".groceries-list");
const getListBtn = document.querySelector(".get-list");
const addProductBtn = document.querySelector(".add-product");
const buyProductBtn = document.querySelector(".buy-product");
const changeAmountBtn = document.querySelector(".change-amount");
const removeProductBtn = document.querySelector(".remove-product");

//GET THE LIST
getListBtn.addEventListener("click", () => {
  groceriesListField.value = getList(groceriesList);
});

//ADD A PRODUCT
addProductBtn.addEventListener("click", () => {
  const newProduct = {
    productName: "",
    amountToBuy: 0,
    isBought: false,
  };

  newProduct.productName = prompt("Enter the product name");
  newProduct.amountToBuy = Number(prompt("Enter the amount you need to buy"));
  debugger;
  if (!isProductInList(newProduct.productName, groceriesList)) {
    newProduct.isBought =
      prompt("Have you already bought it?").toLowerCase() === "yes"
        ? true
        : false;
    groceriesList = addProductToList(newProduct, groceriesList);
  } else {
    changeProductAmount(
      newProduct.productName,
      newProduct.amountToBuy,
      groceriesList
    );
    groceriesList = changeProductStatus(
      newProduct.productName,
      false,
      groceriesList
    );
  }

  groceriesListField.value = getList(groceriesList);
});

//MARK A PRODUCT AS BOUGHT
buyProductBtn.addEventListener("click", () => {
  const productName = prompt("Enter the product name");
  if (isProductInList(productName, groceriesList)) {
    groceriesList = purchaseTheProduct(productName, groceriesList);
    groceriesListField.value = getList(groceriesList);
  } else {
    groceriesListField.value =
      "There is no such product in the list. To mark it as bought, you first need to add the product to the list.";
  }
});

//CHANGE THE AMOUNT OF PRODUCT UNITS
changeAmountBtn.addEventListener("click", () => {
  const productName = prompt("Enter the product name");
  const amount = Number(prompt("Enter the new amount"));

  if (isProductInList(productName, groceriesList) && amount > 0) {
    changeProductAmount(productName, amount, groceriesList);
    groceriesListField.value = getList(groceriesList);
  } else {
    groceriesList = addProductToList(
      { productName: productName, amountToBuy: amount, isBought: false },
      groceriesList
    );
    groceriesListField.value = getList(groceriesList);
  }
});

//REMOVE A PRODUCT
removeProductBtn.addEventListener("click", () => {
  const productName = prompt("Enter the product name");
  if (isProductInList(productName, groceriesList)) {
    groceriesList = removeProductFromList(productName, groceriesList);
    groceriesListField.value = getList(groceriesList);
  }
});
