// styles
import styles from "./CardsAbout.module.css";

// assets
import ivan from "../../Assets/ivan.png";
import wanl from "../../Assets/wanl.png";
import stacy from "../../Assets/stacy.png";
import gitlogo from "../../Assets/github.svg";

export const CardsAbout = (): JSX.Element => {
  const users = [
    { id: 1, name: "Ivan Konnikov", role: "Front End Developer", img: ivan },
    { id: 2, name: "Wanl Alfathi", role: "Back End Developer", img: wanl },
    { id: 3, name: "Anastasia Seliverstova", role: "UX Designer", img: stacy },
  ];

  return (
    <section>
      <div className={styles.container}>
        {users.map((user) => {
          return (
            <div key={user.id} className={styles.wrapper}>
              <img
                alt={`image of ${user.name}`}
                className={styles.profile}
                src={user.img}
              />
              <aside>
                <div className={styles.desc}>
                  <h2>{user.name}</h2>
                  <span>{user.role}</span>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellendus ratione eligendi est saepe dolor voluptatem,
                    tenetur repudiandae! Aperiam, possimus sapiente.
                  </p>
                </div>
                <div className={styles.social}>
                  <img src={gitlogo} />
                  <a href="#">GitHub</a>
                </div>
              </aside>
            </div>
          );
        })}
      </div>
    </section>
  );
};
