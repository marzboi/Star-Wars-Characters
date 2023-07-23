import { Character } from "../../models/character";
import { AppContext } from "../../context/app.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./created.character.card.module.scss";

type PropsType = {
  item: Character;
};

export function CreatedCharacterCard({ item }: PropsType) {
  const {
    characterContext: { handleLoadOneCreatedChar },
  } = useContext(AppContext);

  const navigate = useNavigate();

  const navigateToCreatedCharacterInfo = () => {
    handleLoadOneCreatedChar(item);
    navigate("/created-character-info");
  };

  return (
    <>
      <li key={item.id} className={styles.characters}>
        <div>
          <img src={item.image} onClick={navigateToCreatedCharacterInfo} />
        </div>
        <span>{item.name}</span>
      </li>
    </>
  );
}
