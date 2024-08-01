import React from "react";

const Purefn = () => {
  function sum(a, b) {
    return a + b;
  }

  return (
    <div>
      <b>Pure Function Example in JavaScript:- Sum = {sum(4, 2)}</b> <br />
      Pure Functions Definition: A pure function is a function that, given the
      same input, will always return the same output and does not cause any
      observable side effects. Characteristics: Deterministic: For the same set
      of inputs, the function always produces the same output. No Side Effects:
      The function doesn't alter any external state (e.g., global variables, I/O
      operations)
    </div>
  );
};

export default Purefn;
