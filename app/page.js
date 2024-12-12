'use client';
import Link from 'next/link';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import Butterflies from '@/components/Butterflies/Butterflies';
import { useEffect } from 'react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const carouselVariants = {
    hover: { 
      rotateY: 180,
      transition: { duration: 0.8 }
    }
  };

  // carousel için özel animasyon tanımları
  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.card3d}`);
    const carousel = document.querySelector(`.${styles.carousel3d}`);

    let angle = 0;
    let rotating = true;

    // Otomatik döndürme
    const interval = setInterval(() => {
      if (rotating) {
        angle -= 120;
        carousel.style.transform = `rotateY(${angle}deg)`;
      }
    }, 3000);

    // Hover durumunda dönmeyi durdur
    carousel.addEventListener('mouseenter', () => rotating = false);
    carousel.addEventListener('mouseleave', () => rotating = true);

    // Tıklama ile manuel döndürme
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const currentRotation = parseInt(card.dataset.rotation);
        angle = -currentRotation;
        carousel.style.transform = `rotateY(${angle}deg)`;
      });
    });

    return () => {
      clearInterval(interval);
      carousel.removeEventListener('mouseenter', () => rotating = false);
      carousel.removeEventListener('mouseleave', () => rotating = true);
    };
  }, []);

  return (
    <div className="container">
      <Butterflies />
      <motion.section 
        className={styles.hero}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className={styles.carousel3d}
          whileHover="hover"
          variants={carouselVariants}
        >
          <div className={styles.card3d}>
            <motion.img 
              src="/images/photo3.png" 
              alt="Elif Keskin3"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className={styles.card3d}>
            <motion.img 
              src="/images/photo1.jpg" 
              alt="Elif Keskin1"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className={styles.card3d}>
            <motion.img 
              src="/images/photo2.png" 
              alt="Elif Keskin2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
        <motion.h1 variants={itemVariants}>
          Hi, I&apos;m Elif Keskin
        </motion.h1>
        <motion.p variants={itemVariants}>
          I am a software developer. It&apos;s nice to meet you!
        </motion.p>
        <motion.p variants={itemVariants}>
          I hope you&apos;re happy to meet me too.
        </motion.p>
      </motion.section>

      <motion.section 
        className={styles.featured}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Featured Projects</motion.h2>
        <div className={styles.grid}>
          {[
            {
              title: "Contact Form Management System",
              description: "A full-stack web application developed using React.js, Node.js, MongoDB, and Bootstrap."
            },
            {
              title: "Fighter Aircraft Status System",
              description: "A real-time desktop application developed using React.js, CSS, WebSocket, and Electron."
            },
            {
              title: "Spider Solitaire Game",
              description: "A game with multiple features designed to enhance user experience, developed using React.js and CSS."
            },
            {
              title: "Memory Game",
              description: "Memory Game is a classic matching game developed using React.js. It includes both single-player and multiplayer modes, with various themes such as numbers and animal icons.",
              link: "https://memory-flame-mu.vercel.app/"
            },
            {
              title: "Adventure Ally",
              description: "A backend application developed using .Net Core to simplify user vacation planning by pulling data from multiple websites."
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <h3 className={styles.header}>{project.title}</h3>
              <p>{project.description}</p>
              {project.link && (
                <motion.a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Click to Play
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
