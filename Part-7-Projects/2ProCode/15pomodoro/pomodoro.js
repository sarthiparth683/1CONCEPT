const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let minutes = 40;
let seconds = 0;
let timerId;

start.addEventListener("click", () => {
  timerId = setInterval(() => {
    if (seconds === 0) {
      seconds = 59;
      if (minutes !== 0) { // Minutes decrease only when seconds go from 00 → 59
        minutes--;
      }
    } else {
      seconds--;
    }

    timer.innerHTML = `${minutes}:${seconds}`;
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(timerId);
});

reset.addEventListener("click", () => {
  minutes = 40;
  seconds = 0;
  timer.innerHTML = `${minutes}:0${seconds}`;
});
