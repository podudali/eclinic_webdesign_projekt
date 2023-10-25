// styles
import styles from "./NewsHero.module.css";

interface NewsHeroProps {
  title: string;
  desc: string;
  date?: string;
  author?: string;
}

export const NewsHero = ({
  title,
  desc,
  date,
  author,
}: NewsHeroProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>{title}</h2>
          <p className={styles.author}>{author}</p>
          <p className={styles.date}>{date}</p>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
