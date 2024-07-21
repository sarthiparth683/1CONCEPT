import { useState, useEffect } from "react";
import React from "react";

function UseEffect1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.innerHTML = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export { UseEffect1 };
