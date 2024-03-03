// src/Side Pages/Button.js

import { useEffect } from "react";
import styles from "./Buttons.module.scss";
import RaidenSound from "../sounds/Raiden.wav"; // Import Raiden.wav
import OrderSound from "../sounds/Order.wav"; // Import Order.wav
import XiaoSound from "../sounds/xiao.wav"; // Import Order.wav
import AyatoSound from "../sounds/pace.wav"; // Import Order.wav
import WriothesleySound from "../sounds/home.wav"; // Import Order.wav
import RagnvindrSound from "../sounds/retribution.wav"; // Import Order.wav
import ChatSound from "../sounds/chat.wav"; // Import chat.wav
import WandererSound from "../sounds/Sharp.wav"; // Import chat.wav
import AyakaSound from "../sounds/soRude.wav"; // Import chat.wav
import JeanSound from "../sounds/one.wav"; // Import chat.wav
import SucroseSound from "../sounds/test6308.wav"; // Import chat.wav
import ShenheSound from "../sounds/solo.wav"; // Import chat.wav
import AratakiSound from "../sounds/numero.wav"; // Import chat.wav
import KaeyaSound from "../sounds/frostbite.wav"; // Import chat.wav

export function Buttons() {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "w" || event.key === "W") {
        handleButtonClick(OrderSound);
      } else if (event.key === "q" || event.key === "Q") {
        handleButtonClick(RaidenSound);
      } else if (event.key === "e" || event.key === "E") {
        handleButtonClick(XiaoSound);
      } else if (event.key === "r" || event.key === "R") {
        handleButtonClick(AyatoSound);
      } else if (event.key === "t" || event.key === "T") {
        handleButtonClick(WriothesleySound);
      } else if (event.key === "y" || event.key === "Y") {
        handleButtonClick(RagnvindrSound);
      } else if (event.key === "u" || event.key === "U") {
        handleButtonClick(ChatSound);
      } else if (event.key === "i" || event.key === "I") {
        handleButtonClick(WandererSound);
      } else if (event.key === "o" || event.key === "O") {
        handleButtonClick(AyakaSound);
      } else if (event.key === "p" || event.key === "P") {
        handleButtonClick(JeanSound);
      } else if (event.key === "a" || event.key === "A") {
        handleButtonClick(SucroseSound);
      } else if (event.key === "s" || event.key === "S") {
        handleButtonClick(ShenheSound);
      } else if (event.key === "d" || event.key === "D") {
        handleButtonClick(AratakiSound);
      } else if (event.key === "f" || event.key === "F") {
        handleButtonClick(KaeyaSound);
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
          onClick={() => handleButtonClick(RagnvindrSound)}
        />
      </div>
      <div className={styles.ButtonsRow}>
        <div
          className={`${styles.Button} ${styles.Neuv}`}
          onClick={() => handleButtonClick(ChatSound)}
        />
        <div
          className={`${styles.Button} ${styles.Wanderer}`}
          onClick={() => handleButtonClick(WandererSound)}
        />
        <div
          className={`${styles.Button} ${styles.Ayaka}`}
          onClick={() => handleButtonClick(AyakaSound)}
        />
        <div
          className={`${styles.Button} ${styles.Jean}`}
          onClick={() => handleButtonClick(JeanSound)}
        />
        <div
          className={`${styles.Button} ${styles.Sucrose}`}
          onClick={() => handleButtonClick(SucroseSound)}
        />
        <div
          className={`${styles.Button} ${styles.Shenhe}`}
          onClick={() => handleButtonClick(ShenheSound)}
        />
      </div>
      <div className={styles.ButtonsRow}>
        <div
          className={`${styles.Button} ${styles.Arataki}`}
          onClick={() => handleButtonClick(AratakiSound)}
        />
        <div
          className={`${styles.Button} ${styles.Kaeya}`}
          onClick={() => handleButtonClick(KaeyaSound)}
        />
      </div>
    </div>
  );
}
