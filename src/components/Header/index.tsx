import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
   return (
      <header className={styles.header}>
         <ul className={styles.headerNav}>
            <Link href="/" passHref>
               <li className={styles.headerItem}>Home</li>
            </Link>
            <Link href="/projects" passHref>
               <li className={styles.headerItem}>Projects</li>
            </Link>
            <Link href="/posts" passHref>
               <li className={styles.headerItem}>Blog</li>
            </Link>
            <Link href="https://github.com/murielpacheco" passHref>
               <li className={styles.headerItem}>Github</li>
            </Link>
         </ul>
      </header>
   )
}