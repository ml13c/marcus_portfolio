// src/components/sections/Skills.jsx
import React from "react";
import styles from "../About.module.css";

export const Education = () => {
  return (
    <section id="education">
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <div className={styles.eduInfo}>
                <strong>Bachelor of Science in Computer Engineering</strong>
                <div>University of North Texas</div>
                <ul className={styles.eduDetails}>
                  <li><strong>GPA:</strong> 3.5</li>
                  <li><strong>Expected Graduation:</strong> May 2027</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Education;

