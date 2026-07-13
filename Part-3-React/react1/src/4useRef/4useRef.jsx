import { useState, useEffect, useRef } from "react";
import styles from "./ref.module.css";

export default function UseRef4() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className={styles.ref4}>
      <b style={{ fontSize: "25px" }}>Before: {prevCountRef.current}</b>
      <b style={{ fontSize: "25px" }}>Now: {count}</b>
      <button
        style={{ width: "100px", height: "25px" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <li>
        When should you NOT use useRef? It is temliting to use useRef for
        everything to "avoid re-renders," but be careful:Don't use it for
        anything the user needs to see. If you update a ref variable that is
        displayed on the screen, the user will never see the update because the
        component won't re-render!Don't read/write refs during the "render"
        phase. Keep your ref.current logic inside useEffect or event handlers.
        Accessing or changing it directly in the main body of your component
        function can lead to unpredictable behavior because React might call
        your component function multiple times during the render process.
      </li>

      <li>The "Render Phase" Rule (CRITICAL)</li>
      <li>
        Don't do myRef.current = someValue directly inside the body of your
        function component.
      </li>
      <li>
        The Fix: Always read or write ref.current inside useEffect,
        useLayoutEffect, or event handlers (like onClick).
      </li>
    </div>
  );
}
