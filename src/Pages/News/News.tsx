// react
import { NavLink } from "react-router-dom";

// components
import { NewsHero } from "../../Components/NewsHero/NewsHero";

// styles
import styles from "./News.module.css";

// assets
import img1 from "../../Assets/article.jpg";

interface Article {
  id: number;
  title: string;
  img: string;
  headings: string[];
  date: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Eclinic Alpha 1.2 Released",
    img: img1,
    headings: ["Asdf", "asdf"],
    date: "09/09/2022",
  },
  {
    id: 2,
    title: "COVID Corruption Scandal",
    img: img1,
    headings: ["Asdf", "asdf"],
    date: "09/10/2022",
  },
  {
    id: 3,
    title: "CZU Donates $10 Thousand to Ukraine",
    img: img1,
    headings: ["Asdf", "asdf"],
    date: "15/09/2022",
  },
  {
    id: 4,
    title: "Chodov Clinic 13 Temporarily Shut Down",
    img: img1,
    headings: ["Asdf", "asdf"],
    date: "05/12/2022",
  },
];

const News = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <section>
        <NewsHero
          title="News"
          desc="Get up to date with the latest of what's hot."
        />
      </section>
      <main className={styles.main}>
        <h2>Latest News</h2>
        <ul>
          {articles.map((article) => {
            return (
              <li key={article.id}>
                <img src={article.img} alt="article main" />
                <div className={styles.content}>
                  <NavLink to={`/news/article`}>
                    <h3>{article.title}</h3>
                  </NavLink>
                  <span>{article.date}</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium, tenetur!
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default News;
