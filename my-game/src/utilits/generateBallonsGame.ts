import uniqueId from 'lodash.uniqueid';
import random from 'lodash.random';
import Balloon1 from '../images/balloon-svgrepo-com (1).svg';
import Balloon2 from '../images/balloon-svgrepo-com (2).svg';
import Balloon3 from '../images/balloon-svgrepo-com (3).svg';
import Balloon4 from '../images/balloon-svgrepo-com (4).svg';
import { Balloon } from '../types/types';

const generateBalloons = (balloonCount = 50): Balloon[] => {
  const balloonImages = [Balloon1, Balloon2, Balloon3, Balloon4];

  return Array.from({ length: balloonCount }, () => {
    const randomBalloon =
      balloonImages[Math.floor(Math.random() * balloonImages.length)];
    return {
      id: uniqueId(),
      image: randomBalloon,
      style: {
        top: `${random(0, 90)}vh`,
        left: `${random(0, 70)}vw`,
        animationDuration: `${random(10, 50)}s`,
      },
      popped: false,
    };
  });
};

export default generateBalloons;
