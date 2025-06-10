// src/components/sections/Skills.jsx
import React from "react";
import styles from "../About.module.css";

export const Education = () => {
  return (
    <section id="hobbies">
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                education info.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Education;

