import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.layoutContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.card}>
            <h1>Elevator</h1>
            <div>
                Floor 1
            </div>
            <div>
                Is not moving
            </div>
            <div>
                Doors are closed
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.card}>
            <h1>Elevator History</h1>
            <div className={styles.overlay}></div>
            <ul>
                <li>Floor 1</li>
                <li>Floor 1</li>
                <li>Floor 1</li>
                <li>Floor 1</li>
                <li>Floor 1</li>
                <li>Floor 1</li>
                <li>Floor 1</li>
                <li>Floor 1</li>
                <li>Floor 1</li>
                <li>Floor 1</li>
                <li>Floor 1</li>
                <li>Floor 1</li>
                <li>Floor 1</li>
                <li>Floor 1</li>
                <li>Floor 1</li>
                <li>Floor 1</li>
                <li>Floor 1</li>
                <li>Floor 1</li>
                <li>Floor 1</li>
                <li>Floor 1</li>
                <li>Floor 1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
