import { useState, useRef } from "react";
import styles from "./ref.module.css";

export default function UseRef3() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    // If a timer is already running, don't start another
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  };

  const stopTimer = () => {
    // Use the stored ID to clear the interval
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div className={styles.ref3}>
      <h1>Seconds: {seconds}</h1>
      <button onClick={() => startTimer()}>Start</button>
      <button onClick={() => stopTimer()}>Stop</button>
    </div>
  );
}
