export default function TodoList({ target, initialState }) {
  const todoListElement = document.createElement('div');
  target.appendChild(todoListElement);

  this.state = initialState;
}
