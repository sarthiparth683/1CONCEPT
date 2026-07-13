// Refs in React are incredibly useful for accessing and manipulating DOM elements directly. Refs are also amazing at persisting data between renders which is makes it possible to store persisted component data without causing a re-render when it is changed.

import { useRef } from "react";
import styles from "./ref.module.css";

export default function UseRef1() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <div className={styles.focus}>
        <input ref={inputEl} type="text" />
        {/* ref is short for reference.It is a direct reference to the actual HTML element living in the browser's DOM.Instead of searching through the page using traditional methods like document.getElementById(), React gives you this direct shortcut (ref) so you can point to and talk to that specific element instantly.  */}
        <button onClick={() => onButtonClick()}>Focus the input</button>
      </div>
    </>
  );
}
