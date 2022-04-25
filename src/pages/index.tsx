import Head from "next/head";
import { Header } from "../components/Header";
import { IntroBio } from "../components/IntroBio";
import { PostSection } from "../components/PostSection";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className={styles.introSection}>
        <Header />
        <IntroBio />
      </section>
      <PostSection />
    </>
  )
}
