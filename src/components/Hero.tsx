'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { doctorData } from '@/data/doctorData';
import { useBooking } from '@/context/BookingContext';
import ScrollReveal from '@/components/ScrollReveal';
import Counter from '@/components/Counter';
import styles from './Hero.module.css';

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section id="hero" className={styles.hero}>
      {/* Abstract Design Elements */}
      <div className={styles.circleBlob1}></div>
      <div className={styles.circleBlob2}></div>

      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <ScrollReveal direction="up" delay={100}>
            <div className={styles.badgeWrapper}>
              <span className="badge badge-gold">
                ✦ Gold Medalist 2022
              </span>
              <span className="badge">
                Sir Ganga Ram Hospital
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <h1 className={styles.title}>
              Restoring Form, <br />
              <span className={styles.highlight}>Redefining Aesthetics</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <p className={styles.description}>
              Welcome to the official portal of <strong>{doctorData.name}</strong>, a distinguished <strong>{doctorData.specialty}</strong>. Combining microvascular precision and artistic vision to deliver world-class reconstructive and cosmetic outcomes.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <div className={styles.actions}>
              <button 
                id="hero-book-btn" 
                onClick={() => openBooking()} 
                className="btn btn-primary btn-shine-wrapper"
              >
                Book Consultation
              </button>
              <Link href="/about" className="btn btn-secondary">
                View Qualifications
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={500}>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  <Counter endValue={12} suffix="+" />
                </span>
                <span className={styles.statLabel}>Years in Medicine</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>KGMU & VMMC</span>
                <span className={styles.statLabel}>Premier Education</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  <Counter endValue={100} suffix="%" />
                </span>
                <span className={styles.statLabel}>Patient Dedication</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className={styles.visual}>
          <ScrollReveal direction="scale" delay={300} duration={1000} className={styles.imageRevealWrapper}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBacking}></div>
              <div className={`${styles.glassFrame} glass-card`}>
                <Image 
                  src={doctorData.imageUrl} 
                  alt={doctorData.name} 
                  width={360} 
                  height={400} 
                  priority
                  className={styles.image}
                />
              </div>

              {/* Floating Credentials Badges */}
              <div className={`${styles.floatingCard} ${styles.floatCard1} glass-card animate-float`}>
                <div className={styles.floatIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" fill="url(#medalGoldGrad)" />
                    <path d="M12 15.5L9.5 21L12 19.5L14.5 21L12 15.5Z" fill="var(--secondary)" />
                    <circle cx="12" cy="9" r="4" stroke="white" strokeWidth="1" />
                    <defs>
                      <linearGradient id="medalGoldGrad" x1="6" y1="3" x2="18" y2="15" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F59E0B" />
                        <stop offset="1" stopColor="#D97706" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className={styles.floatText}>
                  <strong>BR Aggarwal Gold Medal</strong>
                  <span>Best in Plastic Surgery</span>
                </div>
              </div>

              <div className={`${styles.floatingCard} ${styles.floatCard2} glass-card animate-float-delayed`}>
                <div className={styles.floatIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 5V11C4 16.52 7.41 21.74 12 23C16.59 21.74 20 16.52 20 11V5L12 2Z" fill="var(--primary)" />
                    <path d="M12 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M7 12H17" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className={styles.floatText}>
                  <strong>ATLS Instructor</strong>
                  <span>Trauma Life Support</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
