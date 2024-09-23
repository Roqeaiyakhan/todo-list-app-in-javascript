// var btn = document.getElementById("add-btn");
// var todoInput = document.getElementById("todo-input");
// var todoList = document.getElementById("todo-list");

// // add function
// function addTask () {
//     var taskText = todoInput.value; // .value k zayer hum input ki value liy gye
//     if (taskText === "") {
//         alert("You must write something!");
//         return;
// }
// // ab hum list item create kary gye 
// const listItem = document.createElement("li");

// const taskSpan = document.createElement("span");
// taskSpan.textContent = taskText;
// taskSpan.addEventListener("click", toggleComplete);


//     // Delete Btn
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add("delete-btn");
//     deleteBtn.addEventListener("click", deleteTask);


//     // append the list item :append = jor na
//     listItem.appendChild(taskSpan);
//     listItem.appendChild(deleteBtn);

// //append the todoList
//     todoList.appendChild(listItem);
    
//     // Clear the input field
//     todoInput.value = "";

// }
// // Toggle Task Completed
// function toggleComplete(e) {
//     e.target.parentElement.classList.toggle("completed");
// }

// // Delete Task Function
// function deleteTask(e) {
//     const task = e.target.parentElement;
//     task.remove();
// }

// // Add Task on Button Click
// addBtn.addEventListener("click", addTask);

// // Add Task on Enter Key
// todoInput.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//         addTask();
//     }
// });










// Selectors
var btn = document.getElementById("add-btn");
var todoInput = document.getElementById("todo-input");
var todoList = document.getElementById("todo-list");

// Add Task Function
function addTask() {
    var taskText = todoInput.value;  // Getting the value from the input field

    // Check if the input is empty
    if (taskText === "") {
        alert("You must write something!");
        return;  // Return to stop the function from adding an empty task
    }

    // Create a new list item
    const listItem = document.createElement("li");

    // Create a span for the task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.addEventListener("click", toggleComplete);  // Toggle completion on click

    // Create the delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", deleteTask);  // Add event listener to delete the task

    // Append the span and delete button to the list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);

    // Append the list item to the todo list
    todoList.appendChild(listItem);

    // Clear the input field after adding the task
    todoInput.value = "";
}

// Toggle Task Completed
function toggleComplete(e) {
    e.target.parentElement.classList.toggle("completed");
}

// Delete Task Function
function deleteTask(e) {
    const task = e.target.parentElement;
    task.remove();
}

// Add Task on Button Click
btn.addEventListener("click", addTask);

// Add Task on Enter Key
todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
