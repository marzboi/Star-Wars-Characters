import styles from "./error.404.module.scss";

export default function Error404() {
  return (
    <>
      <div className={styles.errorContainer}>
        <img
          className={styles.deathStar}
          src="/background.images/star-wars-the-clone-wars-death-star-wookieepedia-death-star-d37d722158b5324e83398f2249337dc5.png"
          alt="the death star"
          width={803}
          height={803}
        />

        <img
          className={styles.droidsImage}
          src="/background.images/pngeggdasdas.png"
          alt="arturito and gold gay robot"
          width={326}
          height={377}
        />
        <p className={styles.hidingParagraphDeathStar}>
          404 Error... the page you’re looking for doesn’t exist
        </p>
        <div className={styles.hidingParagraphGayRobots}>
          <p>These aren't the</p>
          <p>Doids you're</p>
          <p>looking for...</p>
        </div>
      </div>
    </>
  );
}
