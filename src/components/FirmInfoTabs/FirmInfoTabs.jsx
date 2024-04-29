import styles from "./FirmInfoTabs.module.css";

//TODO: Here dummy ids must be set properly

const FirmInfoTabs = () => {
  return (
    <div className={styles.container}>
      <a href="#dummy1" className={styles.anchorText}>
        Home
      </a>
      <a href="#dummy2" className={styles.anchorText}>
        Attorneys
      </a>
      <a href="#dummy3" className={styles.anchorText}>
        Practice Areas
      </a>
      <a href="#dummy4" className={styles.anchorText}>
        About Us
      </a>
    </div>
  );
};

export default FirmInfoTabs;
