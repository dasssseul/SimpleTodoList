import App from './App.js';
import { getItem } from './Storage.js';

const appElement = document.querySelector('.app');
const initialState = getItem('todoList', []);

new App({
  target: appElement,
  initialState,
});
