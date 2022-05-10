import Image from "next/image";
import styles from "./styles.module.scss";

export function IntroBio() {
   return (
      <div className={styles.introBio}>
         <strong className={styles.bioComplimment}>Muriel Pacheco <br /> Web Developer</strong>
         <span className={styles.bioDescription}>1 ano de experiência com tecnologias como: HTML, CSS, JavaScript, TypeScript,
            React, Next.js, Node.js, Express and Git.
         </span>
         <a href="/curriculum.pdf" download className={styles.bioButton}>Download Resume</a>
      </div>
   )
}