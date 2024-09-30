import React from "react";
import { useNavigate } from 'react-router';
import styles from "../styles/Game.module.scss";
import routes from "../routes/routes";

const Game: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.button} onClick={() => navigate(routes.game())}><p>Старт</p></div>
    )
};

export default Game;
