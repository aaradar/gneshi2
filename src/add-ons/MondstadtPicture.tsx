// Import images for characters
import jeanImage from "../../images/jeanIcon.jpg";
import dilucImage from "../../images/dilucIcon.jpg";
import kaeyaImage from "../../images/kaeyaIcon.jpg";
import ventiImage from "../../images/ventiIcon.jpg";
import eulaImage from "../../images/eulaIcon.jpg";
import kleeImage from "../../images/kleeIcon.jpg";
import monaImage from "../../images/monaIcon.jpg";

import styles from "../Mondstadt.module.scss";

interface MondstadtPictureProps {
  character: string;
}

const MondstadtPicture: React.FC<MondstadtPictureProps> = ({ character }) => {
  let imageSrc;

  // Determine which image to use based on the character prop
  switch (character.toLowerCase()) {
    case "diluc":
      imageSrc = dilucImage;
      break;
    case "jean":
      imageSrc = jeanImage;
      break;
    case "kaeya":
      imageSrc = kaeyaImage;
      break;
    case "venti":
      imageSrc = ventiImage;
      break;
    case "eula":
      imageSrc = eulaImage;
      break;
    case "klee":
      imageSrc = kleeImage;
      break;
    case "mona":
      imageSrc = monaImage;
      break;
    default:
      imageSrc = null; // Handle unknown characters
  }

  return (
    <div className={styles.mondstadtPicture}>
      {imageSrc && <img src={imageSrc} alt={character} />}
    </div>
  );
};

export default MondstadtPicture;
