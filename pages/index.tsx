import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our web app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>our web app</a>
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Made by</h3>
            <p>Laura Legat, Florian Federhofer & Alexander Rathbauer</p>
          </div>

          <div className={styles.card}>
            <h3>Deployed as</h3>
            <p>A multi-container Docker application using Docker-compose</p>
          </div>

          <div className={styles.card}>
            <h3>Using</h3>
            <p>Jenkins for continuous integration and development</p>
          </div>
        </div>
      </main>
    </div>
  );
}
