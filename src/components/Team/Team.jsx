import { teamsConfigData } from "../../utils/teamConfig.js";

import styles from "./Team.module.css";
import TeamCard from "../TeamCard/TeamCard";

const Team = () => (
  <div className={styles.container}>
    <p className={styles.header}>Our Team</p>
    <div className={styles.teamCards}>
      {teamsConfigData.map(item => (
        <TeamCard
          key={item.id}
          image={item.image}
          name={item.name}
          cases={item.cases}
          selected={item.selected}
        />
      ))}
    </div>
  </div>
);

export default Team;
