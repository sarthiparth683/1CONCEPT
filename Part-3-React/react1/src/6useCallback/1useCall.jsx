import React, { useState, useCallback, memo } from "react";
// In React, when a parent component updates, it automatically re-renders all of its children by default. memo allows you to tell React: "Hey, only re-render this child if the data passed into it (the props) actually changed."
// onClick is prop used to add value in component
// To be precise, children is the technical name React uses for everything you put between the opening and closing tags of a component.
const ChildButton = memo(({ onClick, children }) => {
  console.log(`[Re-rendered] Button: ${children}`); 
  return (
    <button onClick={onClick} style={{ padding: "10px", fontSize: "16px" }}>
      {children}
    </button>
  );
});

export default function UseCallBack() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1); // NEW: The condition that will change!
  const [text, setText] = useState("");

  // ✅ The Condition Array:
  // We tell React: "Keep this function cached, UNLESS the 'step' variable changes. 
  // If 'step' changes, you MUST rebuild the function so it can access the new step value inside its closure."
  const increment = useCallback(() => {
    setCount((prev) => prev + step); 
  }, [step]); // <-- We added 'step' here!

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Count: {count}</h2>
        {/* Scenario 1: Changing this WILL cause the child to re-render */}
      <ChildButton onClick={increment}>
        Increment by {step}
      </ChildButton>

      <hr style={{ margin: "20px 0" }} />

      {/* Scenario 2: Changing this WILL cause the child to re-render */}
      <h3>1. Change the Step (Triggers Re-render)</h3>
      <button onClick={() => setStep(1)}>Step by 1</button>
      <button onClick={() => setStep(5)}>Step by 5</button>
      <p>Current Step: {step}</p>

      <hr style={{ margin: "20px 0" }} />

      {/* Scenario 3: Changing this will NOT cause the child to re-render */}
      <h3>2. Type in the input (Skips Re-render)</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}