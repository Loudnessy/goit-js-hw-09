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

  let delay = Number(form.childNodes[1].lastElementChild.value);
  const step = Number(form.childNodes[3].lastElementChild.value);
  const amount = Number(form.childNodes[5].lastElementChild.value);
  for (let i = 1; i <= amount; i++) {
    const position = i;
    
      createPromise(position, delay)
      .then((result) => {
        console.log(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
      })
      .catch((error) => {
        console.log(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
      });
      delay += step
  }
});



