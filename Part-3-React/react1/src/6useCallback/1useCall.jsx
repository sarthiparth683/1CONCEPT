import { useCallback, useState, memo } from "react";
import styles from "./useCall.module.css";

const MemoizedChild = memo(({ onClick }) => {
  console.log("Child Component Re-rendered! 🚨");

  return (
    <div>
      <p>I am the child component!</p>
      <button onClick={onClick}>Click Me to increase count</button>
    </div>
  );
});

export default function UseCallBack() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
    console.log("Current count is:", count);
  }, [count]);

  return (
    <>
      {/* change in input doesn't reRender */}
      <div className={styles.box1}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <MemoizedChild onClick={handleClick} />
      </div>
    </>
  );
}
