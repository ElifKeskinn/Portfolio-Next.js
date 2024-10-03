import styles from './Footer.module.css'
import dynamic from 'next/dynamic';

const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });
const FaGithub = dynamic(() => import('react-icons/fa').then(mod => mod.FaGithub), { ssr: false });
const FaLinkedin = dynamic(() => import('react-icons/fa').then(mod => mod.FaLinkedin), { ssr: false });
const FaEnvelope = dynamic(() => import('react-icons/fa').then(mod => mod.FaEnvelope), { ssr: false });

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.social}>
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
  )
}

export default Footer
