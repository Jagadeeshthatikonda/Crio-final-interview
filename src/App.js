import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
const App = () => (
  <div className={styles.appContainer}>
    <Navbar />
    <div className={styles.appBodyContainer}>
      <Home />
    </div>
  </div>
);

export default App;
