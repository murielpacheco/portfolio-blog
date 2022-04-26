
import { WorkItem } from "../WorkItem";
import styles from "./styles.module.scss";

export function WorkSection() {
   return (
      <section className={styles.workSection}>
         <div className={styles.workWrapper}>
            <span>Feature Works</span>
            {/* componentizar o workItem */}
            <WorkItem />
         </div>
      </section>
   )

}

