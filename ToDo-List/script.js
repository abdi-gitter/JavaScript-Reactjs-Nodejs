//Todo list app
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('add-task-form');
    const taskInput = document.getElementById('task');
    const taskList = document.querySelector('.todolist-list-container');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        addTask(taskInput.value.trim());
        taskInput.value = ''; // Clear input after adding task
    });

    function addTask(task) {
        if (!task) return; // Do nothing if task is empty

        const listItem = document.createElement('li');
        listItem.className = 'unchecked';
        listItem.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.className = 'btn';
        deleteButton.addEventListener('click', () => listItem.remove());

        listItem.addEventListener('click', () => toggleCheck(listItem));

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    }

    function toggleCheck(item) {
        if (item.className === 'unchecked') {
            item.className = 'checked';
        } else {
            item.className = 'unchecked';
        }
    }
});
