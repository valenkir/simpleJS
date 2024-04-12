import { isNotEmptyString } from "../validation.js";

const addUserList = (users, container, className) => {
  const userList = document.createElement("ul");
  userList.classList.add("list-group", "fs-5", "user-list");

  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item", className);
    listItem.innerText = user;
    userList.append(listItem);
  });

  container.append(userList);
};

const styleListBgOddRows = (list, style = "bg-primary-subtle") => {
  const items = list.children;
  for (let i = 0; i < items.length; i++) {
    if (i % 2 !== 0 && !items[i].classList.contains("bg-dark-subtle")) {
      items[i].classList.add(style);
    } else {
      items[i].classList.remove(style);
    }
  }
};

const insertListItem = (list, itemText, className, position = "end") => {
  const newListItem = document.createElement("li");
  newListItem.classList.add("list-group-item", className);
  newListItem.innerText = itemText;
  switch (position.toLowerCase()) {
    case "start":
      list.prepend(newListItem);
      break;
    case "middle":
      const index = Math.floor(list.children.length / 2);
      list.children[index].after(newListItem);
      break;
    case "end":
      list.append(newListItem);
      break;
  }
  styleListBgOddRows(list);
};

const removeListItem = (list, itemText, rowStyle) => {
  const items = list.children;
  console.dir(items);
  const removementLabel = `${itemText} has been removed`;
  for (let item of items) {
    if (item.innerText.toLowerCase() === itemText.toLowerCase()) {
      item.innerText = removementLabel;
      item.classList.remove(rowStyle);
      item.classList.add("bg-dark-subtle");
      item.classList.add("text-dark-emphasis");
    }
  }
  styleListBgOddRows(list);
};

//LIST DATA
const users = ["Dave", "John", "Ivan", "Sam", "Mel", "Diana"];

//CREATE A LIST AND STYLE IT ON PAGE LOAD
const listContainer = document.querySelector(".container");
const listItemClassName = "item";
const rowStyle = "bg-primary-subtle";
addUserList(users, listContainer, listItemClassName);
const userListElement = document.querySelector(".user-list");
styleListBgOddRows(userListElement);

//ADD USER
const positionDropDown = document.querySelector(".item-position");
const addUserField = document.querySelector(".add-user-field");
const addUserBtn = document.querySelector(".add-user-btn");

addUserBtn.addEventListener("click", () => {
  const positionOption =
    positionDropDown.options[positionDropDown.selectedIndex].value;
  const newUserName = addUserField.value;
  if (isNotEmptyString(newUserName)) {
    insertListItem(userListElement, newUserName, "item", positionOption);
  }
});

//REMOVE USER
const removeUserField = document.querySelector(".remove-user-field");
const removeUserBtn = document.querySelector(".remove-user-btn");

removeUserBtn.addEventListener("click", () => {
  const userName = removeUserField.value;
  if (isNotEmptyString(userName)) {
    removeListItem(userListElement, userName, rowStyle);
  }
});
