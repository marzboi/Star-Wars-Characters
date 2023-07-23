import { AppContext } from "../../context/app.context";
import { useContext } from "react";
import styles from "./character.info.module.scss";
import ListButtons from "../gobacktolist/gobacktolist";
import { Character } from "../../models/character";

export default function CharacterInfo() {
  const {
    characterContext: { currentCharacter, feedbackMessage },
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

      <ListButtons item={character}></ListButtons>
      <div
        className={`${styles.feedbackcontainer} ${
          feedbackMessage ? styles.visible : ""
        }`}
      >
        <p className={styles.feedback}>CHARACTER ADDED TO FAVORITES ❤️</p>
      </div>
    </>
  );
}
