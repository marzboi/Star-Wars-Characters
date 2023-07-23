import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import styles from "./change.page.module.scss";

export default function ChangePage() {
  const {
    characterContext: { handleLoad, next, previous },
  } = useContext(AppContext);

  function handlePrevious() {
    handleLoad(previous);
  }

  function handleNext() {
    handleLoad(next);
  }

  return (
    <section className={styles.changepage}>
      <button onClick={handlePrevious}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </section>
  );
}
