function setAlarm(hour, minute) {
  const now = new Date();
  const alarmDate = new Date();
  alarmDate.setHours(hour);
  alarmDate.setMinutes(minute);

  const difference = alarmDate - now;
  console.log(difference / 1000, "Time difference in seconds");

  if (difference < 0) {
    console.log("Please provide future time");
    return;
  }

  setTimeout(() => {
    console.log("Time is up! Alarm Alarm Alarm");
  }, difference);

  // setInterval(() => {
  //   console.log("Time is up! Alarm Alarm Alarm");
  // }, difference);

  console.log(now, "---", alarmDate);
}

setAlarm(7, 46);
