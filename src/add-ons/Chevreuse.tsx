import { useEffect, useRef } from "react";

import ChevreuseSound from "../sounds/crimes.wav";
import styles from "./Hutao.module.scss";

export function Chevreuse() {
  const chevreuseDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!chevreuseDiv.current) {
        return;
      }

      if (event.key === "v" || event.key === "V") {
        const audio = new Audio(ChevreuseSound); // Create an Audio object using the imported audio file
        audio.play(); // Play the sound

        // Add a CSS class to the body to display the image using CSS
        chevreuseDiv.current.classList.add(styles.Open);

        // Add event listener to remove the CSS class when the animation ends
        chevreuseDiv.current.addEventListener(
          "animationend",
          () => {
            chevreuseDiv.current?.classList.remove(styles.Open);
          },
          { once: true }
        ); // { once: true } ensures that the event listener is removed after it's triggered once
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return <div ref={chevreuseDiv} className={styles.Chevreuse} />;
}
