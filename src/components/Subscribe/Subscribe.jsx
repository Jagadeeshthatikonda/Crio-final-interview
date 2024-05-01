import styles from "./Subscribe.module.css";

const Subscribe = () => (
  <div className={styles.container}>
    <h1 className={styles.heading}>Subscribe Our Newsletter</h1>
    <div className={styles.content}>
      <input
        type="text"
        placeholder="Name:"
        className={styles.inputNameStyles}
      />
      <input
        type="text"
        placeholder="Enter your Email"
        className={styles.inputEmailStyles}
      />
      <button className={styles.sendButton}>SEND</button>
    </div>
  </div>
);

export default Subscribe;
