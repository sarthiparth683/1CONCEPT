import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  if (action === "ADD") {
    return state + 1;
  } else if (action === "REDUCE") {
    return state - 1;
  }
  else{
    throw new Error ("Action type not matched");
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, 10);

  const handleInc = () => {
    dispatch("ADD");
  };

  const handleDec = () => {
    dispatch("REDUCE");
  };

  return (
    <div  style={{background:"lightblue"}} >
      <h1>Counter: {state} </h1>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
};

export default Counter;
