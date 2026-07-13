import React from "react";
import styles from "./style2.module.css";

export default function UserProfile({ name, age }) {
  // function UserProfile({ name, age }) {
  return (
    <div className={styles.card}>
      <h2>
        {name} age={age}
      </h2>
    </div>
  );
}

// export default UserProfile;
// can be exported directly form function itself
