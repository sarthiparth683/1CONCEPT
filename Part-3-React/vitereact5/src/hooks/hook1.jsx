// Example of incorrect usage of Hooks in a normal JavaScript file

import React, { useState } from "react";

// Custom Hook that violates the Rules of Hooks
const someLogic = () => {
  const [count, setCount] = useState(0);

  if (count === 0) {
    // Attempting to use useState conditionally inside a custom Hook
    useState("Invalid"); // This line violates the Rules of Hooks
  }

  return count;
};

// Component using the custom Hook
const Hook1 = () => {
  const count = someLogic();

  return <div>Count: {count}</div>;
};

export default Hook1;
