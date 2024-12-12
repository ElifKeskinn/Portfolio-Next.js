import { useState, useEffect } from 'react';
import styles from './Butterflies.module.css';

const Butterflies = () => {
  // Farklı başlangıç pozisyonları ve animasyon süreleri için kelebekler
  const butterflies = [
    { id: 1, delay: '0s', size: 40 },
    { id: 2, delay: '5s', size: 40 },
    { id: 3, delay: '2s', size: 40 },
    { id: 4, delay: '7s', size: 40 },
    { id: 5, delay: '4s', size: 40 }
  ];

  return (
    <div className={styles.butterfliesContainer}>
      {butterflies.map((butterfly) => (
        <div 
          key={butterfly.id}
          className={styles.butterfly}
          style={{ 
            animationDelay: butterfly.delay,
            top: `${Math.random() * 100}%`  // Rastgele başlangıç pozisyonu
          }}
        >
          <img 
            src="/images/butterfly-flying.gif"
            alt="Flying Butterfly"
            style={{
              width: `${butterfly.size}px`,
              height: `${butterfly.size}px`
            }}
            className={styles.butterflyImage}
          />
        </div>
      ))}
    </div>
  );
};

export default Butterflies;
