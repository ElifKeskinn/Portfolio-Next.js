'use client';
import { useEffect, useState } from 'react';
import styles from './ParallaxBackground.module.css';

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.parallaxContainer}>
      <div 
        className={styles.parallaxLayer}
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
    </div>
  );
} 