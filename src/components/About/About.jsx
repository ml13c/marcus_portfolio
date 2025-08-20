import React, { useState } from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { MiniNavbar } from "../Navbar/MiniNavbar";

import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Hobbies from "./sections/Hobbies";

export const About = () => {
  const [activeSection, setActiveSection] = useState("skills"); // default section

  const renderSection = () => {
    switch (activeSection) {
      case "skills":
        return <Skills />;
      case "education":
        return <Education />;
      case "hobbies":
        return <Hobbies />;
      default:
        return null;
    }
  };

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
            <div className={styles.aboutItemText}>
              <MiniNavbar setActiveSection={setActiveSection} />
              <div className={styles.sectionContent}>
                {renderSection()}
              </div>
            </div>
          </li>
        </ul>
        <img
          src="https://dl.dropboxusercontent.com/scl/fi/n014fojpo3x2juh5a6w5l/IMG_7039.JPG?rlkey=i4k9ikkh29tnvlze0v2i3auh8&st=s9rzjj8a"
          className={styles.aboutProfileImg}
          alt="Profile"
        />
      </div>
    </section>
  );
};
