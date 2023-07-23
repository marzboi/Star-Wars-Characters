import styles from "./goback.module.scss";

export default function GoBack() {
  const topFunction = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className={styles.goback}>
      <button className="goback-button">GO BACK UP</button>
      <img
        src="buttons.images/Vector_down_arrow_link.svg.png"
        alt="arrow button"
        width={45}
        height={31}
        onClick={topFunction}
      />
    </div>
  );
}
