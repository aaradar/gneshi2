//import { useState } from "react";
import { InazumaBackground } from "./InazumaBackground";
import NavBar from "../../navigation/NavBar";

function Inazuma() {
  return (
    <div>
      <NavBar />
      <div>
        <header>
          <h1>Zhongli Piano</h1>
        </header>
        <div>
          <InazumaBackground />
        </div>
      </div>
    </div>
  );
}

export default Inazuma;
