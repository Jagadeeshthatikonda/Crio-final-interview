import FirmInfoTabs from "../FirmInfoTabs/FirmInfoTabs";
import Logo from "../Logo/Logo";

import styles from "./Navbar.module.css";

const Navbar = () => (
  <div className={styles.container}>
    <Logo />
    <FirmInfoTabs />
    <button className={styles.contactNowButton}>Contact Now</button>
  </div>
);

export default Navbar;
