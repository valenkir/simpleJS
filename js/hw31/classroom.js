const facultiesOptions = [
  { text: "All", value: "all", selected: true },
  { text: "Political Science", value: "political science" },
  { text: "Law", value: "law" },
  { text: "Economy and Business", value: "economy and business" },
  { text: "Information Technology", value: "information technology" },
  { text: "Engineering", value: "engineering" },
];

const classrooms = [
  { classroomName: "101A", seats: 10, faculty: "Law" },
  { classroomName: "102A", seats: 12, faculty: "Law" },
  { classroomName: "305A", seats: 15, faculty: "Political Science" },
  { classroomName: "103A", seats: 12, faculty: "Political Science" },
  { classroomName: "304A", seats: 20, faculty: "Political Science" },
  { classroomName: "110B", seats: 12, faculty: "Economy and Business" },
  { classroomName: "301A", seats: 10, faculty: "Political Science" },
  { classroomName: "202A", seats: 10, faculty: "Economy and Business" },
  { classroomName: "400C", seats: 10, faculty: "Engineering" },
  { classroomName: "104A", seats: 20, faculty: "Law" },
  { classroomName: "204A", seats: 20, faculty: "Law" },
  { classroomName: "303A", seats: 10, faculty: "Economy and Business" },
  { classroomName: "101B", seats: 12, faculty: "Information Technology" },
  { classroomName: "102B", seats: 15, faculty: "Information Technology" },
  { classroomName: "103B", seats: 10, faculty: "Information Technology" },
  { classroomName: "211B", seats: 15, faculty: "Economy and Business" },
  { classroomName: "401C", seats: 10, faculty: "Engineering" },
];

const groups = [
  { name: "L-24-1", students: 15, faculty: "Law" },
  { name: "L-24-2", students: 10, faculty: "Law" },
  { name: "PS-24-1", students: 9, faculty: "Political Science" },
  { name: "PS-24-2", students: 19, faculty: "Political Science" },
  { name: "PS-24-3", students: 20, faculty: "Political Science" },
  { name: "EB-24-1", students: 10, faculty: "Economy and Business" },
  { name: "EB-24-2", students: 12, faculty: "Economy and Business" },
  { name: "IT-24-1", students: 15, faculty: "Information Technology" },
  { name: "IT-24-2", students: 14, faculty: "Information Technology" },
  { name: "IT-24-3", students: 12, faculty: "Information Technology" },
  { name: "E-24-1", students: 15, faculty: "Engineering" },
];

//FILTER CLASSROOMS
const filterClassrooms = (
  facultyOption = "all",
  groupOption = "none",
  classroomList,
  groupList
) => {
  let result = [];
  if (
    facultyOption.toLowerCase() === "all" &&
    groupOption.toLowerCase() === "none"
  ) {
    result = classroomList;
  } else {
    if (groupOption.toLowerCase() === "none") {
      classroomList
        .filter((classroom) => {
          return (
            classroom.faculty.toLowerCase() === facultyOption.toLowerCase()
          );
        })
        .forEach((classroom) => {
          result.push(classroom);
        });
    } else if (facultyOption.toLowerCase() === "all") {
      const selectedGroupObj = groupList.find(
        (group) => group.name === groupOption
      );
      classroomList
        .filter((classroom) => {
          return classroom.seats >= selectedGroupObj.students;
        })
        .forEach((classroom) => {
          result.push(classroom);
        });
    } else {
      const selectedGroupObj = groupList.find(
        (group) => group.name === groupOption
      );
      classroomList
        .filter((classroom) => {
          return (
            classroom.faculty.toLowerCase() === facultyOption.toLowerCase() &&
            classroom.seats >= selectedGroupObj.students
          );
        })
        .forEach((classroom) => {
          result.push(classroom);
        });
    }
  }
  return result;
};

// SHOW FACULTY OPTIONS
const facultyDropDown = document.querySelector(".faculty-classrooms");

facultiesOptions.forEach((option) =>
  facultyDropDown.add(new Option(option.text, option.value, option.selected))
);

//SHOW GROUP OPTIONS
const groupDropDown = document.querySelector(".group-classrooms");

const getGroupOptions = (groupList) => {
  const groupNames = [];
  const groupOptions = [];
  groupList.forEach((group) => groupNames.unshift(group.name));
  groupNames.forEach((groupName) => {
    groupOptions.push({ text: groupName, value: groupName.toLowerCase() });
  });
  groupOptions.unshift({ text: "None", value: "none", selected: true });
  return groupOptions;
};

const groupOptions = getGroupOptions(groups);

groupOptions.forEach((option) =>
  groupDropDown.add(new Option(option.text, option.value, option.selected))
);

