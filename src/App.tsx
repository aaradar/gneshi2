//import { useState } from "react";
import styles from "./App.module.scss";
import { Background } from "./Background";
import { Buttons } from "./add-ons/Buttons";
import { Hutao } from "./add-ons/Hutao";
import NavBar from "./navigation/NavBar";
import SearchBar from "./navigation/SearchBar";
import Sentence from "./add-ons/Sentences";

function App() {
  return (
    <div>
      <NavBar />
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <h1>Swagli Piano</h1>
          <SearchBar />
          <p>ZhongliType</p>
          <Sentence />
          <Buttons />
          {/* <Button /> Render the Button component */}
        </header>
        <div>
          <Background />
        </div>
        <Hutao />
      </div>
    </div>
  );
}

// export function App() {
//   // return createElement("div", {
//   //   children: createElement("h1", {
//   //     children: "Hello world legit javascript",
//   //   }),
//   // });

//   return (
//     <div>
//       <h1>Hello world</h1>
//     </div>
//   );
// }

export default App;
