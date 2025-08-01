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
              <div className={styles.skillsGrid}>
                <div>
                  <strong>Languages:</strong>
                  <ul className={styles.skillsDetails}>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C, C++</li>
                    <li>JavaScript</li>
                    <li>Assembly</li>
                  </ul>
                </div>
                <div>
                  <strong>Libraries:</strong>
                  <ul className={styles.skillsDetails}>
                    <li>OpenCV</li>
                    <li>MediaPipe</li>
                    <li>NLTK</li>
                    <li>Pandas</li>
                    <li>BeautifulSoup</li>
                    <li>NumPy</li>
                    <li>Matplotlib</li>
                  </ul>
                </div>
                <div>
                  <strong>Developer Tools:</strong>
                  <ul className={styles.skillsDetails}>
                    <li>Git</li>
                    <li>Jupyter</li>
                    <li>Visual Studio Code</li>
                    <li>Linux OS</li>
                    <li>Blender</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Skills;
