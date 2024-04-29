import logo from "../../assets/logo.svg";

import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="lawfirmLogo" width={30} height={30} />
      <p className={styles.logoText}>IGSTUDIO</p>
    </div>
  );
};

export default Logo;
