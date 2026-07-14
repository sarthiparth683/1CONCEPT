import React, { useState, useRef, useEffect } from "react";
import styles from "./ref.module.css";

export default function UseRef5() {
  const [count, setCount] = useState(0);
  const myRef = useRef(count);

  // Keep the ref strictly in sync with our state
  useEffect(() => {
    myRef.current = count;
  }, [count]);

  const testDangerousClosure = () => {
    // ❌ Dangerous: We capture saving the value into a variable outside of it.Why is it dangerous?Because the timeout is using the capturedValue variable, which took a "snapshot" of the data at the exact moment the button was clicked. It has no idea the count changed afterward. In real apps, this causes bugs where your app submits old data to a server or displays incorrect information to a user.
    const capturedValue = myRef.current;

    setTimeout(() => {
      alert(`Dangerous/Stale Value: ${capturedValue}`);
    }, 2000);
  };

  const testSafeClosure = () => {
    // ✅ Safe: We don't read .current until the timeout actually runs 2 seconds later.Why is it safe?Because useRef returns a mutable object (an object that can change) that looks like this: { current: 0 }. When you update it, React just changes the value inside that same object box. By checking myRef.current inside the timeout, you are looking inside the box at the very last second, ensuring you see the newest number.
    setTimeout(() => {
      alert(`Safe/Latest Value: ${myRef.current}`);
    }, 2000);
  };

  return (
    <div className={styles["ref5-container"]}>
      <h2>Understanding Stale Closures with useRef</h2>

      <div className={styles["ref5-counter-section"]}>
        <strong>Current Count: {count}</strong>
        <button
          className={styles["ref5-increase-btn"]}
          onClick={() => setCount(count + 1)}
        >
          Increase Count
        </button>
      </div>

      <div className={styles["ref5-actions-container"]}>
        <button
          className={styles["ref5-dangerous-btn"]}
          onClick={testDangerousClosure}
        >
          1. Test Dangerous Closure
        </button>

        <button onClick={testSafeClosure} className={styles["ref5-safe-btn"]}>
          2. Test Safe Closure
        </button>
      </div>

      <p className={styles["ref5-description"]}>
        <strong>"Stale" Closures:</strong> Because <code>useRef</code> persists
        across renders, it is often used inside timeouts. However, if you are
        not careful, you might be capturing an old version of a variable in a
        closure.
        <br />
        <br />
        <strong>The Fix:</strong> Always access <code>ref.current</code> inside
        your delayed function, rather than saving the value into a variable
        outside of it.
      </p>
    </div>
  );
}
