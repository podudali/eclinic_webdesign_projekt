// components
import { ButtonActive } from "../ButtonActive/ButtonActive";

// styles
import styles from "./WhySection.module.css";

// assets
import image from "../../Assets/art2.png";

export const WhySection = (): JSX.Element => {
  const handleClick = () => {

  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <aside>
          <h2>premium service</h2>
          <h1>Easy of use, ease of service</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio velit porro quae repudiandae incidunt maxime.</p>
          <ButtonActive onClick={handleClick} input="text"/>
        </aside>
        <img src={image} />
      </div>
    </div>
  );
}
