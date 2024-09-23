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
