import styles from "./FirmPractices.module.css";

const FirmPractices = () => (
  <div className={styles.container}>
    <h1 className={styles.heading}>Area of Practices</h1>
    <div className={styles.practicesContainer}>
      <div className={`${styles.businessLaw} ${styles.practicesCommonStyles}`}>
        BUSINESS LAW
      </div>
      <div className={`${styles.partnerShip} ${styles.practicesCommonStyles}`}>
        PARTNERSHIP LAW
      </div>
      <div className={`${styles.realEstate} ${styles.practicesCommonStyles}`}>
        REAL ESTATE LAW
      </div>
      <div
        className={`${styles.businessLaw2} ${styles.practicesCommonStyles}`}
      >
        BUSINESS LAW
      </div>
      <div
        className={`${styles.landDisputes} ${styles.practicesCommonStyles}`}
      >
        LANDLORD DISPUTES
      </div>
      <div className={`${styles.elderAbuse} ${styles.practicesCommonStyles}`}>
        ELDER ABUSE
      </div>
    </div>
  </div>
);

export default FirmPractices;
