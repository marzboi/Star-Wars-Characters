import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FavoriteCharacterCard } from "../favoritecharactercard/favorite.character.card";
import styles from "./favorite.list.module.scss";
import Error404 from "../error.404/error.404";

export default function FavoriteList() {
  const {
    characterContext: { favoritesCharacters },
  } = useContext(AppContext);

  return (
    <>
      <h2 className={styles.title}>FAVORITE CHARACTERS</h2>
      <ul className={styles.list}>
        {favoritesCharacters.length === 0 ? (
          <Error404></Error404>
        ) : (
          favoritesCharacters.map((item) => (
            <FavoriteCharacterCard
              item={item}
              key={item.name}
            ></FavoriteCharacterCard>
          ))
        )}
      </ul>
    </>
  );
}
