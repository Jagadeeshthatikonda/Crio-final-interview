import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import FirmPractices from "./components/FirmPractices/FirmPractices";
import ClientsFeedback from "./components/ClientsFeedback/ClientsFeedback";
import Team from "./components/Team/Team";

const App = () => (
  <div className={styles.appContainer}>
    <Navbar />
    <div className={styles.appBodyContainer}>
      <Home />
      <About />
      <FirmPractices />
      <ClientsFeedback />
      <Team />
    </div>
  </div>
);

export default App;
