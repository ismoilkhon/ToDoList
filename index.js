const todos = document.querySelector('ul');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const item = input.value;
  input.value = '';

  const todo = document.createElement('li');
  const todoText = document.createElement('span');
  const todoBtn = document.createElement('button');

  todo.appendChild(todoText);
  todoText.textContent = item;
  todo.appendChild(todoBtn);
  todoBtn.textContent = 'Delete';
  todos.appendChild(todo);

  todoBtn.addEventListener('click', () => {
    todos.removeChild(todo);
  });

  input.focus();
});

