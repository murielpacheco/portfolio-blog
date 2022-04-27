import styles from "./styles.module.scss";

interface PostProps {
   title: string;
   description: string;
   image: string;
   releaseYear: string;
   subject: string;
}

export function WorkItem({image, title, description, releaseYear, subject}: PostProps) {
   return (
      <>
      <div className={styles.workItem}>
         <img src={image} alt="Image" />
         <div className={styles.workInfos}>
            <h2>{title}</h2>
            <aside className={styles.workDate}>
               <time className={styles.workReleaseYear}>{releaseYear}</time>
               <p>{subject}</p>
            </aside>
            <p className={styles.workDescription}>{description}</p>
         </div>
      </div>
      </>
   )
}

