import React, { useState } from "react";

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
      <span>{count}</span>
      <button onClick={() => changeCount(1)}>+</button>
      <button onClick={() => changeCount(-1)}>-</button>
      <button onClick={() => resetCount()}>Reset</button>
    </>
  );
}

export default Counter;
