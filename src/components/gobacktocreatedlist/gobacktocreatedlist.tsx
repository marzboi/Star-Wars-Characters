import styles from "./gobacktocreatedlist.module.scss";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/app.context";
import { useContext } from "react";
import { Character } from "../../models/character";

type PropsType = {
  item: Character | null;
};
export default function CreatedListButtons({ item }: PropsType) {
  const {
    characterContext: { handleDelete, handleLoadLocalCreatedServer },
  } = useContext(AppContext);

  const navigate = useNavigate();

  const handleReturnHome = () => {
    handleLoadLocalCreatedServer();
    navigate("/created-character-list");
  };

  const handleDeleteCreatedCharacter = () => {
    const url = "created-characters/";
    if (!item) return;
    handleDelete(item, url);
    handleLoadLocalCreatedServer();
    navigate("/created-character-list");
    location.reload();
  };

  return (
    <section className={styles.listbuttons}>
      <button onClick={handleReturnHome}>Return to List</button>
      <button onClick={handleDeleteCreatedCharacter}>Delete Character</button>
    </section>
  );
}
