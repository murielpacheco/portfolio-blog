import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
   return (
      <header className={styles.header}>
         <ul className={styles.headerNav}>
            <Link href="/" passHref>
               <li>Home</li>
            </Link>
            <Link href="/posts" passHref>
               <li>Blog</li>
            </Link>
            <Link href="/projects" passHref>
               <li>Projects</li>
            </Link>
            <Link href="https://github.com/murielpacheco" passHref>
               <li>Github</li>
            </Link>
         </ul>
      </header>
   )
}