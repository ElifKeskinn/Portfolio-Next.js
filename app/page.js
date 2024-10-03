import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className="container">
      <section className={styles.hero}>
        <h1>Hi, I&apos;m Elif Keskin</h1>
        <p>I am a software developer. It&apos;s nice to meet you!</p>
      </section>

      <section className={styles.featured}>
        <h2>Featured Projects</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.header}>Contact Form Management System</h3>
            <p>A full-stack web application developed using React.js, Node.js, MongoDB, and Bootstrap.</p>
            {/* <Link href="/projects" className={styles.link}>Details</Link> */}
          </div>
          <div className={styles.card}>
            <h3 className={styles.header}>Fighter Aircraft Status System</h3>
            <p>A real-time desktop application developed using React.js, CSS, WebSocket, and Electron.</p>
            {/* <Link href="/projects" className={styles.link}>Details</Link> */}
          </div>
          <div className={styles.card}>
            <h3 className={styles.header}>Spider Solitaire Game</h3>
            <p>A game with multiple features designed to enhance user experience, developed using React.js and CSS.</p>
            {/* <Link href="/projects" className={styles.link}>Details</Link> */}
          </div>
          <div className={styles.card}>
            <h3 className={styles.header}>Adventure Ally</h3>
            <p>A backend application developed using .Net Core to simplify user vacation planning by pulling data from multiple websites.</p>
            {/* <Link href="/projects" className={styles.link}>Details</Link> */}
          </div>
        </div>
      </section>
    </div>
  )
}
