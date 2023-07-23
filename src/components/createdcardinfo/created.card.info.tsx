import { AppContext } from "../../context/app.context";
import { useContext } from "react";
import styles from "./created.card.info.module.scss";
import CreateListButtons from "../gobacktocreatedlist/gobacktocreatedlist";
import { Character } from "../../models/character";

export default function CharacterInfo() {
  const {
    characterContext: { currentCharacter },
  } = useContext(AppContext);

  const character = currentCharacter as Character;

  return (
    <>
      <section className={styles.characterinfo}>
        <div>
          <img src={character?.image} alt="" />
        </div>
        <div>
          <span>Name: {character?.name}</span>
          <span>Height: {character?.height} cm</span>
          <span>Mass: {character?.mass} Kg</span>
          <span>Hair Color: {character?.hair_color}</span>
          <span>Eye Color: {character?.eye_color}</span>
          <span>Birth Year: {character?.birth_year}</span>
          <span>Gender: {character?.gender}</span>
          <span>Home World: {character?.homeworld}</span>
        </div>
      </section>
      <CreateListButtons item={character}></CreateListButtons>
    </>
  );
}
