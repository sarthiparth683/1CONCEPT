import styles from "./Styles/Nav1.module.css";

const Nav1 = () => {
  return (
    <div>
      <nav>
        <div className={styles.box1}>
          <div>Offers</div>
          <div>Fanbook</div>
          <div>Download App</div>
          <div>Find a store near me </div>
        </div>
        <div className={styles.box1}>
          <div>Contact Us</div>
          <div>Track Order</div>
        </div>
      </nav>
    </div>
  );
};

export default Nav1;
