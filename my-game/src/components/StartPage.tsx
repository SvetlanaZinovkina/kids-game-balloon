import { motion } from "framer-motion";
import React from "react";
import styles from "../styles/StartPage.module.scss";
import Cloud from '../images/cloud-svgrepo-com.svg';
import Balloon1 from '../images/balloon-svgrepo-com (1).svg';
import Balloon2 from '../images/balloon-svgrepo-com (2).svg';
import Balloon3 from '../images/balloon-svgrepo-com (3).svg';
import Balloon4 from '../images/balloon-svgrepo-com (4).svg';
import Button from "./ui/button";

const StartPage: React.FC = () => {
    const cloudCount = 4;
    const balloonCount = 30;

    // Массив для случайного выбора шариков
    const balloonImages = [Balloon1, Balloon2, Balloon3, Balloon4];

    // Генерация случайной позиции и времени движения
    const getRandomValue = (min: number, max: number) => Math.random() * (max - min) + min;

    // Генерация шариков
    const generateBalloons = () => {
        return Array.from({ length: balloonCount }, (_, i) => {
            const randomBalloon = balloonImages[Math.floor(Math.random() * balloonImages.length)];
            return (
                <motion.img
                    key={i}
                    src={randomBalloon}
                    alt="Шарик"
                    className="balloon"
                    style={{
                        top: `${getRandomValue(50, 100)}vh`, // случайная начальная позиция по Y
                        left: `${getRandomValue(0, 100)}vw`, // случайная позиция по X
                    }}
                    initial={{ y: '100vh' }}
                    animate={{ y: '-10vh' }}
                    transition={{
                        duration: getRandomValue(20, 100), // случайная скорость
                        repeat: Infinity,
                        repeatDelay: getRandomValue(0, 5), // случайная задержка
                    }}
                />
            );
        });
    };

    // Генерация облаков
    const generateClouds = () => {
        return Array.from({ length: cloudCount }, (_, i) => (
            <motion.img
                key={i}
                src={Cloud}
                alt="Облако"
                className="cloud"
                style={{
                    top: `${getRandomValue(0, 80)}vh`, // случайная позиция по Y
                    left: `${getRandomValue(0, 80)}vw`, // начальная позиция по X
                }}
                initial={{ x: '-20vw' }}
                animate={{ x: '100vw' }}
                transition={{
                    duration: getRandomValue(30, 60), // случайная скорость
                    repeat: Infinity,
                    ease: 'linear'
                }}
            />
        ));
    };

    return (
        <div className={styles.container}>
            <article className={styles.title}>Добро пожаловать в игру</article>
            <div className="bg">{generateBalloons()}</div> {/* Генерация 50 шариков */}
            <Button />
            {/*{generateClouds()} /!* Генерация 10 облаков *!/*/}
        </div>
    );
};

export default StartPage;
