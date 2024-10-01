import Cloud from '../images/cloud-svgrepo-com.svg';
import styles from '../styles/StartPage.module.scss';
import React from 'react';

const generateClouds = () => {
  const cloudCount = 5;
  return Array.from({ length: cloudCount }, (_, i) => (
    <img
      key={i}
      src={Cloud}
      alt="Облако"
      className={styles.cloud}
      style={{
        top: `${Math.random() * 80}vh`,
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 50 + 30}s`, // Случайная скорость
      }}
    />
  ));
};

export default generateClouds;
