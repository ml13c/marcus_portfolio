import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>About Me</h3>
              <p>
                I like to collect legos as I enjoy the process of building things.
                When I can I like to travel and hike to new places. I am always
                looking to try new things especially if it can have a positive
                impact on others.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>small navbar here</h3>
              <p>experience, skills, education, hobbies.</p>
            </div>
          </li>
        </ul>
        <img
          src="https://dl.dropboxusercontent.com/scl/fi/n014fojpo3x2juh5a6w5l/IMG_7039.JPG?rlkey=i4k9ikkh29tnvlze0v2i3auh8&st=s9rzjj8a"
          className={styles.aboutProfileImg} // add a new class for custom styling
          alt="Profile"
        />
      </div>
    </section>
  );
};
