import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const btnStart = document.querySelector("button[data-start]")
const textDays = document.querySelector("[data-days]")
const textHours = document.querySelector("[data-hours]")
const textMinutes = document.querySelector("[data-minutes")
const textSeconds = document.querySelector("[data-seconds]")
btnStart.setAttribute("disabled", "")
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
let date = new Date()

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if(selectedDates[0] < date.getTime()){
        window.alert("Please choose a date in the future")
      } else {
        btnStart.removeAttribute("disabled")
        btnStart.addEventListener("click", () => {
            const id = setInterval(() => {
            date = new Date()
            const currentDayms = date.getTime()
            const future = new Date(selectedDates[0])
            const futureMs = future.getTime()
            const lol = futureMs - currentDayms  
            function addLeadingZero(value){
                return value.toString().padStart(2, "0")
            }
           const daysBeforeRender = convertMs(lol).days
           const hoursBeforeRender = convertMs(lol).hours
           const minutesBeforeRender = convertMs(lol).minutes
           const secondsBeforeRender = convertMs(lol).seconds   
textDays.textContent =  addLeadingZero(daysBeforeRender)
textHours.textContent = addLeadingZero(hoursBeforeRender)
textMinutes.textContent = addLeadingZero(minutesBeforeRender)
textSeconds.textContent = addLeadingZero(secondsBeforeRender)

   }, 1000)
        })
      }
    },
  };


const inputPicker = document.querySelector("#datetime-picker")
flatpickr(inputPicker, options)












