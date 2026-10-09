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
                    <li>C, C++</li>
                    <li>Python</li>
                    <li>Verilog</li>
                    <li>VHDL</li>
                    <li>Java</li>
                    <li>SQL</li>
                    <li>Assembly x86</li>
                  </ul>
                </div>
                <div>
                  <strong>Libraries:</strong>
                  <ul className={styles.skillsDetails}>
                    <li>OpenCV</li>
                    <li>MediaPipe</li>
                    <li>NLTK</li>
                    <li>Pandas</li>
                    <li>TensorFlow</li>
                  </ul>
                </div>
                <div>
                  <strong>Developer Tools:</strong>
                  <ul className={styles.skillsDetails}>
                    <li>Git</li>
                    <li>Vivado</li>
                    <li>Visual Studio Code</li>
                    <li>Linux OS</li>
                  </ul>
                </div>
                <div>
                  <strong>Hardware:</strong>
                  <ul className={styles.skillsDetails}>
                    <li>FPGA(AMD/Xilinx Artix-7)</li>
                    <li>STM32 Nucelo</li>
                    <li>Raspberry Pi</li>
                    <li>ESP32</li>
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
