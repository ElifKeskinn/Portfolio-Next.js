'use client';
import { motion } from 'framer-motion';
import styles from './Timeline.module.css';

export default function Timeline({ items }) {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={styles.timelineItem}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.timelineContent}>
            <h4>{item.title}</h4>
            <p>{item.date}</p>
            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 