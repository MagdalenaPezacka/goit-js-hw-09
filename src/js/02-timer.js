import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('button[data-start]');
const timer = document.querySelector('.timer');
const picker = document.querySelector('#datetime-picker');
startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() < Date.now()) {
            window.alert('Please, choose a date in the future');
        } else {
            selectedDate = selectedDates[0].getTime();
            startBtn.disabled = false;
            // Report.success();
        };
    }
}

flatpickr(picker, options);

// const dateBox = () => {
//   const date = {
//     enableTime: true,
//     dateFormat: 'Y-m-d H:i',
//   };
//   console.log(date);
// };
// picker.addEventListener('input', throttle(dateBox, 500));
// {
//     enableTime: true,
//     dateFormat: "Y-m-d H:i",
// }
