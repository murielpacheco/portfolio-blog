import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
   return (
      <>
         <Head>
            <title>Blog - Posts</title>
         </Head>
         <main className={styles.postsContainer}>
            <div className={styles.postsList}>
               <a href="">
                  <strong>UI Interactions of the week</strong>
                  <div className={styles.postsInfos}>
                     <time>12 Feb 2019</time>
                     |
                     <span> React JS and Modals</span>
                  </div>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
               </a>     
               <a href="">
                  <strong>UI Interactions of the week</strong>
                  <div className={styles.postsInfos}>
                     <time>12 Feb 2019</time>
                     |
                     <span> React JS and Modals</span>
                  </div>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
               </a>     
               <a href="">
                  <strong>UI Interactions of the week</strong>
                  <div className={styles.postsInfos}>
                     <time>12 Feb 2019</time>
                     |
                     <span> React JS and Modals</span>
                  </div>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
               </a>     
            </div>
         
         </main>
      </>
   )
}