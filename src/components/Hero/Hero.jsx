import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Febby</h1>
        <p className={styles.description}>
        I am a student at Wilmar Business Polytechnic Indonesia 
        majoring in Software Engineering Technology. My expertise
        is in UI/UX Designer, and I want to continue learning to improve my skills.
        </p>
        <a href="febbysantika11@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
