import styles from "./styles.module.scss";

export function Header() {
   return (
      <header className={styles.header}>
         <ul className={styles.headerNav}>
            <li className={styles.headerItem}>Projects</li>
            <li className={styles.headerItem}>Blog</li>
            <li className={styles.headerItem}>Contact</li>
         </ul>
      </header>
   )
}