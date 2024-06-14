function addTarefas() {

    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = ' x';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.style.color = 'red';
        deleteBtn.onclick = function() {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTarefas();
    }
});
