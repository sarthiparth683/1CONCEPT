import React, { useState } from "react";
import styles from "./state.module.css";

const Counter2 = () => {
  const [change, setChange] = useState(0);
  function increment() {
    setChange((prev) => prev + 1);
  }
  function decrement() {
    setChange((prev) => prev - 1);
  }
  function reset() {
    // setChange((prev) => (prev = 0));
    setChange(0);
  }

  return (
    <div className={styles.box2}>
      <b>{change}</b>
      {/* Arrow Function (Works perfectly): onClick={() => increment(5)} — This waits for the click, then executes the anonymous function, which calls increment(5) with the correct value. */}
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
};

export default Counter2;
