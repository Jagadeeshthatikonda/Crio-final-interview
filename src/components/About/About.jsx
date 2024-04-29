import styles from "./About.module.css";
import SuccessRateInfoCard from "../SuccessRateInfoCard/SuccessRateInfoCard";

const About = () => {
  const renderAboutUsLeftSection = () => (
    <div className={styles.aboutUsContentLeftSectionContainer}>
      <h1 className={styles.aboutBasicInfoText}>Let's Introduce</h1>
      <h1>Ourself</h1>
    </div>
  );

  const renderAboutUsRightSection = () => (
    <div className={styles.aboutUsContentRightSectionContainer}>
      <h1 className={styles.criminalLawyerHeading}>Criminal Lawyer</h1>
      <p className={styles.criminalLawyerDescription}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exercitation.
      </p>
    </div>
  );

  const renderSuccessRateInfo = () => (
    <div className={styles.successRateInfoCards}>
      <SuccessRateInfoCard percentOfSuccessRate={98} />
      <SuccessRateInfoCard percentOfSuccessRate={100} backgroundFilled />
      <SuccessRateInfoCard percentOfSuccessRate={100} />
    </div>
  );

  return (
    <div className={styles.container} id="aboutUs">
      <div className={styles.aboutUsBasicInfoContainer}>
        {renderAboutUsLeftSection()}
        <div class={styles.verticalLine}></div>
        {renderAboutUsRightSection()}
      </div>
      <h1 className={styles.successRateInfoCardHeader}>Why Choose us?</h1>
      {renderSuccessRateInfo()}
    </div>
  );
};

export default About;
