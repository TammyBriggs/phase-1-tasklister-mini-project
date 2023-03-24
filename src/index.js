document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
      const taskList = document.querySelector('#tasks');
      
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Create a new task item
        const newTask = document.createElement('li');
        const newTaskDescription = document.querySelector('#new-task-description');
        newTask.innerText = newTaskDescription.value;
        
        // Create a delete button for the task
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        
        // Add event listener for delete button
        deleteButton.addEventListener('click', function() {
          newTask.remove();
        });
        
        // Append the task and delete button to the task list
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
        
        // Reset the form so task description bar clears once you hit enter
        form.reset();
      });
});
