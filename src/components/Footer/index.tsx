import Image from "next/image";
import styles from "./styles.module.scss";

export function Footer() {
   return (
      <footer className={styles.footerContainer}>
         <div className={styles.footerList}>
            <a
               href="https://twitter.com/donmuriel"
               rel="noreferrer"
               target="_blank"
               >
               <Image src="/twitter.svg" alt="Twitter icon" width="32" height="32" />
            </a>
            <a
               href="https://www.instagram.com/mrlpacheco/"
               rel="noreferrer"
               target="_blank"
            >
               <Image src="/insta.svg" alt="Instagram icon" width="32" height="32" />
            </a>
            <a
               href="https://www.linkedin.com/in/muriel-damazio-pacheco-022933194/"
               rel="noreferrer"
               target="_blank">
               <Image src="/linkedin.svg" alt="LinkedIn Icon" width="32" height="32" />
            </a>
         </div>
         <span>Developed by Muriel Damazio Pacheco 💻</span>
      </footer>
   )
}