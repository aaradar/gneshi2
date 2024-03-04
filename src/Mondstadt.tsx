import NavBar from "./navigation/NavBar";
import styles from "./Mondstadt.module.scss";
import { BackgroundMondstadt } from "./MondstadtBackground";
import MondstadtPicture from "./add-ons/MondstadtPicture";

function Mondstadt() {
  // Array containing data for each character
  const characters = [
    {
      name: "Jean",
      description:
        "Jean: The Acting Grandmaster of Mondstadt. She is always busy handling unrest across Mondstadt and tirelessly working to maintain the City of Freedom.",
    },
    {
      name: "Diluc",
      description:
        "Diluc Ragnvindr is a wealthy and enigmatic individual who serves as the owner of the Dawn Winery in Mondstadt.",
    },
    {
      name: "Kaeya",
      description:
        "Kaeya Alberich is the Cavalry Captain of the Knights of Favonius and holds the title of 'Dashing Gentleman'.",
    },
    {
      name: "Venti",
      description:
        "Venti is the bard of Mondstadt and the current Barbatos, one of The Seven. He is known for his mischievous personality and love for alcohol.",
    },
    {
      name: "Eula",
      description:
        "Eula Lawrence is the Spindrift Knight of Mondstadt and the Captain of the Knights of Favonius Reconnaissance Company.",
    },
    {
      name: "Klee",
      description:
        "Klee is a spark of energy from Mondstadt and is known for her love of explosives and explosives and explosives.",
    },
    {
      name: "Mona",
      description:
        "Mona Megistus is a mysterious astrologer from Mondstadt who possesses immense knowledge of astrology and elemental magics.",
    },
  ];

  return (
    <div>
      <NavBar />
      <div className={styles.Mond}>
        <header className={styles.MondHeader}>
          <h1>Knights of Favonius</h1>
          <div className={styles.MondBox}>
            <div className={styles.MondColumn}>
              {characters.map((character, index) => (
                <div className={styles.MondRow} key={index}>
                  <MondstadtPicture character={character.name} />
                  <p>{character.description}</p>
                </div>
              ))}
            </div>
          </div>
        </header>
        <div>
          <BackgroundMondstadt />
        </div>
      </div>
    </div>
  );
}

export default Mondstadt;
