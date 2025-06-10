import React from "react";
import styles from "./Navbar.module.css";

export const MiniNavbar = ({ setActiveSection }) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuItems}>
        <li>
          <button onClick={() => setActiveSection("skills")}>Skills</button>
        </li>
        <li>
          <button onClick={() => setActiveSection("education")}>Education</button>
        </li>
        <li>
          <button onClick={() => setActiveSection("hobbies")}>Hobbies</button>
        </li>
      </ul>
    </nav>
  );
};
