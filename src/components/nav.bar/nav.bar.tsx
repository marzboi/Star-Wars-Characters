import { useNavigate } from "react-router-dom";
import styles from "./nav.bar.module.scss";
import { AppContext } from "../../context/app.context";
import { useContext } from "react";
export default function NavBar() {
  const {
    characterContext: {
      handleLoadLocalFavoritesServer,
      handleLoadLocalCreatedServer,
    },
  } = useContext(AppContext);

  const navigate = useNavigate();

  function navigateToCreateCharacter() {
    navigate("/create-character");
  }

  function navigateToFavoriteCharacters() {
    handleLoadLocalFavoritesServer();
    navigate("/favorite-character");
  }

  function navigateToCreatedCharacters() {
    handleLoadLocalCreatedServer();
    navigate("/created-character-list");
  }

  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.buttons}>
          <div className={styles.button} onClick={navigateToCreateCharacter}>
            <img
              height={86.63}
              width={89.69}
              src="buttons.images/create_corasonsito.png"
              alt="lovely stromtrooper"
            />
            <button>CREATE A CHARACTER</button>
          </div>
          <div className={styles.button} onClick={navigateToFavoriteCharacters}>
            <img
              height={86.63}
              width={89.69}
              src="buttons.images/R2D2_corasonsito.png"
              alt="lovely Arturito"
            />

            <button>FAVORITE CHARACTERS</button>
          </div>
          <div className={styles.button} onClick={navigateToCreatedCharacters}>
            <img
              height={86.63}
              width={89.69}
              src="buttons.images/vader_button.png"
              alt="lovely Vader"
            />

            <button>CREATED CHARACTERS</button>
          </div>
        </div>
      </nav>
    </>
  );
}
