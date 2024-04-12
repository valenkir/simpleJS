import { isNotEmptyString } from "../validation.js";

const addUserList = (users, container) => {
  container.innerHTML = "";
  const userList = document.createElement("ul");
  userList.classList.add("list-group", "fs-5", "user-list");

  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item", "item");
    listItem.innerText = user;
    userList.append(listItem);
  });

  container.append(userList);
};

const styleListBgOddRows = (list, style = "bg-primary-subtle") => {
  debugger;
  const items = list.children;
  for (let i = 0; i < items.length; i++) {
    console.log(typeof items[i].innerText);
    if (i % 2 !== 0 && !items[i].innerText.includes("removed")) {
      items[i].classList.add(style);
    } else if (!items[i].innerText.includes("removed")) {
      items[i].classList.remove(style);
    } else {
      items[i].classList.add("bg-dark-subtle");
      items[i].classList.add("text-dark-emphasis");
    }
  }
};

const insertListItem = (list, newItem, container, position = "end") => {
  switch (position.toLowerCase()) {
    case "start":
      list.unshift(newItem);
      break;
    case "middle":
      const newItemIndex = Math.floor(list.length / 2);
      list.splice(newItemIndex, 0, newItem);
      break;
    case "end":
      list.push(newItem);
      break;
  }
  addUserList(list, container);
};

const removeListItem = (list, itemToRemove, container) => {
  list[list.indexOf(itemToRemove)] = `${itemToRemove} has been removed`;
  addUserList(list, container);
};

//LIST DATA
const users = ["Dave", "John", "Ivan", "Sam", "Mel", "Diana"];

//CREATE A LIST AND STYLE IT ON PAGE LOAD
const listContainer = document.querySelector(".container");
addUserList(users, listContainer);
let userListElement = document.querySelector(".user-list");
styleListBgOddRows(userListElement);

//ADD USERS TO THE DROPDOWN
const userDropDown = document.querySelector(".remove-user-field");
users.forEach((option) => userDropDown.add(new Option(option, option)));

//ADD USER
const positionDropDown = document.querySelector(".item-position");
const addUserField = document.querySelector(".add-user-field");
const addUserBtn = document.querySelector(".add-user-btn");

addUserBtn.addEventListener("click", () => {
  const positionOption =
    positionDropDown.options[positionDropDown.selectedIndex].value;
  const newUserName = addUserField.value;
  if (isNotEmptyString(newUserName)) {
    insertListItem(users, newUserName, listContainer, positionOption);
    userListElement = document.querySelector(".user-list");
    styleListBgOddRows(userListElement);
    userDropDown.innerHTML = "";
    users.forEach((option) => {
      if (!option.includes("removed")) {
        userDropDown.add(new Option(option, option));
      }
    });
  }
});

//REMOVE USER
const removeUserBtn = document.querySelector(".remove-user-btn");

removeUserBtn.addEventListener("click", () => {
  const userName = userDropDown.options[userDropDown.selectedIndex].text;
  if (isNotEmptyString(userName)) {
    removeListItem(users, userName, listContainer);
    userListElement = document.querySelector(".user-list");
    styleListBgOddRows(userListElement);
    userDropDown.innerHTML = "";
    users.forEach((option) => {
      if (!option.includes("removed")) {
        userDropDown.add(new Option(option, option));
      }
    });
  }
});
