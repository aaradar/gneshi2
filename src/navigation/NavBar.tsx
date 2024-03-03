import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.NavBar}>
      <div className={styles.container}>
        <button>
          <Link to="/Mondstadt">Mondstadt</Link>
        </button>
        <button>
          <Link to="/">Zhongli Shrine</Link>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
