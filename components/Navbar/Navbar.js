'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Elif Keskin
                </Link>
                <div className={styles.links}>
                    <Link 
                        href="/" 
                        className={styles.link}
                        aria-current={pathname === '/' ? 'page' : undefined}
                    >
                        Home
                    </Link>
                    <Link 
                        href="/about" 
                        className={styles.link}
                        aria-current={pathname === '/about' ? 'page' : undefined}
                    >
                        About Me
                    </Link>
                    <Link 
                        href="https://github.com/ElifKeskinn?tab=repositories" 
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Projects
                    </Link>
                    <Link 
                        href="/contact" 
                        className={styles.link}
                        aria-current={pathname === '/contact' ? 'page' : undefined}
                    >
                        Contact
                    </Link>
                    <DarkModeToggle />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
