'use client';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Framer Motion",
    image: "/images/portfolio.jpg",
    github: "https://github.com/username/portfolio"
  },
  // Diğer projeler...
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.projectCard}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              rotateY: 10,
              z: 50,
              transition: { duration: 0.2 }
            }}
          >
            <div className={styles.projectImage}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}