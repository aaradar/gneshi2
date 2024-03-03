import NavBar from "./navigation/NavBar";
import styles from "./App.module.scss";
import { Background } from "./Background";

function Mondstadt() {
  return (
    <div>
      <NavBar />
      <h1 className={styles.Mondstadt}>Welcome to Mondstadt</h1>
      <Background />
    </div>
  );
}

export default Mondstadt;
