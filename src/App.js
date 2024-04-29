import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import FirmPractices from "./components/FirmPractices/FirmPractices";

const App = () => (
  <div className={styles.appContainer}>
    <Navbar />
    <div className={styles.appBodyContainer}>
      <Home />
      <About />
      <FirmPractices />
    </div>
  </div>
);

export default App;
