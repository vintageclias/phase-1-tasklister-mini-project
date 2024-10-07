document.addEventListener("DOMContentLoaded", function() {
  const taskForm = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');
  const taskInput = document.getElementById('new-task-description');
  const priorityInput = document.getElementById('task-priority');
  const dueDateInput = document.getElementById('task-due-date');
  const sortSelect = document.getElementById('sort-tasks');
  const durationInput = document.getElementById('task-duration');
  const userInput = document.getElementById('task-user');

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskValue = taskInput.value;
    const priorityValue = priorityInput.value;
    const durationValue = durationInput.value;
    const dueDateValue = dueDateInput.value;
    const userValue = userInput.value;

    if (taskValue === '') return;

    const li = document.createElement('li');
    li.innerHTML = `${taskValue}  User: ${userValue}  Duration: ${durationValue}  Due: ${dueDateValue}`;
    
    if (priorityValue === 'high') {
      li.style.color = 'red';
    } else if (priorityValue === 'medium') {
      li.style.color = 'yellow';
    } else {
      li.style.color = 'green';
    }

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit Task';
    li.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    durationInput.value = '';
    taskInput.value = '';
    dueDateInput.value = '';
    userInput.value = '';

    deleteButton.addEventListener('click', function() {
      taskList.removeChild(li);
    });

    editButton.addEventListener('click', function() {
      durationInput.value = durationValue;
      taskInput.value = taskValue;
      userInput.value = userValue;
      priorityInput.value = priorityValue;
      dueDateInput.value = dueDateValue;

      taskList.removeChild(li);
      taskInput.focus(); 
    });
  });

  sortSelect.addEventListener('change', function() {
    const tasks = Array.from(taskList.children);
    tasks.sort(function(a, b) {
      const firstPriority = getPriorityValue(a.style.color);
      const secondPriority = getPriorityValue(b.style.color);

      return sortSelect.value === 'ascending' ? firstPriority - secondPriority : secondPriority - firstPriority;
    });

    taskList.innerHTML = '';
    tasks.forEach(function(task) {
      taskList.appendChild(task);
    });
  });

  function getPriorityValue(color) {
    if (color === 'red') {
      return 1; 
    } else if (color === 'yellow') {
      return 2; 
    } else {
      return 3; 
    }
  }
});
