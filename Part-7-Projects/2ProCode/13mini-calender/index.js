const month = document.querySelector(".month");
const weekday = document.querySelector(".weekday");
const day = document.querySelector(".day");
const year = document.querySelector(".year");

window.addEventListener("DOMContentLoaded", () => {
  const date = new Date();
  console.log(Number(date)); // miliseconds passed since 1970
  console.log(date.getDay()); // give number not name
  console.log(date.toLocaleDateString("en-US", { weekday: "long" })); // give name of the day
  console.log(date.getDate());
  console.log(date.getFullYear());
  console.log(date.getMonth()); // give number not name of month
  console.log(date.toLocaleDateString("en-US", { month: "long" })); // give name of month
  //===================================================
  day.textContent = date.getDate();
  year.textContent = date.getFullYear();
  month.textContent = date.toLocaleDateString("en-US", { month: "long" });
  weekday.textContent = date.toLocaleDateString("en-US", { weekday: "long" });
});
