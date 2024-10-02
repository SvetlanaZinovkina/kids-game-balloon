import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import styles from '../styles/Game.module.scss';
import routes from '../routes/routes';
import Arrow from '../images/arrow-left-circle-svgrepo-com.svg';
import generateBalloons from '../utilits/generateBallonsGame';
// @ts-ignore
import popBalloon from '../assets/music/balloon-pop.mp3';
import { Balloon } from '../types/types';
import imageMusic from "../images/music-note-svgrepo-com.svg";
import imageMusicOff from "../images/music-note-slash-svgrepo-com (1).svg";

const Game: React.FC = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const initialBalloons: Balloon[] = useMemo(() => generateBalloons(10), []);
  const [balloons, setBalloons] = useState<Balloon[]>(initialBalloons);
  const navigate = useNavigate();

  const popSound = new Howl({
    src: [popBalloon],
    volume: 0.2,
  });

  useEffect(() => {
    if (balloons.length < 3) {
      setBalloons(prevBalloons => [...prevBalloons, ...generateBalloons(10)]);
    }
  }, [balloons]);

  const handlePopBalloon = (id: string) => {
    if (isMusicPlaying) popSound.play();

    setBalloons(prevBalloons =>
      prevBalloons.filter(balloon => balloon.id !== id)
    );
  };

  const handleToggleMusic = () => {
      setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <div className={styles.container}>

      <div
        className={styles.arrowContainer}
        onClick={() => navigate(routes.mainPage())}
      >
        <img src={Arrow} alt="Назад" />
      </div>
      <div className={styles.musicContainer} onClick={handleToggleMusic}>
        {isMusicPlaying ? (
            <img src={imageMusic} alt="Звук" />
        ) : (
            <img src={imageMusicOff} alt="Без звука>" />
        )}
      </div>
      <div className={styles.containerBalloon}>
        {balloons.map(
          balloon =>
            !balloon.popped && (
              <img
                key={balloon.id}
                onClick={() => handlePopBalloon(balloon.id)} // Обработка клика по шарику
                src={balloon.image}
                alt="Шарик"
                className={`${styles.balloon} ${balloon.popped ? styles.popped : ''}`} // Добавляем класс для анимации
                style={balloon.style}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Game;
