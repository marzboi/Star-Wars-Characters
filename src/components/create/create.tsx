import styles from "./create.module.scss";
import { SyntheticEvent, useContext } from "react";
import { AppContext } from "../../context/app.context";
import { Character } from "../../models/character";

export default function CreateCharacter() {
  const {
    characterContext: { handleAdd, feedbackMessage, togglefeedbackMessage },
  } = useContext(AppContext);

  const onSubmit = (item: SyntheticEvent) => {
    item.preventDefault();
    const element = item.target as HTMLFormElement;
    const url = "created-characters/";

    const characterToAdd: Character = {
      id: NaN,
      name: element.names.value,
      image: element.image.value,
      height: element.height.value,
      mass: element.mass.value,
      hair_color: element.hair_color.value,
      eye_color: element.eye_color.value,
      birth_year: element.birth_year.value,
      gender: element.gender.value,
      homeworld: element.homeworld.value,
      url: "its local :(",
    };
    handleAdd(characterToAdd, url);
    togglefeedbackMessage();
    element.reset();
  };

  return (
    <>
      <h2>Create your own character</h2>
      <form data-testid="create-character-form" onSubmit={onSubmit}>
        <div className={styles.inputscontainer}>
          <label htmlFor="image">
            <input type="text" id="image" placeholder="image url" required />
          </label>
          <label htmlFor="names">
            <input type="text" id="names" placeholder="Name" />
          </label>
          <label htmlFor="height">
            <input
              type="number"
              id="height"
              placeholder="Height in cm"
              required
              min="1"
            />
          </label>
          <label htmlFor="mass">
            <input
              type="number"
              id="mass"
              placeholder="Mass in kg"
              required
              min="1"
            />
          </label>
          <label htmlFor="hair_color">
            <input
              type="text"
              id="hair_color"
              placeholder="Hair Color"
              required
            />
          </label>
          <label htmlFor="eye_color">
            <input
              type="text"
              id="eye_color"
              placeholder="Eye Color"
              required
            />
          </label>
          <label htmlFor="birth_year">
            <input
              type="text"
              id="birth_year"
              placeholder="Birth Year"
              required
            />
          </label>
          <label htmlFor="gender">
            <input type="text" id="gender" placeholder="Gender" required />
          </label>
          <label htmlFor="homeworld">
            <input
              type="text"
              id="homeworld"
              placeholder="Home World"
              required
            />
          </label>
        </div>
        <div className={styles.buttonscontainer}>
          <input type="submit" value="CREATE" className={styles.button} />
          <input type="reset" value="RESET" className={styles.button} />
        </div>
      </form>
      <div
        className={`${styles.feedbackcontainer} ${
          feedbackMessage ? styles.visible : ""
        }`}
      >
        <p className={styles.feedback}>CHARACTER CREATED SUCCESSFULLY 😊</p>
      </div>
    </>
  );
}
