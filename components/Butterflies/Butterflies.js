import { useState, useEffect } from 'react';
import styles from './Butterflies.module.css';
import Image from 'next/image';

const Butterflies = () => {
  return (
    <div className={styles.butterfliesContainer}>
      <div className={styles.butterfly}>
        <Image 
          src="/images/butterfly-flying.gif"
          alt="Flying Butterfly"
          width={50}
          height={50}
          className={styles.butterflyImage}
          unoptimized
        />
      </div>
    </div>
  );
};

export default Butterflies;
