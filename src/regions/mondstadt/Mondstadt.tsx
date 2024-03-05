import { BackgroundMondstadt } from "./MondstadtBackground";
import MondstadtPicture from "./MondstadtPicture";
import NavBar from "../../navigation/NavBar";
import styles from "./Mondstadt.module.scss";

function Mondstadt() {
  // Array containing data for each character
  const characters = [
    {
      name: "Albedo",
      description:
        "Albedo, known as the Kreideprinz, is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.",
      birthday: "September 13th",
    },
    {
      name: "Amber",
      description:
        "Amber, the Outrider for the Knights of Favonius, fearlessly patrols the wilds of Mondstadt, safeguarding its borders from any threats that may arise.",
      birthday: "August 10th",
    },
    {
      name: "Barbara",
      description:
        "Barbara, a devoted deaconess of the Church of Favonius, uses her healing powers to bring comfort and relief to those in need.",
      birthday: "July 5th",
    },
    {
      name: "Bennett",
      description:
        "Bennett, an adventurous member of the Adventurers' Guild, embarks on daring quests to uncover treasure and defeat monsters.",
      birthday: "February 29th",
    },
    {
      name: "Diluc",
      description:
        "Diluc Ragnvindr, the enigmatic owner of the Dawn Winery, is a formidable warrior and skilled tactician.",
      birthday: "April 30th",
    },
    {
      name: "Diona",
      description:
        "Diona, a skilled bartender and expert mixologist, runs the popular tavern Cat's Tail in Mondstadt.",
      birthday: "January 18th",
    },
    {
      name: "Eula",
      description:
        "Eula Lawrence, the Spindrift Knight of Mondstadt, is a formidable warrior known for her icy demeanor and lightning-fast strikes.",
      birthday: "October 25th",
    },
    {
      name: "Fischl",
      description:
        "Fischl, the enigmatic investigator of the Adventurers' Guild, is known for her unique perspective on the world.",
      birthday: "May 27th",
    },
    {
      name: "Jean",
      description:
        "Jean Gunnhildr, the Acting Grandmaster of Mondstadt, is a steadfast leader and tireless protector of the city.",
      birthday: "March 14th",
    },
    {
      name: "Kaeya",
      description:
        "Kaeya Alberich, the Cavalry Captain of the Knights of Favonius, is a charming and enigmatic figure with a mysterious past.",
      birthday: "November 30th",
    },
    {
      name: "Klee",
      description:
        "Klee, a lively adventurer from Mondstadt, is known for her love of explosives and boundless enthusiasm.",
      birthday: "July 27th",
    },
    {
      name: "Lisa",
      description:
        "Lisa Minci, the knowledgeable librarian of the Knights of Favonius, is a skilled mage and scholar.",
      birthday: "June 9th",
    },
    {
      name: "Mika",
      description:
        "Mika, the talented blacksmith of Mondstadt, is renowned for crafting powerful weapons for the Knights of Favonius.",
      birthday: "August 11th",
    },
    {
      name: "Mona",
      description:
        "Mona Megistus, the enigmatic astrologer of Mondstadt, possesses immense knowledge of astrology and elemental magic.",
      birthday: "August 31st",
    },
    {
      name: "Noelle",
      description:
        "Noelle, the diligent maid of Mondstadt, dreams of becoming a knight and protecting others with her strength.",
      birthday: "March 21st",
    },
    {
      name: "Razor",
      description:
        "Razor, a solitary wolf-boy from Mondstadt, communicates with the wolves of Wolvendom and wields a claymore in battle.",
      birthday: "September 9th",
    },
    {
      name: "Rosaria",
      description:
        "Rosaria, the mysterious nun of Mondstadt, patrols the streets of the city at night and has a sharp tongue.",
      birthday: "January 24th",
    },
    {
      name: "Sucrose",
      description:
        "Sucrose, the shy alchemist of Mondstadt, is always engrossed in her experiments to uncover the secrets of the world.",
      birthday: "November 26th",
    },
    {
      name: "Venti",
      description:
        "Venti, the bard of Mondstadt and the current Barbatos, one of The Seven, is known for his mischievous personality and love for alcohol.",
      birthday: "June 16th",
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
                  <div className={styles.Mond2Box}>
                    <p>{character.description}</p>
                    <p style={{ marginTop: "10px" }}>
                      Birthday: {character.birthday}
                    </p>
                  </div>
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
