import React from 'react';
import { useNavigate } from 'react-router';
import styles from '../../styles/Button.module.scss';
import routes from '../../routes/routes';
import { motion } from 'framer-motion';

const Button: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.button} onClick={() => navigate(routes.game())}>
        <p>Старт</p>
      </div>
      {/*<motion.button*/}
      {/*    className={styles.button}*/}
      {/*    onClick={() => navigate(routes.game())}*/}
      {/*    whileHover={{ scale: 1.1 }} // Увеличение на ховер*/}
      {/*    animate={{ scale: [1, 1.05, 1] }} // Постоянное пульсирование*/}
      {/*    transition={{ repeat: Infinity, duration: 1 }} // Бесконечное повторение*/}
      {/*>*/}
      {/*    <p>Старт</p>*/}
      {/*</motion.button>*/}
    </>
  );
};

export default Button;
