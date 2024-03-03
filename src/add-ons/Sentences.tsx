import { useState, useEffect } from "react";

const sentences = [
  "The Anemo Archon is a bit too undisciplined for me. If I were a god, I would not have allowed my realm to look so unorganized and ragged.",
  "Back in the age when the gods still walked upon the earth, the deity whom we now worship as Rex Lapis was but one among many.",
  "Today, of course, Wolvendom is presided over by the Great Wolf King of the North, and the ominous atmosphere that emanates from inside the forest is sufficient to deter most sober-headed visitors from approaching the area.",
  "To be, or not to be, that is the question.",
  'Thus the people of Sangonomiya named their island Watatsumi, meaning "god of the sea," for the Great Serpent was their god.',
];

function Sentence() {
  const [randomSentence, setRandomSentence] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * sentences.length);
      setRandomSentence(sentences[randomIndex]);
    }, 20000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once on component mount

  return (
    <div>
      <p>{randomSentence}</p>
    </div>
  );
}

export default Sentence;
