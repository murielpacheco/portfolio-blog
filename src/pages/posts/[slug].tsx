import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-dom";

import { createClient } from "../../services/prismic";
import styles from "./post.module.scss"

interface PostProps {
   post: {
      slug: string;
      title: string;
      content: string;
      releaseDate: string;
   }
}


export default function Post({post}: PostProps) {
   return (
      <>
         <Head>
            <title>{post.title}</title>
         </Head>

         <main className={styles.postContainer}>
            <article className={styles.postArticle}>
               <h1 className={styles.postTitle}>{post.title}</h1>
               <time className={styles.postDate}>{post.releaseDate}</time>
               <div
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  className={styles.postContent} />
            </article>
         </main>
      </>
   )
}

export const getStaticProps: GetStaticProps = async ({ previewData, params }) => {
   const client = createClient({ previewData })
   const { slug } = params;

   const response = await client.getByUID('post', String(slug), {});

   const post = {
      slug,
      title: RichText.asText(response.data.title),
      content: RichText.asHtml(response.data.content),
      releaseDate: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
         day: '2-digit',
         month: 'short',
         year: 'numeric',
      })
   }


   return {
      props: { post }, // Will be passed to the page component as props
      revalidate: 60 * 60, // 1 hour
   }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

   return {
       paths: [], //indicates that no page needs be created at build time
       fallback: 'blocking' //indicates the type of fallback
   }
}