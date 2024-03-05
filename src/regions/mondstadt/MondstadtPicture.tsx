// Import images for characters
import albedoImage from "./mondstadtIcons/albedoIcon.jpg";
import amberImage from "./mondstadtIcons/amberIcon.jpg";
import barbaraImage from "./mondstadtIcons/barbaraIcon.jpg";
import bennettImage from "./mondstadtIcons/bennettIcon.jpg";
import dilucImage from "./mondstadtIcons/dilucIcon.jpg";
import dionaImage from "./mondstadtIcons/dionaIcon.jpg";
import eulaImage from "./mondstadtIcons/eulaIcon.jpg";
import fischlImage from "./mondstadtIcons/fischlIcon.jpg";
import jeanImage from "./mondstadtIcons/jeanIcon.jpg";
import kaeyaImage from "./mondstadtIcons/kaeyaIcon.jpg";
import kleeImage from "./mondstadtIcons/kleeIcon.jpg";
import lisaImage from "./mondstadtIcons/lisaIcon.jpg";
import mikaImage from "./mondstadtIcons/mikaIcon.jpg";
import monaImage from "./mondstadtIcons/monaIcon.jpg";
import noelleImage from "./mondstadtIcons/noelleIcon.jpg";
import razorImage from "./mondstadtIcons/razorIcon.jpg";
import rosariaImage from "./mondstadtIcons/rosariaIcon.jpg";
import sucroseImage from "./mondstadtIcons/sucroseIcon.jpg";
import ventiImage from "./mondstadtIcons/ventiIcon.jpg";
import styles from "./Mondstadt.module.scss";

interface MondstadtPictureProps {
  character: string;
}

const MondstadtPicture: React.FC<MondstadtPictureProps> = ({ character }) => {
  let imageSrc;

  // Determine which image to use based on the character prop
  switch (character.toLowerCase()) {
    case "albedo":
      imageSrc = albedoImage;
      break;
    case "amber":
      imageSrc = amberImage;
      break;
    case "barbara":
      imageSrc = barbaraImage;
      break;
    case "bennett":
      imageSrc = bennettImage;
      break;
    case "diluc":
      imageSrc = dilucImage;
      break;
    case "diona":
      imageSrc = dionaImage;
      break;
    case "eula":
      imageSrc = eulaImage;
      break;
    case "fischl":
      imageSrc = fischlImage;
      break;
    case "jean":
      imageSrc = jeanImage;
      break;
    case "kaeya":
      imageSrc = kaeyaImage;
      break;
    case "klee":
      imageSrc = kleeImage;
      break;
    case "lisa":
      imageSrc = lisaImage;
      break;
    case "mika":
      imageSrc = mikaImage;
      break;
    case "mona":
      imageSrc = monaImage;
      break;
    case "noelle":
      imageSrc = noelleImage;
      break;
    case "razor":
      imageSrc = razorImage;
      break;
    case "rosaria":
      imageSrc = rosariaImage;
      break;
    case "sucrose":
      imageSrc = sucroseImage;
      break;
    case "venti":
      imageSrc = ventiImage;
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
