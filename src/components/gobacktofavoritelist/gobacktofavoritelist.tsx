import styles from "./gobacktofavoritelist.module.scss";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/app.context";
import { useContext } from "react";
import { Character } from "../../models/character";

type PropsType = {
  item: Character | null;
};
export default function FavoriteListButtons({ item }: PropsType) {
  const {
    characterContext: { handleDelete, handleLoadLocalFavoritesServer },
  } = useContext(AppContext);

  const navigate = useNavigate();

  const handleReturnHome = () => {
    handleLoadLocalFavoritesServer();
    navigate("/favorite-character");
  };

  const handleRemoveFromFavorites = () => {
    const url = "characters/";
    if (!item) return;
    handleDelete(item, url);
    handleLoadLocalFavoritesServer();
    navigate("/favorite-character");
    location.reload();
  };

  return (
    <section className={styles.listbuttons}>
      <button onClick={handleReturnHome}>Return to List</button>
      <button onClick={handleRemoveFromFavorites}>Remove from Favorites</button>
    </section>
  );
}
