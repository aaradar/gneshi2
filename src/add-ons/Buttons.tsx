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
      if (event.key === "2" || event.key === "@") {
        handleButtonClick(OrderSound);
      } else if (event.key === "1" || event.key === "!") {
        handleButtonClick(RaidenSound);
      } else if (event.key === "3" || event.key === "#") {
        handleButtonClick(XiaoSound);
      } else if (event.key === "4" || event.key === "$") {
        handleButtonClick(AyatoSound);
      } else if (event.key === "5" || event.key === "%") {
        handleButtonClick(WriothesleySound);
      } else if (event.key === "6" || event.key === "^") {
        handleButtonClick(RagnvindrSound);
      } else if (event.key === "7" || event.key === "&") {
        handleButtonClick(ChatSound);
      } else if (event.key === "8" || event.key === "*") {
        handleButtonClick(WandererSound);
      } else if (event.key === "9" || event.key === "(") {
        handleButtonClick(AyakaSound);
      } else if (event.key === "0" || event.key === ")") {
        handleButtonClick(JeanSound);
      } else if (event.key === "q" || event.key === "Q") {
        handleButtonClick(SucroseSound);
      } else if (event.key === "w" || event.key === "W") {
        handleButtonClick(ShenheSound);
      } else if (event.key === "e" || event.key === "E") {
        handleButtonClick(AratakiSound);
      } else if (event.key === "r" || event.key === "R") {
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
