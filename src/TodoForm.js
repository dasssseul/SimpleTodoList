export default function TodoForm({ target, onSubmit }) {
  const todoFormElement = document.createElement('form');
  target.appendChild(todoFormElement);

  this.render = () => {
    todoFormElement.innerHTML = `
      <input name="todo" placeholder="오늘의 할 일을 입력해주세요!" />
      <button><span class="material-icons">add_circle</span></button>
    `;

    todoFormElement.addEventListener('submit', (e) => {
      e.preventDefault();
      const todoElement = todoFormElement.querySelector('input[name=todo]');
      const text = todoElement.value;
      if (text.length > 1) {
        todoElement.value = '';
        onSubmit(text);
      } else {
        alert('할 일을 입력해주세요!');
      }
    });
  };
  this.render();
}
