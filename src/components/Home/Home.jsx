import heroImage from "../../assets/HeroImage.png";
import messageIcon from "../../assets/MessageIcon.svg";

import styles from "./Home.module.css";

const HeroSection = () => {
  const renderHomeInfoContent = () => (
    <div className={styles.homeInfoContainer}>
      <h1>You don't have to </h1>
      <h1 className={styles.fightThemAlone}>Fight them Alone.</h1>
      <p className={styles.homeDescription}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
        curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
        hac massa gravida arcu interdum proin curae.
      </p>
      <div className={styles.emailContainer}>
        <img
          className={styles.messageIcon}
          src={messageIcon}
          alt="message icon"
          width={22}
          height={22}
        />
        <input type="text" placeholder="Enter your email address" />
        <button>Let's Talk</button>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      {renderHomeInfoContent()}
      <img className={styles.heroImage} src={heroImage} alt="heroImage" />
    </div>
  );
};

export default HeroSection;
