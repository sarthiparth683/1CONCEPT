import React, { useRef, useState } from "react";

const Counter = () => {
  const countRef = useRef(0);
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    countRef.current = countRef.current + 1;
  };

  return (
    <div>
      <h1>Counter:{countRef.current}</h1>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Counter;
