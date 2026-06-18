'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useBooking } from '@/context/BookingContext';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px' }}>
              <rect x="10" y="2" width="4" height="20" rx="1.5" fill="var(--primary)" />
              <rect x="2" y="10" width="20" height="4" rx="1.5" fill="var(--primary)" />
              <circle cx="12" cy="12" r="3" fill="var(--secondary)" />
            </svg>
            <span className={styles.logoText}>Dr. Manigandan K</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/expertise" className={styles.navLink}>Specialties</Link>
          <Link href="/journey" className={styles.navLink}>Journey</Link>
          <Link href="/opd" className={styles.navLink}>OPD Timings</Link>
          <Link href="/faqs" className={styles.navLink}>FAQs</Link>
          <Link href="/patient-care" className={styles.navLink}>Patient Care</Link>
        </nav>

        <div className={styles.cta}>
          <button id="header-book-btn" onClick={() => openBooking()} className="btn btn-primary btn-sm">
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`${styles.burger} ${isMenuOpen ? styles.burgerActive : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <div className={`${styles.mobilePanel} ${isMenuOpen ? styles.mobilePanelOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className={styles.mobileNavLink}>About</Link>
          <Link href="/expertise" onClick={() => setIsMenuOpen(false)} className={styles.mobileNavLink}>Specialties</Link>
          <Link href="/journey" onClick={() => setIsMenuOpen(false)} className={styles.mobileNavLink}>Journey</Link>
          <Link href="/opd" onClick={() => setIsMenuOpen(false)} className={styles.mobileNavLink}>OPD Timings</Link>
          <Link href="/faqs" onClick={() => setIsMenuOpen(false)} className={styles.mobileNavLink}>FAQs</Link>
          <Link href="/patient-care" onClick={() => setIsMenuOpen(false)} className={styles.mobileNavLink}>Patient Care</Link>
          <button 
            id="header-book-btn-mobile"
            onClick={() => {
              setIsMenuOpen(false);
              openBooking();
            }} 
            className="btn btn-primary"
            style={{ marginTop: '20px', width: '100%' }}
          >
            Book Appointment
          </button>
        </nav>
      </div>
    </header>
  );
}
