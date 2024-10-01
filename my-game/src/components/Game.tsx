import React from 'react';
import { useNavigate } from 'react-router';
import styles from '../styles/Game.module.scss';
import routes from '../routes/routes';
import Arrow from '../images/arrow-left-circle-svgrepo-com.svg';

const Game: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        onClick={() => navigate(routes.mainPage())}
      >
        {Arrow}
      </div>
    </div>
  );
};

export default Game;
