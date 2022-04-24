import styles from "./styles.module.scss";

export function IntroBio() {
   return (
      <div className={styles.introBio}>
         <strong className={styles.bioComplimment}>Hi, I am Muriel, <br /> Web Developer</strong>
         <span className={styles.bioDescription}>1 year of experience with tecnologies as such: HTML, CSS, JavaScript, TypeScript,
            React, Node.js, Express and Git.
         </span>
         <button className={styles.bioButton}>Download Resume</button>
      </div>
   )
}