//CREATE LISTS FOR CLASSES
const classroomListElement = document.createElement("ul");
classroomListElement.classList.add("list-group");
const classroomListContainer = document.querySelector(".classroom-list");
classroomListContainer.append(classroomListElement);

const showClassroomList = (arr, parentList, className) => {
  arr.forEach((elem) => {
    const parentListItem = document.createElement("li");
    parentListItem.classList.add("fs-5", "list-group-item", `${className}`);
    parentListItem.innerText = elem.classroomName;
    const childList = document.createElement("ul");
    childList.classList.add("list-group");
    const childListItemSeats = document.createElement("li");
    childListItemSeats.classList.add(
      "fs-5",
      "list-group-item",
      `${className}-seats`
    );
    const childListItemFaculty = document.createElement("li");
    childListItemFaculty.classList.add(
      "fs-5",
      "list-group-item",
      `${className}-faculty`
    );
    childListItemSeats.innerText = `Number of seats: ${elem.seats}`;
    childListItemFaculty.innerText = `Faculty: ${elem.faculty}`;
    childList.append(childListItemSeats, childListItemFaculty);
    parentListItem.append(childList);
    parentList.append(parentListItem);
  });
};

//CREATE LISTS FOR GROUPS
const groupListElement = document.createElement("ul");
groupListElement.classList.add("list-group");
const groupListContainer = document.querySelector(".group-list");
groupListContainer.append(groupListElement);

const showGroupList = (arr, parentList, className) => {
  arr.forEach((elem) => {
    const parentListItem = document.createElement("li");
    parentListItem.classList.add("fs-5", "list-group-item", `${className}`);
    parentListItem.innerText = elem.name;
    const childList = document.createElement("ul");
    childList.classList.add("list-group");
    const childListItemStudents = document.createElement("li");
    childListItemStudents.classList.add(
      "fs-5",
      "list-group-item",
      `${className}-students`
    );
    const childListItemFaculty = document.createElement("li");
    childListItemFaculty.classList.add(
      "fs-5",
      "list-group-item",
      `${className}-faculty`
    );
    childListItemStudents.innerText = `Number of students: ${elem.students}`;
    childListItemFaculty.innerText = `Faculty: ${elem.faculty}`;
    childList.append(childListItemStudents, childListItemFaculty);
    parentListItem.append(childList);
    parentList.append(parentListItem);
  });
};

//SHOW CLASSROOMS ON PAGE LOAD
const classroomListItemClass = "classroom-item";
showClassroomList(classrooms, classroomListElement, classroomListItemClass);

//SHOW GROUPS ON PAGE LOAD
showGroupList(groups, groupListElement, "group-item");

//FILTER CLASSROOMS WHEN FACULTY IS CHANGED
let filteredClassroomList = [...classrooms];
facultyDropDown.addEventListener("input", () => {
  const facultyOption =
    facultyDropDown.options[facultyDropDown.selectedIndex].text;
  const groupOption = groupDropDown.options[groupDropDown.selectedIndex].text;
  filteredClassroomList = filterClassrooms(
    facultyOption,
    groupOption,
    classrooms,
    groups
  );

  //how to rewrite it without using innerHTML? removing children didn't work
  classroomListElement.innerHTML = "";
  showClassroomList(
    filteredClassroomList,
    classroomListElement,
    "classroom-item"
  );
});

//FILTER CLASSROOMS WHEN GROUP IS CHANGED
groupDropDown.addEventListener("input", () => {
  const facultyOption =
    facultyDropDown.options[facultyDropDown.selectedIndex].text;
  const groupOption = groupDropDown.options[groupDropDown.selectedIndex].text;
  filteredClassroomList = filterClassrooms(
    facultyOption,
    groupOption,
    classrooms,
    groups
  );

  //how to rewrite it without using innerHTML? removing children didn't work
  classroomListElement.innerHTML = "";
  showClassroomList(
    filteredClassroomList,
    classroomListElement,
    "classroom-item"
  );
});

//SORTING
const sortByName = document.querySelector(".sort-classrooms-by-name-btn");
const sortBySeats = document.querySelector(".sort-classrooms-by-seats-btn");

//SORT BY NAME
sortByName.addEventListener("click", () => {
  filteredClassroomList.sort((a, b) => a.faculty.localeCompare(b.faculty));

  //how to rewrite it without using innerHTML? removing children didn't work
  classroomListElement.innerHTML = "";
  showClassroomList(
    filteredClassroomList,
    classroomListElement,
    "classroom-item"
  );
});

sortBySeats.addEventListener("click", () => {
  filteredClassroomList.sort((a, b) => a.seats - b.seats);

  //how to rewrite it without using innerHTML? removing children didn't work
  classroomListElement.innerHTML = "";
  showClassroomList(
    filteredClassroomList,
    classroomListElement,
    "classroom-item"
  );
});
