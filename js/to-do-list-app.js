const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Add an event listener to the "Add" button
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

addTaskButton.addEventListener("click", function (event) {
  addTask();
});

function addTask() {
  // Get the text entered by the user and remove leading/trailing white spaces
  const taskText = taskInput.value.trim();

  // Check if the input is not empty
  if (taskText !== "") {
    // Create a new task item (list item)
    const taskItem = document.createElement("li");

    // Add HTML structure for the task item with a checkbox, task text, and delete button
    taskItem.innerHTML = `
                <div class="container card">
                    <input type="checkbox" class="check">
                    <span class="span-text">${taskText}</span>
                    <button class="btn-delete">Delete</button>
                </div>
            `;

    // Add the task item to the task list
    taskList.appendChild(taskItem);
    taskList.classList.add("list");

    // Clear the input field
    taskInput.value = "";

    // Attach a click event listener to the "Delete" button within the task item
    const deleteButton = taskItem.querySelector(".btn-delete");
    deleteButton.addEventListener("click", function () {
      // Remove the task item when the "Delete" button is clicked
      taskList.removeChild(taskItem);
    });
  }
}
