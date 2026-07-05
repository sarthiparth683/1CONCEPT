import React, { useState, useEffect } from "react";

const UseEff = () => {
  const [count, setCount] = useState(0);
  const [randomText, setRandomText] = useState("");

  useEffect(() => {
    console.log("1.Runs on Every rendering !");
  });

  useEffect(() => {
    console.log("2.Runs when the component mounts.");
  }, []); // <-- The empty array means it has no dependencies to watch

  useEffect(() => {
    console.log(
      `3.Run on mount AND whenever ${count} changes. Current count: `,
    );
  }, [count]);

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <p>
          <strong>Count:</strong> {count}
        </p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <div>
        <button
          onClick={() => setRandomText(Math.random().toString(36).substring(7))}
        >
          <strong>Random Text: {randomText}</strong>
        </button>
      </div>
    </>
  );
};

export default UseEff;
