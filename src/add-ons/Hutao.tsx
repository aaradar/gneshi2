import { useEffect, useRef } from "react";

import OrderSound from "../sounds/sillychurl.wav";
import styles from "./Hutao.module.scss";

export function Hutao() {
  const hutaoDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!hutaoDiv.current) {
        return;
      }

      if (event.key === "h" || event.key === "H") {
        const audio = new Audio(OrderSound); // Create an Audio object using the imported audio file
        audio.play(); // Play the sound

        // Add a CSS class to the body to display the image using CSS
        hutaoDiv.current.classList.add(styles.Open);

        // Add event listener to remove the CSS class when the animation ends
        hutaoDiv.current.addEventListener(
          "animationend",
          () => {
            hutaoDiv.current?.classList.remove(styles.Open);
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

  return <div ref={hutaoDiv} className={styles.Hutao} />;
}
