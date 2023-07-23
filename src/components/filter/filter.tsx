import { SyntheticEvent, useContext } from "react";
import styles from "./filter.module.scss";
import { AppContext } from "../../context/app.context";

export default function SearchBar() {
  const {
    characterContext: { handleLoad },
  } = useContext(AppContext);

  const onInputChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const searchName = target.value;
    const url = "https://swapi.dev/api/people/?search=" + searchName;
    handleLoad(url);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search characters..."
        name="names"
        id="names"
        onChange={onInputChange}
      />
    </div>
  );
}
