//import { useState } from "react";
import { LiyueBackground } from "./LiyueBackground";
import NavBar from "../../navigation/NavBar";
import styles from "./Liyue.module.scss";
import { InsertImage } from "../../add-ons/InsertImage";
function Liyue() {
  return (
    <div>
      <NavBar />
      <div className={styles.Liyue}>
        <header className={styles.LiyueHeader}>
          <h1>I Will Have Order</h1>
          <InsertImage></InsertImage>
        </header>
        <div>
          <LiyueBackground />
        </div>
      </div>
    </div>
  );
}

export default Liyue;
