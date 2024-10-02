import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import styles from '../styles/Game.module.scss';
import routes from '../routes/routes';
import Arrow from '../images/arrow-left-circle-svgrepo-com.svg';
import generateBalloons from '../utilits/generateBallonsGame';
import { Balloon } from '../types/types';

const Game: React.FC = () => {
  const initialBalloons: Balloon[] = useMemo(() => generateBalloons(10), []);
  const [balloons, setBalloons] = useState<Balloon[]>(initialBalloons);
  const navigate = useNavigate();
  useEffect(() => {
    if (balloons.length < 3) {
      setBalloons(prevBalloons => [...prevBalloons, ...generateBalloons(10)]);
    }
  }, [balloons]);

  const handlePopBalloon = (id: string) => {
    setBalloons(prevBalloons =>
      prevBalloons.filter(balloon => balloon.id !== id)
    );
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        onClick={() => navigate(routes.mainPage())}
      >
        <img src={Arrow} alt="Назад" />
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
