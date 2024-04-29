import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import FirmPractices from "./components/FirmPractices/FirmPractices";
import ClientsFeedback from "./components/ClientsFeedback/ClientsFeedback";

const App = () => (
  <div className={styles.appContainer}>
    <Navbar />
    <div className={styles.appBodyContainer}>
      <Home />
      <About />
      <FirmPractices />
      <ClientsFeedback />
    </div>
  </div>
);

export default App;
