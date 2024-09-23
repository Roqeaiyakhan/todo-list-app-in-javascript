var btn = document.getElementById("add-btn");
var todoInput = document.getElementById("todo-input");
var todoList = document.getElementById("todo-list");

// add function
function addTask () {
    var taskText = todoInput.value; // .value k zayer hum input ki value liy gye
    if (taskText === "") 
        alert("You must write something!");
        return;
}
// ab hum list item create kary gye 
const listItem = document.createElement("li");

const taskSpan = document.createElement("span");
taskSpan.textContent = taskText;
taskSpan.addEventListener("click", toggleComplete);


    // Delete Btn
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", deleteTask);


    // append the list item :append = jor na
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);

//append the todoList
    todoList.appendChild(listItem);