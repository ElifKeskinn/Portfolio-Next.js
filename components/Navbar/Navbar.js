import Link from 'next/link'
import styles from './Navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <h1 className={styles.logo}>Elif Keskin</h1>
                <div className={styles.links}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/about" className={styles.link}>About Me</Link>
                    <Link href="https://github.com/ElifKeskinn?tab=repositories" className={styles.link}>Projects</Link>
                    <Link href="/contact" className={styles.link}>Contact(Soon)</Link>
                    <DarkModeToggle />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
