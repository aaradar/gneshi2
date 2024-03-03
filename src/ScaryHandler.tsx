// src/Side Pages/ScaryHandler.js

// Import the audio file
import OrderSound from "./sounds/sillychurl.wav";

const handleKeyPress = (event) => {
  if (event.key === "h" || event.key === "H") {
    const audio = new Audio(OrderSound); // Create an Audio object using the imported audio file
    audio.play(); // Play the sound

    // Add a CSS class to the body to display the image using CSS
    document.body.classList.add("show-scary-image");

    // Add event listener to remove the CSS class when the animation ends
    document.body.addEventListener(
      "animationend",
      () => {
        document.body.classList.remove("show-scary-image");
      },
      { once: true }
    ); // { once: true } ensures that the event listener is removed after it's triggered once
  }
};

// Add event listener to handle key press events
document.addEventListener("keypress", handleKeyPress);
