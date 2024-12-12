'use client';
import { motion } from 'framer-motion';
import styles from './SkillBars.module.css';

export default function SkillBars() {
  return (
    <div className={styles.skillsContainer}>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <motion.li
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          Front-End Technologies: React.js, Javascript, HTML, CSS
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          Back-end Technologies: Node.js, Next.js, .Net Core, Python, Java
        </motion.li>
        {/* Diğer skill'ler */}
      </motion.ul>
    </div>
  );
} 