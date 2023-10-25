// react
import { ReactNode } from "react";

// styles
import styles from "./ButtonActive.module.css";

type Props = {
  onClick: () => void;
  input: string;
};

export const ButtonActive = ({input, onClick}: Props): JSX.Element => {
  return <button onClick={onClick}className={styles["button-active"]}>{input}</button>
}