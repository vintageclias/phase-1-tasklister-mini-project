document.addEventListener('DOMContentLoaded', () => {
    const form =document.getElementById('creat-task-form');
    const taskList = document.getElementById('task');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const taskDesciption = document.getElementById('new-task-descripyion').ariaValueMax;

        if (taskDesciption) {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskDesciption;
            

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () =>{
                taskItem.remove();
            });
            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);
            form.requestFullscreen();
        }
    });
});