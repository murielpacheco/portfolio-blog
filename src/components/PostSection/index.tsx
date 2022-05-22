import { GetStaticProps } from "next";
import Link from "next/link";
import { RichText } from "prismic-dom"

import styles from "./styles.module.scss";
import { createClient } from "../../services/prismic";
import { PostItem } from "../PostItem";
import { ReactNode } from "react";

type PostItem = {
   slug: string;
   title: string;
   excerpt: string;
   updatedAt: string;
}

interface PostsProps {
   postsItem: PostItem[];
}

export function PostSection({ postsItem }: PostsProps) {
   return (
      <section className={styles.postSection}>
         <div className={styles.postWrapper}>
            <header className={styles.postHeader}>
               <h3>Recent Posts</h3>
               <Link href="/posts" passHref><a>View all</a></Link>
            </header>
            <div className={styles.postContainer}>
               {postsItem?.map(post => (
                  <PostItem
                     key={post.slug}
                     title={post.title}
                     release_year={post.updatedAt}
                     subject={'Design Pattern'}
                     excerpt={post.excerpt}
                  />       
               )).slice(0,2)}
            </div>
         </div>
      </section>
   )
}
