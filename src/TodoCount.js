export default function TodoCount({ target, initialState }) {
  const todoCountElement = document.createElement('h4');
  target.appendChild(todoCountElement);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    todoCountElement.innerHTML = `
        총 ${this.state.length}개 중 ${
      this.state.filter(({ isCompleted }) => isCompleted).length
    }개 완료 🎉
      `;
  };

  this.render();
}
