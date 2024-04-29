import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
const App = () => (
  <div className={styles.appContainer}>
    <Navbar />
    <div className={styles.appBodyContainer}>
      <Home />
      <About />
    </div>
  </div>
);

export default App;
