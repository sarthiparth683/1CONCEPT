const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const year = document.querySelector("#next-year");

const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;
year.textContent = nextYear;

console.log("currentYear: ", currentYear);
console.log("nextYear: ", nextYear);

setInterval(() => {
  const currentDate = new Date();
  const newYearDate = new Date(`January 01 ${nextYear} 00:00:00`);
  // console.log("currentDate", currentDate, Number(currentDate))  // gives in milliseconds
  // console.log("newYearDate", newYearDate, Number(newYearDate))  // gives in milliseconds
  const totalSeconds = (newYearDate - currentDate) / 1000;

  const daysLeft = Math.floor(totalSeconds / 3600 / 24);
  const hoursLeft = Math.floor(totalSeconds / 3600) % 24;
  const minutesLeft = Math.floor(totalSeconds / 60) % 60;
  const secondsLeft = Math.floor(totalSeconds) % 60;
  days.innerHTML = daysLeft;
  hours.innerHTML = hoursLeft;
  minutes.innerHTML = minutesLeft;
  seconds.innerHTML = secondsLeft;
}, 1000);
