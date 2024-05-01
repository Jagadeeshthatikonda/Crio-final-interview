import styles from "./Footer.module.css";
import instagramLogo from "../../assets/instagram.svg";
import facebookLogo from "../../assets/facebook.svg";
import twitterLogo from "../../assets/twitter.svg";
import pinterestLogo from "../../assets/pinterest.svg";
import Logo from "../Logo/Logo";
import FirmInfoTabs from "../FirmInfoTabs/FirmInfoTabs";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <Logo />
      <FirmInfoTabs />
      <div className={styles.logos}>
        <img src={instagramLogo} alt="instagram" width={30} />
        <img src={facebookLogo} alt="facebook" width={30} />
        <img src={twitterLogo} alt="twitter" width={30} />
        <img src={pinterestLogo} alt="pinterest" width={30} />
      </div>
    </div>
    <div className={styles.privacyPolicyContent}>
      <p>© 2020 Acme. All right reserved.</p>
      <p>Privacy Policy</p>
      <p>Terms of Service</p>
    </div>
  </footer>
);

export default Footer;
