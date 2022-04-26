import styles from "./styles.module.scss";

export function WorkItem() {
   return (
      <>
      <div className={styles.workItem}>
         <img src="https://picsum.photos/200/300" alt="Image" />
         <div className={styles.workInfos}>
            <h2>Designing Dashboards</h2>
            <aside className={styles.workDate}>
                  <span className={styles.workReleaseYear}>2020</span>
               <p>Dashboard</p>
            </aside>
            <p className={styles.workDescription}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
         </div>
      </div>
      </>
   )
}

