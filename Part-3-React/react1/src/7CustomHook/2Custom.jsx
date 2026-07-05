import React from "react";
import { useCounter } from './1Custom';

const Custom2 = () => {
  // We call our custom hook here
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <h1>Custom Hook</h1>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ margin: '0 10px' }}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
    </>
  );
};

export default Custom2;
