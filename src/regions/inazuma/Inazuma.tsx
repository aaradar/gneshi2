//import { useState } from "react";
import { InazumaBackground } from "./InazumaBackground";
import NavBar from "../../navigation/NavBar";
import styles from "./Inazuma.module.scss";

function Inazuma() {
  return (
    <div>
      <NavBar />
      <div className={styles.Inazuma}>
        <header className={styles.InazumaHeader}>
          <h1>Who?</h1>
        </header>
        <div>
          <InazumaBackground />
        </div>
      </div>
    </div>
  );
}

export default Inazuma;
