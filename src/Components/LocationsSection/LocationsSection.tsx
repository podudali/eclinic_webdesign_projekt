import { FC } from "react";

// styles
import styles from "./LocationSection.module.css";

// components
import IFrame from "../IFrame/IFrame";

export const LocationsSection: FC = () => {
  return (
    <div className={styles.container}>
      <h2>Where can you find us?</h2>
      <h1>We're everywhere!</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero pariatur placeat maiores minus inventore et voluptatem.</p>
      <IFrame src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d81933.41098253061!2d14.387816680307173!3d50.078439876764655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sclinic!5e0!3m2!1sen!2scz!4v1665404404093!5m2!1sen!2scz" />
    </div>
  )
}