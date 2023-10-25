// hooks
import { useState } from "react";

// components
import { CardsAbout } from "../CardsAbout/CardsAbout";
import { ButtonActive } from "../ButtonActive/ButtonActive";

// styles
import styles from "./HeroAbout.module.css";

export const HeroAbout = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);

    let cards = document.getElementById("cards");

    setTimeout(() => {
      cards?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }, 200);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2>Meet the team</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis earum doloribus inventore iure.
          </p>
          <ButtonActive onClick={handleClick} input="Get to know us" />
        </div>
      </div>
      <div id="cards" className={styles["cards-container"]}>
        {isOpen && <CardsAbout />}
      </div>
    </>
  );
};
