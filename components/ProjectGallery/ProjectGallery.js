'use client';
import { motion } from 'framer-motion';
import styles from './ProjectGallery.module.css';

export default function ProjectGallery({ projects }) {
  return (
    <div className={styles.gallery}>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={styles.projectCard}
          whileHover={{ 
            scale: 1.05,
            rotateY: 10,
            z: 50
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={project.image} alt={project.title} />
          <div className={styles.projectInfo}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 