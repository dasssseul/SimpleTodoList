export default function Header({ target, text }) {
  const headerElement = document.createElement('h2');
  target.appendChild(headerElement);

  this.render = () => {
    headerElement.textContent = text;
  };

  this.render();
}
