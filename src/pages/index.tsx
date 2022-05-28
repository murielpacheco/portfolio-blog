import { GetStaticProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-dom";

import styles from "./Home.module.scss";
import { IntroBio } from "../components/IntroBio";
import { PostSection } from "../components/PostSection";
import { WorkSection } from "../components/WorkSection";
import { createClient } from "../services/prismic";
import { Footer } from "../components/Footer";

export default function Home({postsItem}) {
  return (
    <>
      <Head>
        <title>Portfolio - Home</title>
      </Head>
      <section className={styles.introSection}>
        <IntroBio />
      </section>
      <PostSection postsItem={postsItem} />
      <WorkSection />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => { // only works on Next Pages
  const client = createClient({ previewData })

  const response = await client.getAllByType('post')

  const postsItem = response?.map((post: any) => {
      return {
          slug: post.uid,
          title: RichText.asText(post.data.title),
          excerpt: post.data.content.find(content => content.type == 'paragraph')?.text ?? '',
          updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
             year: 'numeric',
          })
      }
  });


  return {
     props: { postsItem }, // Will be passed to the page component as props
     revalidate: 60 * 60, // 1 hour
  }
}