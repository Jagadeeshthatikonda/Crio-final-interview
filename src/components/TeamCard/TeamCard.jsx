import styles from "./TeamCard.module.css";
import { useState } from "react";

const TeamCard = ({ image, name, cases, selected }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={
        isHovered
          ? `${styles.teamSelected} ${styles.teamCommonStyles}`
          : styles.teamCommonStyles
      }
    >
      <img src={image} alt={name} width={68} />
      <div>
        <p className={styles.name}>{name}</p>
        <p className={styles.cases}>{cases} cases</p>
      </div>
    </div>
  );
};

export default TeamCard;
