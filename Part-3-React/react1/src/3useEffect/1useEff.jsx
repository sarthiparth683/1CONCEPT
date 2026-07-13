import React, { useState, useEffect } from "react";
import styles from "./Eff.module.css";

export default function UseEff() {
  const [count, setCount] = useState(0);
  const [randomText, setRandomText] = useState("");

  useEffect(() => {
    console.log("1.Runs on Every rendering !");
  });

  useEffect(() => {
    console.log("2.Runs when the component mounts.");
  }, []); // <-- The empty array means it has no dependencies to watch

  useEffect(() => {
    console.log(
      `3.Run on mount AND whenever ${count} changes. Current count: `,
    );
  }, [count]);

  return (
    <>
      <div className={styles.box1}>
        <strong>Count:{count} </strong>
        <button className={styles.btn1} onClick={() => setCount(count + 1)}>
          +
        </button>
        <button
          className={styles.btn2}
          onClick={() => setRandomText(Math.random().toString(36).substring(7))}
        >
          <strong>Random Text: {randomText}</strong>
        </button>
      </div>
    </>
  );
}
