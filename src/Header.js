export default function Header({ target, text }) {
  const headerElement = document.createElement('div');
  target.appendChild(headerElement);
  headerElement.className = 'header-container';

  const currentDate = new Date();
  const monthNameShort = currentDate.toLocaleString('en-US', {
    month: 'short',
  });
  const fullYear = currentDate.getFullYear();
  const day = currentDate.getDate();

  this.render = () => {
    headerElement.innerHTML = `
    <h2>${text}</h2>
    <div class="date-info">
    <span class="month">${monthNameShort}</span>
    <span class="day">${day}</span>  
    <span class="year">${fullYear}</span> 
    </div>    
    `;
  };

  this.render();
}
