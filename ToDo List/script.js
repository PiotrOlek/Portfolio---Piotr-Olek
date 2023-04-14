const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', event => {
    event.preventDefault();
    addTodo();
});

function addTodo() {
    const task = todoInput.value.trim();
    if (task.length === 0) return;
    createTodoItem(task);
    todoInput.value = '';
}

function createTodoItem(task) {
    const listItem = document.createElement('li');

    const label = document.createElement('label');
    label.textContent = task;
    label.addEventListener('click', () => {
        label.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Usuń';
    deleteBtn.addEventListener('click', () => {
        listItem.remove();
    });

    listItem.appendChild(label);
    listItem.appendChild(deleteBtn);
    todoList.appendChild(listItem);
}
