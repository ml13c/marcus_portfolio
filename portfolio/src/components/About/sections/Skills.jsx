// src/components/sections/Skills.jsx
import React from "react";
import styles from "../About.module.css";

export const Skills = () => {
  return (
    <section id="skills">
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Skills</h3>
              <p>
                Here are some of my skills.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Skills;
