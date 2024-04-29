import styles from "./ClientDetailsCard.module.css";

const ClientDetailsCard = ({ name, image }) => (
  <div className={styles.container}>
    <img
      src={image}
      alt="profile"
      width={105}
      height={102}
      className={styles.image}
    />
    <p className={styles.clientName}>{name}</p>
    <p className={styles.designation}>Ceo of Hunt</p>
    <p className={styles.feedbackText}>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do
      amet sint. Velit officia
    </p>
  </div>
);

export default ClientDetailsCard;
