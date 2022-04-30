import { GetStaticProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-dom"

import styles from "./styles.module.scss";
import { createClient } from "../../services/prismic";

type Post = {
   slug: string;
   title: string;
   excerpt: string;
   updatedAt: string;
}

interface PostsProps {
   posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
   console.log(posts)
   return (
      <>
         <Head>
            <title>Blog - Posts</title>
         </Head>
         <main className={styles.postsContainer}>
            <div className={styles.postsList}>
               {posts.map(post => (
                  <>
                     <a href="">
                        <strong>{post.title}</strong>
                        <div className={styles.postsInfos}>
                           <time>{post.updatedAt}</time>
                           |
                           <span>Basketball</span>
                        </div>
                        <p>{post.excerpt}</p>
                     </a>  
                  </>
               ))}   
            </div>
         
         </main>
      </>
   )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
   const client = createClient({ previewData })

   const response = await client.getAllByType('post')

   const posts = response?.map((post: any) => {
       return {
           slug: post.uid,
           title: RichText.asText(post.data.title),
           excerpt: post.data.content.find(content => content.type == 'paragraph')?.text ?? '',
           updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
           })
       }
   });


   return {
      props: { posts }, // Will be passed to the page component as props
      revalidate: 60 * 60, // 1 hour
   }
}