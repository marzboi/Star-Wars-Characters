import { Character } from "../../models/character";
import styles from "./character.card.module.scss";
import { AppContext } from "../../context/app.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

type PropsType = {
  item: Character;
};

export function CharacterCard({ item }: PropsType) {
  const {
    characterContext: { handleLoadOneChar },
  } = useContext(AppContext);

  const navigate = useNavigate();

  const navigateToCharacterInfo = () => {
    handleLoadOneChar(item);
    navigate("/character-info");
  };

  return (
    <>
      <li key={item.name} className={styles.characters}>
        <div>
          <img
            src={
              "https://starwars-visualguide.com/assets/img/characters/" +
              item.url.split("/")[5] +
              ".jpg"
            }
            onClick={navigateToCharacterInfo}
          />
        </div>
        <span>{item.name}</span>
      </li>
    </>
  );
}
