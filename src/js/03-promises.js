import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}


Notiflix.Notify.success('Fulfilled promise ${} in ${} ms');
Notiflix.Notify.failure('Rejected promise ${} in ${} ms');