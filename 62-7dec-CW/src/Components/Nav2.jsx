import styles from "./Styles/Nav2.module.css";

const Nav2 = () => {
  return (
    <div className={styles.box1}>
      <div>
        <img className={styles.img1} src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="Bewakoof" />
      </div>
      <div>MEN</div>
      <div>WOMEN</div>
      <div>MOBILE COVERS</div>

      <div className={styles.input} >
        <img className={styles.img2} src="https://www.shutterstock.com/image-vector/search-icon-vector-magnifying-glass-260nw-2421386915.jpg" alt="" />
        <input type="text" placeholder="Search by products" />
      </div>

      <div> LOGIN</div>

      <div>
        <img
          className={styles.img3}
          src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className={styles.img4}
          src="https://static.vecteezy.com/system/resources/previews/007/372/197/non_2x/bag-icon-shopping-bag-icon-bag-logo-bag-illustration-free-vector.jpg"
          alt=""
        />
      </div>
    </div>
  
  );
};

export default Nav2;
