import { Button } from "../Button";
import styles from "./styles.module.scss";


export function IntroBio() {
   return (
      <section className={styles.introBioSection}>
         <div className={styles.introBio}>
            <strong className={styles.bioComplimment}>Muriel Pacheco <br /> Web Developer</strong>
            <span className={styles.bioDescription}>1 ano de experiência com tecnologias como: HTML, CSS, JavaScript, TypeScript,
               React, Next.js, Node.js, Express and Git.
            </span>
            <div className={styles.buttonWrapper}>
               <Button pdfDownload={false} hrefContent="/curriculum_muriel_pacheco.pdf" content="Portuguese Resume"/>
               <Button pdfDownload={false} hrefContent="/english_curriculum_muriel_pacheco.pdf" content="English Resume"/>
            </div>
         </div>
      </section>
   )
}