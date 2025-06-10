// src/components/sections/Skills.jsx
import React from "react";
import styles from "../About.module.css";

export const Hobbies = () => {
  return (
    <section id="hobbies">
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Hobbies</h3>
              <p>
                Im just going to list some of my hobbies/things I enjoy.
                Hiking<br></br>Soccer<br></br>Gym<br></br> 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Hobbies;
