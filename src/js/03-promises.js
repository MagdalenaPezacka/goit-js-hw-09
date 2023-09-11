import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onClickCreatePromise(event) {
  event.preventDefault();
  const delayValue = Number(delayInput.value);
  const stepValue = Number(stepInput.value);
  for (let i = 1; i <= amount.value; i += 1) {
    let delayTime = delayValue + stepValue *i;
    createPromise(i, delayTime)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay} ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay} ms`);
      });
  }
}

form.addEventListener('submit', onClickCreatePromise);
