import styles from "./styles.module.scss";

interface PostItemProps {
   title: string;
   release_year: string;
   subject: string;
   excerpt: string;
}

export function PostItem({ title, release_year, subject, excerpt }: PostItemProps) {
   return (
      <div className={styles.postItem}>
         <strong>{title}</strong>
         <div className={styles.postInfos}>
            <span>{release_year}</span>
            |
            <p>{subject}</p>
         </div>
         <p>{excerpt}</p>
      </div>
   )
}