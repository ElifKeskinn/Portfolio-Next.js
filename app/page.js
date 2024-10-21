'use client';
import Link from 'next/link';
import styles from './page.module.css';
import dynamic from 'next/dynamic';
import Butterflies from '@/components/Butterflies/Butterflies';

const Slider = dynamic(() => import('react-slick'), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="container">
      <Butterflies />
      <section className={styles.hero}>
        <div className={styles.sliderContainer}>
          <Slider {...settings}>
            <div className={styles.photobg}>
              <img src="/images/photo3.png" alt="Elif Keskin3" className={styles.photo} />
            </div>
            <div className={styles.photobg}>
              <img src="/images/photo1.jpg" alt="Elif Keskin1" className={styles.photo} />
            </div>
            <div className={styles.photobg}>
              <img src="/images/photo2.png" alt="Elif Keskin2" className={styles.photo} />
            </div>

          </Slider>
        </div>
        <h1>Hi, I&apos;m Elif Keskin</h1>
        <p>I am a software developer. It&apos;s nice to meet you!</p>
        <p>I hope you&apos;re happy to meet me too.</p>
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
            <h3 className={styles.header}>Memory Game</h3>
            <p>Memory Game is a classic matching game developed using React.js. It includes both single-player and multiplayer modes, with various themes such as numbers and animal icons. [<a href="https://memory-flame-mu.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.link}>Click to Play</a>]</p>
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
