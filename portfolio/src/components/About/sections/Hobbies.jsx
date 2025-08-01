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
                I like collecting legos specifically Star Wars and DC sets. 
                Aside from that I like going to the gym,
                 hiking, and playing soccer. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Hobbies;
