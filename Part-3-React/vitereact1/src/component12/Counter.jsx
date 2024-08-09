import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      <h1 style={styles.counterText}>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
