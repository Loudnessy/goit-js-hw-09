const btnStart = document.querySelector("button[data-start]")
const btnStop = document.querySelector("button[data-stop]")
const body = document.querySelector("body")
btnStart.addEventListener("click", onStart)
const randomColor = function () {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  let timerId
function onStart (evt) {
timerId = setInterval(() => body.style.backgroundColor = randomColor(), 1000);
btnStart.removeEventListener("click", onStart)
}
btnStop.addEventListener("click", onStop)
function onStop () {
btnStart.addEventListener("click", onStart)
clearInterval(timerId)
}

