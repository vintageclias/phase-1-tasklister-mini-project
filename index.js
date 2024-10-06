document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskDescription = document.getElementById('new-task-description').value;
    const priority = document.getElementById('priority').value; 
    
    if (taskDescription) {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskDescription;

      switch (priority) {
          case 'high':
            taskItem.style.color = 'red';
            break;
          case 'medium':
            taskItem.style.color = 'orange';
            break;
          case 'low':
            taskItem.style.color = 'green';
            break;
        }

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        taskItem.remove();
      });
      
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
      
      form.reset(); 
    }
  });
});
