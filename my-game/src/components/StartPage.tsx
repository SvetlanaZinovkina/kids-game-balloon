import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Howl } from 'howler';
import styles from '../styles/StartPage.module.scss';
import { useNavigate } from 'react-router';
import routes from '../routes/routes';
import ButtonSound from './ui/buttonSound';
import generateBalloons from '../utilits/generateBallons';
import generateClouds from '../utilits/generateClouds';
// @ts-ignore
import musicFile from '../assets/music/affection-core-c152-nostalgic-memories.mp3';
import imageMusic from '../images/music-note-svgrepo-com.svg';
import imageMusicOff from '../images/music-note-slash-svgrepo-com (1).svg';

const StartPage: React.FC = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const navigate = useNavigate();
  const soundRef = useRef<Howl | null>(null);

  const balloons = useMemo(() => generateBalloons(), []);
  const clouds = useMemo(() => generateClouds(), []);

  useEffect(() => {
    soundRef.current = new Howl({
      src: musicFile,
      volume: 0.1,
      loop: true,
    });

    soundRef.current.play();

    return () => {
      soundRef.current?.stop();
    };
  }, []);

  const handleToggleMusic = () => {
    if (soundRef.current) {
      if (isMusicPlaying) {
        soundRef.current.pause();
      } else {
        soundRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };
  return (
    <div className={styles.container}>
      <article className={styles.title}>Welcome</article>
      <div className={styles.musicContainer} onClick={handleToggleMusic}>
        {isMusicPlaying ? (
          <img src={imageMusic} alt="Звук" />
        ) : (
          <img src={imageMusicOff} alt="Без звука>" />
        )}
      </div>
      <div className={styles.bg}>
        {balloons}
        {clouds}
      </div>
      <button className={styles.button} onClick={() => navigate(routes.game())}>
        <p>Играть</p>
      </button>
    </div>
  );
};

export default StartPage;
