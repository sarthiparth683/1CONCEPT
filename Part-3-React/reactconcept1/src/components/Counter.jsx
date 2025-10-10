import { useState } from "react";

const Counter = (props) => {
  const { defaultCount } = props;
  const [count, setCount] = useState(defaultCount);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev - 1)}>Decreament</button>
    </>
  );
};
export default Counter;
