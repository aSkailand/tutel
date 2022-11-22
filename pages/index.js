import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>tutel🐢</title>
        <meta name="description" content="tutel🐢" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>tutel🐢</h1>
      </main>
    </div>
  );
}
