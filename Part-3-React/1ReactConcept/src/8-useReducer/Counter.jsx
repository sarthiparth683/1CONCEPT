import React, { useReducer } from "react";
import styles from "./Counter.module.css"; // Import the CSS module

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.counterContainer}>
      <p className={styles.countDisplay}>Count: {state.count}</p>
      <button
        className={`${styles.button} ${styles.increment}`}
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
      <button
        className={`${styles.button} ${styles.decrement}`}
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
      <button
        className={`${styles.button} ${styles.reset}`}
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
