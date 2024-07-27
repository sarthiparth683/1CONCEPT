import React from "react";

import { useState } from "react";

// useState remembers value though re-renders but
// but it triggers re-renders

const ButtonWithUseState = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  console.log("ButtonWithUseState rendering...");
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>BUTTON WITH USE STATE</button>
    </div>
  );
};

export default ButtonWithUseState;
