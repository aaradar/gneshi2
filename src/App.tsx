// import { useState } from 'react'
import styles from "./App.module.scss";
import { Background } from "./Background";
import { Buttons } from "./add-ons/Buttons";
import { Hutao } from "./add-ons/Hutao";
import { Chevreuse } from "./add-ons/Chevreuse";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <h1>Zhongli Piano</h1>
        <p>Press 1,2,3,4,5,6,7 or 8.</p>
        <p>Press HV!</p>
        <Buttons />
        {/* <Button /> Render the Button component */}
      </header>
      <div>
        <Background />
      </div>
      <Hutao />
      <Chevreuse />
    </div>
  );
}

export default App;
