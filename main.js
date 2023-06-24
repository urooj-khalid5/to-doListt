var todoForm = document.getElementById('todo-form');
var todoInput = document.getElementById('todo-input');
var todoList = document.getElementById('todo-list');

// Array to store the tasks
var tasks = [];

// Add event listener to the form for submitting new tasks
todoForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var taskText = todoInput.value.trim(); // Get task text and remove whitespace

  if (taskText !== '') {
    // Create a new task object
    var task = {
      text: taskText,
      completed: false
    };

    tasks.push(task); // Add task to the tasks array
    renderTasks(); // Render the updated tasks list
    todoInput.value = ''; // Clear the input field
  }
});

// Function to render the tasks list
function renderTasks() {
  todoList.innerHTML = ''; // Clear the existing list

  tasks.forEach(function(task, index) {
    var listItem = document.createElement('li');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', function() {
      task.completed = !task.completed; // Toggle the completed status
      renderTasks(); // Render the updated tasks list
    });

    var label = document.createElement('label');
    label.textContent = task.text;

    if (task.completed) {
      label.classList.add('completed');
    }

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      tasks.splice(index, 1); // Remove task from the tasks array
      renderTasks(); // Render the updated tasks list
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
  });
}

// Initial rendering of the tasks list
renderTasks();

