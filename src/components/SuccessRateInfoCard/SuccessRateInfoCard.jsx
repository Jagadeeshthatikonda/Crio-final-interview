import giftBox from "../../assets/giftBox.svg";

import styles from "./SuccessRateInfoCard.module.css";

const SuccessRateInfoCard = ({ percentOfSuccessRate, backgroundFilled }) => (
  <div className={styles.container}>
    <img
      src={giftBox}
      alt="git box"
      width={101}
      height={101}
      className={styles.logo}
    />
    <p className={styles.rateText}>{percentOfSuccessRate}% Success Rate</p>
    <p className={styles.rateDescription}>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequatduis enim velit mollit Exer.
    </p>
    <button className={styles.readMoreButton}>Read More</button>
  </div>
);

export default SuccessRateInfoCard;
