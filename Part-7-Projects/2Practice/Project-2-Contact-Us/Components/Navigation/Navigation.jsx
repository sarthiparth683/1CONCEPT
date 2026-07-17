import React from "react";
import styles from "./nav.module.css";

const Navigation = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <img src="logo.jpg" alt="" />
        <h1 style={{marginLeft:"-450px"}} >CONTACT US</h1>
        <div className={styles.nav2}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </div>
      </nav>
      <p className={styles.para1}  >
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>
    </>
  );
};

export default Navigation;
