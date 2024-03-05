import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.NavBar}>
      <div className={styles.container}>
        <button className={styles.button}>
          <Link className={styles.link} to="/">
            Zhongli Shrine
          </Link>
        </button>
        <button className={styles.button}>
          <Link className={styles.link} to="/Mondstadt">
            Mondstadt
          </Link>
        </button>
        <button className={styles.button}>
          <Link className={styles.link} to="/Liyue">
            Liyue
          </Link>
        </button>
        <button className={styles.button}>
          <Link className={styles.link} to="/Inazuma">
            Inazuma
          </Link>
        </button>
        <button className={styles.button}>
          <Link className={styles.link} to="/Sumeru">
            Sumeru
          </Link>
        </button>
        <button className={styles.button}>
          <Link className={styles.link} to="/Fontaine">
            Fontaine
          </Link>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
