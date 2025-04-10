const monthYear = document.getElementById('month-year');
const daysContainer = document.getElementById('days');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function renderCalendar() {
  date.setDate(1);
  const firstDayIndex = date.getDay();
  const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0).getDate();
  const nextDays = 7 - new Date(currentYear, currentMonth + 1, 0).getDay() - 1;

  monthYear.innerText = `${months[currentMonth]} ${currentYear}`;
  daysContainer.innerHTML = '';

  for (let x = firstDayIndex; x > 0; x--) {
    const div = document.createElement('div');
    div.classList.add('prev-date');
    div.innerText = prevLastDay - x + 1;
    daysContainer.appendChild(div);
  }

  for (let i = 1; i <= lastDay; i++) {
    const div = document.createElement('div');
    div.innerText = i;
    if (
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      div.style.backgroundColor = '#4CAF50';
      div.style.color = 'white';
    }
    daysContainer.appendChild(div);
  }

  for (let j = 1; j <= nextDays; j++) {
    const div = document.createElement('div');
    div.classList.add('next-date');
    div.innerText = j;
    daysContainer.appendChild(div);
  }
}

prevBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  date = new Date(currentYear, currentMonth, 1);
  renderCalendar();
});

nextBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  date = new Date(currentYear, currentMonth, 1);
  renderCalendar();
});

renderCalendar();
