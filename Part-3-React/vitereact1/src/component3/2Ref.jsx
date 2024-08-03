import React, { useState, useEffect, useRef } from "react";

function Ref1() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  const prevCount = prevCountRef.current;

  return (
    <div>
      <p>Previous Count: {prevCount}</p>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Ref1;
