import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { CreatedCharacterCard } from "../createdcharactercard/created.character.card";
import styles from "./created.list.module.scss";
import Error404 from "../error.404/error.404";

export default function CreatedList() {
  const {
    characterContext: { createdCharacters },
  } = useContext(AppContext);

  return (
    <>
      <h2 className={styles.title}>CREATED CHARACTERS</h2>
      <ul className={styles.list}>
        {createdCharacters.length === 0 ? (
          <Error404></Error404>
        ) : (
          createdCharacters.map((item) => (
            <CreatedCharacterCard
              item={item}
              key={item.name}
            ></CreatedCharacterCard>
          ))
        )}
      </ul>
    </>
  );
}
