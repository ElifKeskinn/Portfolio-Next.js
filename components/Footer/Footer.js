'use client';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.thankYou}>
        <h2>
          <span className={styles.thank}>thank</span>
          <span className={styles.you}> you</span>
          <span className={styles.thank}>!</span>
        </h2>
      </div>

      <div className={styles.social}>
        <p>If you think I can help you, contact me.</p>
        <a href="https://www.instagram.com/elf_keskn/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://github.com/ElifKeskinn" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/elif-keskin-b17172227/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:elif.keskin233@gmail.com">
          <FaEnvelope size={30} />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Elif Keskin. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
