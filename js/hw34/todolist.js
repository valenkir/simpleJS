import { isNotEmptyString } from "../validation.js";

let newTaskText = "";
const taskContainerClasses = [
  "d-flex",
  "gap-3",
  "mt-2",
  "align-items-center",
  "justify-content-center",
  "task-container",
  "list-group-item",
  "p-2",
];
const taskInputClasses = ["fs-5", "todo-field", "w-100"];

$(() => {
  const addTask = () => {
    const taskContainer = $("<li></li>");
    $(".list-group").append(taskContainer);
    taskContainer.addClass(taskContainerClasses.join(" "));

    const taskInput = $("<input type='text' disabled />");
    taskInput.val(newTaskText);
    const taskCheckbox = $(
      "<input type='checkbox' class='form-check-input' />"
    );
    const editTaskIcon =
      "<i class='fa-solid fa-square-pen task-icon edit-icon fa-xl'></i>";
    const saveTaskIcon =
      "<i class='fa-solid fa-file-export task-icon save-icon fa-lg d-none'></i>";
    const deleteTaskIcon =
      "<i class='fa-regular fa-trash-can delete-icon fa-lg'></i>";
    taskContainer.append(
      taskCheckbox,
      taskInput,
      editTaskIcon,
      saveTaskIcon,
      deleteTaskIcon
    );
    taskInput.addClass(taskInputClasses.join(" "));

    taskContainer.on("click", (event) => {
      if ($(event.target).hasClass("delete-icon")) {
        taskContainer.remove();
      }
      if ($(event.target).hasClass("edit-icon")) {
        taskInput.prop("disabled", false);
        $(".edit-icon").hide();
        $(".save-icon").removeClass("d-none");
      }
      if ($(event.target).hasClass("save-icon")) {
        taskInput.prop("disabled", true);
        $(".save-icon").addClass("d-none");
        $(".edit-icon").show();
      }
      if ($(event.target).hasClass("form-check-input")) {
        console.log("we are here");
        if ($(event.target).is(":checked")) {
          taskInput.addClass("text-decoration-line-through");
          taskInput.prop("disabled", true);
          $(".save-icon").addClass("d-none");
          $(".edit-icon").hide();
        } else {
          taskInput.removeClass("text-decoration-line-through");
          $(".edit-icon").show();
        }
      }
    });
  };

  $(".new-task-container").on("click", (event) => {
    if ($(event.target).hasClass("task-icon")) {
      if (isNotEmptyString(newTaskText)) {
        addTask();
      }
    }
  });

  $(".new-task-container").on("input", (event) => {
    if ($(event.target).hasClass("todo-field")) {
      newTaskText = $(event.target).val();
    }
  });
});
