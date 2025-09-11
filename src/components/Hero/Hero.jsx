import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Marcus Lara Sanchez</h1>
        <p className={styles.description}>Studying Computer Engineering</p>
        <a href="mailto:marcuslara240@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <div className={styles.profileWrapper}>
        <img
          src={getImageUrl("hero/portfolio.jpeg")}
          className={styles.heroImg}
          alt="Profile"
        />

        {/* Social icons manually positioned */}
        <ul className={styles.icons}>
          <li className={styles.gmail}>
            <a href="mailto:marcuslara240@gmail.com">
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
            </a>
          </li>
          <li className={styles.linkedin}>
            <a
              href="https://www.linkedin.com/in/marcuslarasanchez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
            </a>
          </li>
          <li className={styles.github}>
            <a
              href="https://github.com/ml13c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={getImageUrl("contact/githubIcon.png")} alt="Github" />
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
