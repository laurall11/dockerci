import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our Web App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">our WebApp</a>
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Made by</h3>
            <p>"Laura Legat", Florian Federhofer & Alexander Rathbauer</p>
          </div>

          <div
            className={styles.card}
          >
            <h3>Deployed as</h3>
            <p>A multi-container Docker application using Docker-compose</p>
          </div>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
