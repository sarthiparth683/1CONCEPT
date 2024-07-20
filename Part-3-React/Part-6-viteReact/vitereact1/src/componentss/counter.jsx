import React from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter </h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
};

export default Counter;
