import styles from "./Footer2.module.css";

const Footer2 = () => {
  return (
    <>
      <div className={styles.box1}>
        <div>
          <h3>Men's Clothing</h3>
          <p>Top Wear</p>
          <p>Men's New Arrivals</p>
          <p>Men's T-Shirts</p>
          <p>Men's Hoodies & Sweatshirts</p>
          <p>Oversized T-Shirts for Men</p>
        </div>

        <div>
          <h3>Women's Clothing</h3>
          <p>Women's Top Wear</p>
          <p>Women's New Arrivals</p>
          <p>Women's T-Shirts</p>
          <p>Women's Fashion Tops</p>
          <p>Women's Tank Tops</p>
        </div>

        <div> 
          <h3>Mobile Covers</h3>
          <p>Apple</p>
          <p>Realme</p>
          <p>Samsung</p>
          <p>Xiaomi</p>
          <p>Oneplus</p>
        </div>

        <div style={{ color: "blue" }}>
          <h3>FANBOOK</h3>
          <h3>OFFERS</h3>
          <h3>SITEMAP</h3>
        </div>
      </div>
    </>
  );
};

export default Footer2;
