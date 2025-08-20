import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Marcus Lara Sanchez</h1>
        <p className={styles.description}>Studying Computer Engineering</p>
        <a href="mailto:marcuslara240@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/portfolio.jpg")}
        className={styles.heroImg}
        alt="Profile"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
