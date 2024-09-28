function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    // handle empty task
    if (!taskInput.value.trim()) {
        return alert("you must be write somthing!")
    }

    // Create a new list item
    var li = document.createElement('li');
    li.textContent = taskInput.value;


    var removeButton = document.createElement('button');
    removeButton.textContent = 'Delete';
    removeButton.className = 'remove-btn';
    removeButton.onclick = function () {
        taskList.removeChild(li);
    };

    
    li.onclick = function () {
        li.classList.toggle('completed');
    };

    
    li.appendChild(removeButton);

    g
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}