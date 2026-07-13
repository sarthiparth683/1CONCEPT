import React, { useState } from "react";
import styles from "./state.module.css";

function Counter() {
  const [count, setCount] = useState(0); // 0 is initial value

  function changeCount(amount) {
    setCount((prevCount) => prevCount + amount);
  } // instead of two seperate function for increment or decrement we have one function which does both

  function resetCount() {
    setCount(0);
  }

  return (
    <>
      <div className={styles.box1}>
        <b>{count}</b>
        <button onClick={() => changeCount(1)}>+</button>
        <button onClick={() => changeCount(-1)}>-</button>
        <button onClick={() => resetCount()}>Reset</button>
      </div>
    </>
  );
}

export default Counter;
