import styles from "./styles.module.scss";

export function Footer() {
   return (
      <footer className={styles.footerContainer}>
         <ul className={styles.footerList}>
            <li><img src="/twitter.svg" alt="" /></li>
            <li><img src="/insta.svg" alt="" /></li>
            <li><img src="/linkedin.svg" alt="" /></li>
         </ul>
      </footer>
   )
}