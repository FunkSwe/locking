import Hero from "../../components/Hero";
import styles from "./Home.module.scss";
import Gridlines from "../../components/Animations/Gridlines";

const Home = () => {
  return (
    <div className={styles.home}>
      <Gridlines />
      <Hero />
      <section className={styles.section}>
        <h2>Latest from Kingsroom</h2>
        <article>
         
         
           
        </article>
        <article>
         
        </article>
      </section>
    </div>
  );
};

export default Home;
