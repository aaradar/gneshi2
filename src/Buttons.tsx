// src/Side Pages/Button.js

import { useEffect } from "react";
import styles from "./Buttons.module.scss";
import RaidenSound from "./sounds/Raiden.wav"; // Import Raiden.wav
import OrderSound from "./sounds/Order.wav"; // Import Order.wav
import XiaoSound from "./sounds/xiao.wav"; // Import Order.wav
import AyatoSound from "./sounds/pace.wav"; // Import Order.wav
import WriothesleySound from "./sounds/home.wav"; // Import Order.wav
import DilucSound from "./sounds/retribution.wav"; // Import Order.wav
import ChatSound from "./sounds/chat.wav"; // Import chat.wav

export function Buttons() {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "g" || event.key === "G" || event.key === "1") {
        handleButtonClick(OrderSound);
      } else if (event.key === "e" || event.key === "E" || event.key === "2") {
        handleButtonClick(RaidenSound);
      } else if (event.key === "x" || event.key === "X" || event.key === "3") {
        handleButtonClick(XiaoSound);
      } else if (event.key === "k" || event.key === "K" || event.key === "4") {
        handleButtonClick(AyatoSound);
      } else if (event.key === "c" || event.key === "C" || event.key === "5") {
        handleButtonClick(WriothesleySound);
      } else if (event.key === "f" || event.key === "F" || event.key === "6") {
        handleButtonClick(DilucSound);
      } else if (event.key === "n" || event.key === "N" || event.key === "7") {
        handleButtonClick(ChatSound);
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  const handleButtonClick = (soundFile: string) => {
    const audio = new Audio(soundFile); // Create an Audio object using the selected sound file
    audio.play(); // Play the sound
  };

  return (
    <div className={styles.ButtonsColumn}>
      <div className={styles.ButtonsRow}>
        <div
          className={`${styles.Button} ${styles.ElectroSigil}`}
          onClick={() => handleButtonClick(RaidenSound)}
        />
        <div
          className={`${styles.Button} ${styles.GeoSigil}`}
          onClick={() => handleButtonClick(OrderSound)}
        />
        <div
          className={`${styles.Button} ${styles.AnemoSigil}`}
          onClick={() => handleButtonClick(XiaoSound)}
        />
        <div
          className={`${styles.Button} ${styles.HydroSigil}`}
          onClick={() => handleButtonClick(AyatoSound)}
        />
        <div
          className={`${styles.Button} ${styles.CryoSigil}`}
          onClick={() => handleButtonClick(WriothesleySound)}
        />
        <div
          className={`${styles.Button} ${styles.PyroSigil}`}
          onClick={() => handleButtonClick(DilucSound)}
        />
      </div>
      <div
        className={`${styles.Button} ${styles.Neuv}`}
        onClick={() => handleButtonClick(ChatSound)}
      ></div>
      <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
    </div>
  );
}
