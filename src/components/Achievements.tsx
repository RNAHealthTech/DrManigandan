'use client';

import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './Achievements.module.css';

export default function Achievements() {
  return (
    <section className={styles.achievementsSection}>
      <div className="container">
        <ScrollReveal direction="up">
          <div className="section-title">
            <h2>Achievements & Recognition</h2>
            <p>Key academic awards, certifications, and professional memberships of Dr. Manigandan K</p>
          </div>
        </ScrollReveal>

        <div className={styles.achievementsGrid}>
          {/* Left side: Gold Medal Highlight */}
          <ScrollReveal direction="right" delay={150} duration={850}>
            <div className={styles.goldMedalCard}>
              <div className={styles.medalIcon}>🏅</div>
              <div className={styles.medalContent}>
                <h3>Dr. B.R. Aggarwal Memorial Gold Medal</h3>
                <h4>Plastic Surgery (Uttar Pradesh State) &bull; 2022</h4>
                <p>
                  Awarded the prestigious Gold Medal for outstanding academic and clinical performance in MCh Plastic & Reconstructive Surgery. Representing excellence in advanced microvascular surgery and aesthetic planning.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right side: ATLS & Memberships */}
          <div className={styles.credentialsColumn}>
            <ScrollReveal direction="left" delay={200} duration={850}>
              <div className={`${styles.credentialCard} glass-card`}>
                <div className={styles.credIcon}>🩺</div>
                <div className={styles.credContent}>
                  <h4>ATLS Instructor (ACS)</h4>
                  <p>Certified Advanced Trauma Life Support Instructor by the American College of Surgeons, ensuring international standards of patient safety and emergency care.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={250} duration={850}>
              <div className={`${styles.credentialCard} glass-card`}>
                <div className={styles.credIcon}>🛡️</div>
                <div className={styles.credContent}>
                  <h4>Professional Memberships</h4>
                  <p>Proud lifetime member of India's leading plastic, cosmetic, and reconstructive surgery bodies:</p>
                  <div className={styles.membershipsList}>
                    <span className={styles.membershipBadge}>APSI-2071</span>
                    <span className={styles.membershipBadge}>IAAPS-2025</span>
                    <span className={styles.membershipBadge}>ISCLPCA-LM579</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
