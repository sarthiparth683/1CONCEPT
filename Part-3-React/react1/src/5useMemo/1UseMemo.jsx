//In simple terms: if your component re-renders, React normally recalculates everything inside it. If you wrap a calculation in useMemo, React will remember the previous result and skip recalculating it unless the specific variables it depends on have changed.

import React, { useState, useMemo } from "react";

function ExpensiveCalculator() {
  const [number, setNumber] = useState(0);
  const [num2, setNum2] = useState(0);

  const slowCalculation = (num) => {
    console.log("Running slow calculation...");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }; 

  const doubleNumber = useMemo(() => {
    return slowCalculation(number);
  }, [number]);

  const increment = () => {
    setNum2((prev) => prev + 1);
  };
  // ---------------------------------------------------------

  return (
    <>
      <h3>Doubled Number: {doubleNumber}</h3>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />

      <button onClick={increment}>
        Fast rendering not dependent on useMemo {num2}
      </button>

    </>
  );
}

export default ExpensiveCalculator;