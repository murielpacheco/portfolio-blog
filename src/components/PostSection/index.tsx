import Link from "next/link";
import styles from "./styles.module.scss";

export function PostSection() {
   return (
      <section className={styles.postSection}>
         <div className={styles.postWrapper}>
            <header className={styles.postHeader}>
               <h3>Recent Posts</h3>
               <Link href="/posts" passHref>View all</Link>
            </header>
            <div className={styles.postContainer}>
               <div className={styles.postItem}>
                  <strong>Making a design system from scratch</strong>
                  <div className={styles.postInfos}>
                     <span> 12 Feb 2020</span>
                     |
                     <p>Design Patter</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
               </div>
               <div className={styles.postItem}>
                  <strong>Making a design system from scratch</strong>
                  <div className={styles.postInfos}>
                     <span> 12 Feb 2020</span>
                     |
                     <p>Design Patter</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
               </div>
            </div>
         </div>
      </section>
   )
}