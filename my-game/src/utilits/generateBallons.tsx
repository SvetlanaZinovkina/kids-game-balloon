import styles from '../styles/StartPage.module.scss';
import React from 'react';
import Balloon1 from '../images/balloon-svgrepo-com (1).svg';
import Balloon2 from '../images/balloon-svgrepo-com (2).svg';
import Balloon3 from '../images/balloon-svgrepo-com (3).svg';
import Balloon4 from '../images/balloon-svgrepo-com (4).svg';

const generateBalloons = () => {
  const balloonCount = 50;

  const balloonImages = [Balloon1, Balloon2, Balloon3, Balloon4];

  return Array.from({ length: balloonCount }, (_, i) => {
    const randomBalloon =
      balloonImages[Math.floor(Math.random() * balloonImages.length)];
    return (
      <img
        key={i}
        src={randomBalloon}
        alt="Шарик"
        className={styles.balloon}
        style={{
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 30 + 20}s`, // Случайная скорость
        }}
      />
    );
  });
};

export default generateBalloons;
