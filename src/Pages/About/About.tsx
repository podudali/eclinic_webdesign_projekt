// components
import { HeroAbout } from "../../Components/HeroAbout/HeroAbout";

// styles
import styles from "./About.module.css";

export const About = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <HeroAbout />
    </div>
  );
};