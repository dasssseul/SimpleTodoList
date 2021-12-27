export default function TodoList({
  target,
  initialState,
  onTodoComplete,
  onTodoRemove,
}) {
  const todoListElement = document.createElement('div');
  target.appendChild(todoListElement);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    todoListElement.innerHTML = `<ul>${this.state
      .map(
        ({ text, isCompleted }, index) =>
          `<li class="todo-item" data-id="${index}" ><input class="todo-text" type="checkbox" name="checkComplete" ${
            isCompleted ? 'checked' : ''
          }/><label class="todo-text" name="checkComplete" style="${
            isCompleted ? 'text-decoration: line-through;' : 'none'
          }">${text}</label>
          <span class="material-icons remove-button">delete_forever</span>
          </li>`
      )
      .join('')}</ul>`;

    todoListElement.querySelectorAll('ul').forEach((ulElement) => {
      ulElement.addEventListener('click', (e) => {
        const selectedItem = e.target.closest('li');
        if (
          e.target.className === 'todo-item' ||
          e.target.className === 'todo-text'
        ) {
          onTodoComplete(selectedItem);
        } else {
          onTodoRemove(selectedItem);
        }
      });
    });
  };

  this.render();
}
