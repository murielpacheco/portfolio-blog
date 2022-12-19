import { Button } from "../Button";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

export function IntroBio() {
   return (
         <section className={styles.introBioSection}>
         <motion.div
             initial={{ opacity: 0, scale: 0.8, x: -600 }}
             animate={{ opacity: 1, scale: 1.1, x: 0 }}
             transition={{ duration: 0.8 }}
            className={styles.introBio}>
               <strong className={styles.bioComplimment}>Muriel Pacheco <br /> Web Developer</strong>
               <span className={styles.bioDescription}> 2 years of experience with technologies as such: HTML, CSS, JavaScript, TypeScript,
                  React, Next.js, Node.js, Express and Git.
               </span>
               <div className={styles.buttonWrapper}>
                  <Button pdfDownload={false} hrefContent="/curriculum_muriel_pacheco.pdf" content="Portuguese Resume"/>
                  <Button pdfDownload={false} hrefContent="/english_curriculum_muriel_pacheco.pdf" content="English Resume"/>
               </div>
            </motion.div>
         </section>
   )
}