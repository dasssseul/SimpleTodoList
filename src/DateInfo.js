export default function DateInfo({ target }) {
  const dateElement = document.createElement('div');
  target.appendChild(dateElement);
  const currentDate = new Date();
  const monthNameShort = currentDate.toLocaleString('en-US', {
    month: 'short',
  });
  const fullYear = currentDate.getFullYear();
  const day = currentDate.getDate();
  this.render = () => {
    dateElement.innerHTML = `
        <span>${monthNameShort}</span>
        <span>${day}</span>  
        <span>${fullYear}</span>      
      `;
  };

  this.render();
}
