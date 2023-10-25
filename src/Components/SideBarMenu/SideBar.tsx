// hooks
import { FC } from "react";
import { NavLink } from "react-router-dom";

// styles
import styles from "./SideBar.module.css";

// assets
import icon from "../../Assets/cross.svg";

interface SideBarProps {
  state: boolean;
  onClick(): void;
}

export const SideBar: FC<SideBarProps> = ({ state, onClick }) => {
  return (
    <>
      {state && (
        <div className={styles.container} id="sidebar">
          <img alt="close icon" onClick={onClick} className={styles.icon} src={icon} />
          <ul className={styles.ul}>
            <li className={`${styles.login} li`}>
              <NavLink to="/login" onClick={onClick}>
                Log in
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink to="/about" onClick={onClick}>
                About
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink to="/complaint" onClick={onClick}>
                Complaint
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink to="/search" onClick={onClick}>
                Search
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink to="/news" onClick={onClick}>
                News
              </NavLink>
            </li>
          </ul>
          <label className={styles.logo}>eclinic</label>
        </div>
      )}
    </>
  );
};
