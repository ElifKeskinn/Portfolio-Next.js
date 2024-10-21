import { useState, useEffect } from 'react';
import styles from './butterflies.module.css';

const Butterflies = () => {
  const [butterflies, setButterflies] = useState([]);

  useEffect(() => {
    const createButterfly = () => {
      const butterfly = {
        id: Math.random(),
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        animationDuration: `${Math.random() * 5 + 5}s`,
      };

      setButterflies((prevButterflies) => [...prevButterflies, butterfly]);

      setTimeout(() => {
        setButterflies((prevButterflies) =>
          prevButterflies.filter((b) => b.id !== butterfly.id)
        );
      }, 15000); // 15 saniye sonra kaldır
    };

    // Kelebekleri sürekli oluştur
    const interval = setInterval(createButterfly, 3000); // Her 3 saniyede bir kelebek ekle

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className={styles.butterfly}
          style={{
            left: butterfly.left,
            top: butterfly.top,
            animationDuration: butterfly.animationDuration,
          }}
        >
          <img
            src="/images/butterfly-flying.gif"
            alt="Flying Butterfly"
            className={styles.butterflyGif}
          />
        </div>
      ))}
    </>
  );
};

export default Butterflies;
