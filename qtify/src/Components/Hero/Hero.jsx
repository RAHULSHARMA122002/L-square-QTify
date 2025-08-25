import React from "react";
import styles from "./Hero.module.css";
import headphones from '../assets/vibrating-headphone 1.png'

function Hero() {
  return (
    <div className={styles.hero}>
    <div>
      <h1>100 Thousand Songs, ad-free</h1>
      <h2>Over thousands podcast episodes</h2>
    </div>
    <img src={headphones} alt="headphones" className={styles.heroImage} />
  </div>
  );
}

export default Hero;
