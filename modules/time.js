// timer
const date = document.querySelector('.time');
const { DateTime } = window.luxon;
export const times = () => {
  date.innerHTML = DateTime.now().toLocaleString({
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};