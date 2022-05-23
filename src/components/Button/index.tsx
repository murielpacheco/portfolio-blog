import styles from "./styles.module.scss";

interface ButtonProps {
   content: string;
   pdfDownload: boolean;
   hrefContent: string;
}

export function Button({content, pdfDownload, hrefContent}: ButtonProps) {
   return (
      <a
         href={hrefContent}
         download={pdfDownload}
         className={styles.bioButton}>
         {content}
      </a>
   )
}