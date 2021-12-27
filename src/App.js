import Header from './Header.js';
import { setItem } from './Storage.js';
import TodoCount from './TodoCount.js';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';
import DateInfo from './DateInfo.js';

export default function App({ target, initialState }) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    todoList.setState(nextState);
  };

  new Header({
    target,
    text: '🔥 To Do List',
  });

  new DateInfo({
    target,
  });

  new TodoForm({
    target,
    onSubmit: (text) => {
      const nextState = [...todoList.state, { text, isCompleted: false }];
      todoList.setState(nextState);
      todoCount.setState(nextState);
      setItem('todoList', JSON.stringify(nextState));
    },
  });

  const todoList = new TodoList({
    target,
    initialState,
    onTodoComplete: (selectedItem) => {
      const { id } = selectedItem.dataset;
      const nextState = [...todoList.state];
      nextState[id].isCompleted = !nextState[id].isCompleted;
      todoList.setState(nextState);
      todoCount.setState(nextState);
      setItem('todoList', JSON.stringify(nextState));
    },
    onTodoRemove: (selectedItem) => {
      const { id } = selectedItem.dataset;
      const nextState = [...todoList.state];
      nextState.splice(id, 1);
      todoList.setState(nextState);
      todoCount.setState(nextState);
      setItem('todoList', JSON.stringify(nextState));
    },
  });

  const todoCount = new TodoCount({
    target,
    initialState,
  });
}
