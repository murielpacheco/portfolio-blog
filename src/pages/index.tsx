import Head from "next/head";
import { IntroBio } from "../components/IntroBio";
import { PostSection } from "../components/PostSection";
import { WorkSection } from "../components/WorkSection";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className={styles.introSection}>
        <IntroBio />
      </section>
      <PostSection />
      <WorkSection />
    </>
  )
}
