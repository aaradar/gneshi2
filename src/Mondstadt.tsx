import NavBar from "./navigation/NavBar";
import styles from "./App.module.scss";
import { BackgroundMondstadt } from "./MondstadtBackground";

function Mondstadt() {
  return (
    <div>
      <NavBar />
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <h1>Knights of Favonius</h1>
          {/* <Button /> Render the Button component */}
        </header>
        <div>
          <BackgroundMondstadt />
        </div>
      </div>
    </div>
  );
}

export default Mondstadt;
