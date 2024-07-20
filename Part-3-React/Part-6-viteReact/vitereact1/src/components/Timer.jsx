import React, { useRef, useState } from "react";
const fixNum = (time) => (time < 10 ? `0` + time : time);

const formatTime = (time) => {
  const seconds = time % 60;
  const min = Math.floor(time / 60) % 60;
  return `00:${fixNum(min)}:${fixNum(seconds)}`;
};

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const ref = useRef(null);

  const startTimer = () => {
    if (ref.current !== null) return;

    ref.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(ref.current);
    ref.current = null;
  };
  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  return (
    <div>
      <h3>{formatTime(timer)}</h3>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
