import React, { useState, useRef, useEffect } from "react";

export default function UseRef5() {
  const [count, setCount] = useState(0);
  const myRef = useRef(count);

  // Keep the ref strictly in sync with our state
  useEffect(() => {
    myRef.current = count;
  }, [count]);

  const testDangerousClosure = () => {
    // ❌ Dangerous: We capture the primitive value RIGHT NOW.
    const capturedValue = myRef.current;

    setTimeout(() => {
      alert(`Dangerous/Stale Value: ${capturedValue}`);
    }, 3000);
  };

  const testSafeClosure = () => {
    // ✅ Safe: We don't read .current until the timeout actually runs 3 seconds later.
    setTimeout(() => {
      alert(`Safe/Latest Value: ${myRef.current}`);
    }, 3000);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Understanding Stale Closures with useRef</h2>

      <div style={{ marginBottom: "20px" }}>
        <strong>Current Count: {count}</strong>
        <button
          onClick={() => setCount(count + 1)}
          style={{ marginLeft: "10px", padding: "5px 10px" }}
        >
          Increase Count
        </button>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={testDangerousClosure}
          style={{
            padding: "8px 16px",
            backgroundColor: "#ffcccc",
            cursor: "pointer",
          }}
        >
          1. Test Dangerous Closure
        </button>

        <button
          onClick={testSafeClosure}
          style={{
            padding: "8px 16px",
            backgroundColor: "#ccffcc",
            cursor: "pointer",
          }}
        >
          2. Test Safe Closure
        </button>
      </div>

      <p style={{ marginTop: "20px", maxWidth: "500px", lineHeight: "1.5" }}>
        <strong>"Stale" Closures:</strong> Because <code>useRef</code> persists
        across renders, it is often used inside timeouts. However, if you are
        not careful, you might be capturing an old version of a variable in a
        closure.
        <br />
        <br />
        <strong>The Fix:</strong> Always access <code>ref.current</code> inside
        your delayed function, rather than saving the value into a variable
        outside of it.
      </p>
    </div>
  );
}
