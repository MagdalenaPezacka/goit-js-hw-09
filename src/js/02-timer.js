import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
const picker = document.querySelector('#datetime-picker');
const daysCounter = document.querySelector('[data-days]');
const hoursCounter = document.querySelector('[data-hours]');
const minutesCounter = document.querySelector('[data-minutes]');
const secondsCounter = document.querySelector('[data-seconds]');

startBtn.disabled = true;
let timer = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < options.defaultDate) {
      Notiflix.Notify.failure('Please, choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
  },
};

const datePicker = flatpickr(picker, options);

function startTimer() {
  const ms = datePicker.selectedDates[0] - Date.now();
  const timerTime = convertMs(ms);
  const { days, hours, minutes, seconds } = timerTime;
  daysCounter.textContent = days;
  hoursCounter.textContent = hours;
  minutesCounter.textContent = minutes;
  secondsCounter.textContent = seconds;
  startBtn.disabled = true;

  if (ms <= 1000) {
    clearInterval(timer);
    Notiflix.Notify.success('Timer has stopped');
  }
}

startBtn.addEventListener('click', () => {
  timer = setInterval(() => {
    startTimer();
  }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  if (value < 10) {
    return String(value).padStart(2, '0');
  } else {
    return value;
  }
}

// konspekt
// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });
