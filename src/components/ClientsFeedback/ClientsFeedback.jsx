import { clientsFeedbackConfig } from "../../utils/clientsFeedback.js";
import leftArrow from "../../assets/LeftArrow.svg";
import rightArrow from "../../assets/RightArrow.svg";
import ClientCard from "../ClientDetailsCard/ClientDetailsCard.jsx";

import styles from "./ClientsFeedback.module.css";

const ClientsFeedback = () => {
  const renderHeading = () => (
    <div className={styles.headingText}>
      <h1>Whats says our</h1>
      <h1>happy Clients</h1>
    </div>
  );

  const renderHeaderNavigationActions = () => (
    <div className={styles.navigationActionsContainer}>
      <button className={styles.leftNavigationButton}>
        {<img src={leftArrow} alt={"left navigation"} />}
      </button>
      <button className={styles.rightNavigationButton}>
        <img src={rightArrow} alt={"right navigation"} />
      </button>
    </div>
  );

  const renderHeader = () => (
    <div className={styles.headerContainer}>
      {renderHeading()}
      {renderHeaderNavigationActions()}
    </div>
  );

  return (
    <div className={styles.container}>
      {renderHeader()}
      <div className={styles.clientsCardsContainer}>
        {clientsFeedbackConfig.map(item => (
          <ClientCard name={item.name} image={item.image} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ClientsFeedback;
