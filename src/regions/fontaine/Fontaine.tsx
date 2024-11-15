//import { useState } from "react";
import { FontaineBackground } from "./FontaineBackground";
import NavBar from "../../navigation/NavBar";

function Fontaine() {
  return (
    <div>
      <NavBar />
      <div>
        <header>
          <h1>Zhongli Piano</h1>
        </header>
        <div>
          <FontaineBackground />
        </div>
      </div>
    </div>
  );
}

export default Fontaine;
