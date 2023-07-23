import { useNavigate } from "react-router-dom";
import styles from "./header.module.scss";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";

export default function Header() {
  const {
    characterContext: { handleLoad },
  } = useContext(AppContext);

  const navigate = useNavigate();

  const handleReturnHome = () => {
    handleLoad();
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <img
        className={styles.try}
        src="/background.images/Star-Wars-Logo.png"
        alt="Logo Star Wars"
        width={311}
        height={144}
        onClick={handleReturnHome}
        role="button"
      />
      <img
        src="/background.images/weirdlightsaber.jpg"
        alt="blue saber"
        width={311}
        height={20}
      />
    </header>
  );
}
