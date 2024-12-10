import styles from "./Foot1.module.css";

const Footer1 = () => {
  return (
    <>
      <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg" alt="" />

      <div className={styles.box1}>
        <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-tribe-trademark-logo.svg" alt="" className={styles.img1} />

        <div className={styles.box2}>
          <div>
            <span>CUSTOMER SERVICE</span>
            <p>Contact Us</p>
            <p>Track Order</p>
            <p>Return Order</p>
            <p>Cancel Order</p>
          </div>

          <div>
            <span>COMPANY</span>
            <p>About Us</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>We are Hiring</p>
            <span>DOWNLOAD THE APP</span> <br />
            <img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fweb%2Fapp_android_v1.png&w=128&q=75" alt="" />
            <img
              src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fweb%2Fapp_ios_v1.png&w=128&q=75"
              alt=""
              style={{ marginLeft: "10px" }}
            />
          </div>

          <div className={styles.box3}>
            <span>CONNECT WITH US</span>

            <div className={styles.connect1}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png" alt="" />
              <p>4.7M People like this</p>
            </div>

            <div className={styles.connect1}>
              <img src="https://img.freepik.com/free-vector/instagram-logo_1199-122.jpg?semt=ais_hybrid" alt="" />
              <p>1M People like this</p>
            </div>

            <div className={styles.connect2}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="" />
              <img src="https://seeklogo.com/images/T/threads-logo-9F3F8228AC-seeklogo.com.png" alt="" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeRVrwAKugaQhzb_8kwYlMeYVPikTgVTa6tg&s" alt="" />
              <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCeSTT3Dtrm4FT_mecUmW0ks0Uml6MDDtqiA&s" alt="" />
            </div>
          </div>

          <div className={styles.box4}>
            <span>KEEP UP TO DATE</span> <br />
            <input type="email" placeholder="Enter Email id:" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer1;
