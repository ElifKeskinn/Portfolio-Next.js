'use client'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{project.name}</h3>
      <p className={styles.description}>{project.description || 'Açıklama mevcut değil.'}</p>
      <a href={project.html_url} target="_blank" rel="noopener noreferrer" className={styles.link}>
       Review on GitHub
      </a>
    </div>
  )
}

export default ProjectCard
