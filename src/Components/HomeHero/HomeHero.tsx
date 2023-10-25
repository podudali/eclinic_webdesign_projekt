// styles
import styles from "./HomeHero.module.css";

// assets
import heroBg from "../../Assets/heroBg.mp4";

export const HomeHero = (): JSX.Element => {
  return(
    <div className={styles['hero-container']}>
      <div className={styles.overlay}></div>
      <video src={heroBg} autoPlay loop muted/>
      <div className={styles.content}>
        <h1 style={{fontSize: "3em"}}>Clinicing.</h1>
        <p style={{fontSize: "1.7rem"}}>Without pain.</p>
      </div>
    </div>
  )
}