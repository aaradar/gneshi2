import { useState } from "react";
import styles from "./SearchBar.module.scss"; // Import the CSS module

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Clear the input
      setSearchTerm("");
    }
  };

  return (
    <div className={styles["search-bar-container"]}>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search..."
        className={styles["search-input"]}
      />
      <button
        onClick={() => setSearchTerm("")}
        className={styles["search-button"]}
      >
        Clear
      </button>
    </div>
  );
}

export default SearchBar;
