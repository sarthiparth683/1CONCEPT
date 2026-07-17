import React from "react";
import styles from "./style2.module.css";

function Comp(props) {
  return (
    // <div className={styles.welcome}>
    <div className={`${styles.welcome}  ${styles.anotherClass}`}>
      <li>npm create vite@latest</li>
      <li>need to remove ts(type Script)</li>
      <li>Test component-1</li>
      <li>
        Class names and IDs (e.g., .card, #header): Treated as local.But, HTML Tag
        names and the Universal selector (e.g., div, li, *): Treated as global in css module.
      </li>
      <li>className is given inside curly brackets in module.css but in normal css inside "" className is defined </li>
      <h1>
        Hello, {props.name} ! , age{props.age}, {props.prop3}, {props.prop4}
      </h1>
    </div>
  );
}

export default Comp;
