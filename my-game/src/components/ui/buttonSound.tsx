import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Button.module.scss';
import imageMusic from '../../images/music-note-svgrepo-com.svg';
import imageMusicOff from '../../images/music-note-slash-svgrepo-com (1).svg';
import { Howl } from 'howler';
// @ts-ignore
import musicFile from '../../assets/music/affection-core-c152-nostalgic-memories.mp3';

const ButtonSound: React.FC = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const soundRef = useRef<Howl | null>(null);

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
    <div className={styles.musicContainer} onClick={handleToggleMusic}>
      {isMusicPlaying ? (
        <img src={imageMusic} alt="Звук" />
      ) : (
        <img src={imageMusicOff} alt="Без звука>" />
      )}
    </div>
  );
};

export default ButtonSound;
