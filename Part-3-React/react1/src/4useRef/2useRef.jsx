import { useRef } from "react";
import styles from "./ref.module.css";

export default function UseRef2() {
  const count = useRef(0);

  const handleClick = () => {
    count.current = count.current + 1;
    console.log(`Button clicked ${count.current} times`);
  };

  return (
    <button className={styles.btn1} onClick={() => handleClick()}>
      Click me (check console){count.current}Note: The UI will NOT update even
      though count is changing!
    </button>
  );
}
