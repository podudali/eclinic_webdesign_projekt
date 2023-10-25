import { FC } from "react"

// assets
import img from "../../Assets/nhs.png";

// styles
import styles from "./Footer.module.css";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <img src={img}/>
      <ul>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
      <label>eclinic</label>
    </footer>
  )
}