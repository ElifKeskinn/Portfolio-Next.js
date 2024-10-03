'use client'

import { useEffect, useState } from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import styles from './Projects.module.css'

const Projects = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ElifKeskinn/repos')
        if (!response.ok) {
          throw new Error('GitHub API\'den veri çekilemedi')
        }
        const data = await response.json()
        setRepos(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  if (loading) return <div className="container"><p>Projeler yükleniyor...</p></div>
  if (error) return <div className="container"><p>Hata: {error}</p></div>

  return (
    <div className="container">
      <h2 className={styles.heading}>Projelerim</h2>
      <div className={styles.grid}>
        {repos.map(repo => (
          <ProjectCard key={repo.id} project={repo} />
        ))}
      </div>
    </div>
  )
}


