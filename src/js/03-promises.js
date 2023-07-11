const form = document.querySelector('.form');


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


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const delay = form.childNodes[1].lastElementChild.value;
  const step = form.childNodes[3].lastElementChild.value;
  const amount = form.childNodes[5].lastElementChild.value;

  for (let i = 1; i <= amount; i++) {
    const position = i;
    const currentDelay = delay + (i - 1) * step;
    const promise = createPromise(position, currentDelay);

    promise
      .then((result) => {
        prompt(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
        console.log(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
      })
      .catch((error) => {
        console.log(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
      });
  }
});


