//import { useState } from "react";
import { NatlanBackground } from "./NatlanBackground";
import NavBar from "../../navigation/NavBar";

function Natlan() {
  return (
    <div>
      <NavBar />
      <div>
        <header>
          <h1>Natlan</h1>
        </header>
        <div>
          <NatlanBackground />
        </div>
      </div>
    </div>
  );
}

export default Natlan;
