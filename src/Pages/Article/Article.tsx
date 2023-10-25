// components
import { NewsHero } from "../../Components/NewsHero/NewsHero";

// styles
import styles from "./Article.module.css";

// assets
import img from "../../Assets/article.jpg";
import amin from "../../Assets/amin.jpg";

const Article = (): JSX.Element => {
  return (
    <div>
      <NewsHero
        title="Eclinic Alpha 1.2 Released"
        desc="After weeks of bloodshed, sweat and tears, it's done...for now."
        date="11/12/2022"
        author="Amin Akwaa"
      />
      <main className={styles.main}>
        <article>
          <h3>How it started.</h3>
          <div className={styles.content}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              reiciendis voluptate aspernatur vel dicta, velit accusamus error
              nostrum esse quisquam itaque, consequuntur, omnis recusandae
              beatae nam id voluptatem alias ipsam cumque! Excepturi aliquid nam
              natus omnis dolorem distinctio tempora iste ullam accusamus eos,
              facilis beatae, quisquam culpa amet recusandae possimus quaerat!
              Incidunt ducimus ipsum temporibus aut, ullam, minima id quasi
              velit porro, in dolorem consequatur omnis. Incidunt modi expedita
              praesentium!
            </p>
            <br />
            <cite>
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
              ea."
            </cite>
            <br />
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              reiciendis voluptate aspernatur vel dicta, velit accusamus error
              nostrum esse quisquam itaque, consequuntur, omnis recusandae
              beatae nam id voluptatem alias ipsam cumque! Excepturi aliquid nam
              natus omnis dolorem distinctio tempora iste ullam accusamus eos,
              facilis beatae, quisquam culpa amet recusandae possimus quaerat!
              Incidunt ducimus ipsum temporibus aut, ullam, minima id quasi
              velit porro, in dolorem consequatur omnis. Incidunt modi expedita
              praesentium!
            </p>
            <img src={img} alt="an alt" />
            <i>Doctors excited for new release.</i>
          </div>
          <div className={styles.author}>
            <img src={amin} alt="amin" />
            <h4>Amin Akwaa</h4>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Article;
