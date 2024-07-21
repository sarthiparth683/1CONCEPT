import React, { useRef, useState } from "react";

const Counter2 = () => {
  const ref = useRef(0);
  //data persist across re-rendering
  //this will use VDOM
  //directly access the DOM
  //   console.log(ref)
  //   console.log(ref.current)
  const handleAdd = () => {
    ref.current = ref.current + 1;
    console.log(ref);
    console.log(ref.current);
  };
  const handleRemove = () => {
    ref.current = ref.current - 1;
    console.log(ref);
    console.log(ref.current);
  };
  return (
    <div>
      <h2>Counter: {ref.current}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleRemove}>-</button>
    </div>
  );
};

export default Counter2;
