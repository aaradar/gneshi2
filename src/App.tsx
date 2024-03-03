// import { useState } from 'react'
import styles from "./App.module.scss";
import { Background } from "./Background";
import { Buttons } from "./Buttons";
import "./ScaryHandler";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <h1>Zhongli Piano</h1>
        <p>Press 1,2,3,4,5,6, or 7.</p>
        <p>Scroll down for more!</p>
        <Buttons />
        {/* <Button /> Render the Button component */}
      </header>
      <div>
        <Background />
      </div>
    </div>
  );
}

export default App;
