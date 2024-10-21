'use client';
import { useState, useEffect } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true); 

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, subject, message }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Email sent successfully!');
        setEmail('');
        setSubject('');
        setMessage('');
        setTimeout(() => {
          setStatus(''); 
        }, 5000);
      } else {
        setStatus('Error sending email.');
      }
    } catch (error) {
      setStatus('Error sending email.');
    } finally {
      setIsSending(false); 
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Me</h1>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label htmlFor="email" className={styles.label}>Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSending} 
        />

        <label htmlFor="subject" className={styles.label}>Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          className={styles.input}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          disabled={isSending} 
        />

        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          disabled={isSending} 
        />

        <button type="submit" className={styles.button} disabled={isSending}>
          {isSending ? 'Sending...' : 'Send Email'}
        </button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Contact;
