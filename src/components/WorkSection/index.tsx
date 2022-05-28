import projects from "../../../projects.json";

import { WorkItem } from "../WorkItem";
import styles from "./styles.module.scss";

export function WorkSection() {
   return (
      <section className={styles.workSection}>
         <div className={styles.workWrapper}>
            <span>Feature Works</span>
            {projects?.map(project => (
               <WorkItem key={project.title}
               image={project.image}
               title={project.title}
               description={project.description}
               releaseYear={project.release_year}
               subject={project.subject}
               link={project.link}
               />
            )).slice(0, 3)}

         </div>
         <div className={styles.workSeparator}></div>
      </section>
   )

}

