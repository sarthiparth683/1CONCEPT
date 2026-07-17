import React from "react";
import styles from "./ctmHook.module.css";
import { useCounter } from "./1Custom";

const Custom2 = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <>
      <div className={styles.box1}>
        <h1>Custom Hook</h1>
        <h1>Count: {count}</h1>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => reset()}>Reset</button>
      </div>
    </>
  );
};

export default Custom2;
