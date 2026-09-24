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
            <p>Key academic awards, certifications, and professional memberships of Dr. Gourav Siwas</p>
          </div>
        </ScrollReveal>

        <div className={styles.achievementsGrid}>
          {/* Left side: Complex Microsurgery Highlight */}
          <ScrollReveal direction="right" delay={150} duration={850}>
            <div className={styles.goldMedalCard}>
              <div className={styles.medalIcon}>🏅</div>
              <div className={styles.medalContent}>
                <h3>Excellence in Complex Microsurgery & Hand Replantation</h3>
                <h4>Sir Ganga Ram Hospital &bull; Department of Plastic Surgery</h4>
                <p>
                  Recognized for critical surgical contributions in emergency limb salvage, microvascular anastomosis, and successfully executing complex severed hand replantations and free tissue transfers at Sir Ganga Ram Hospital.
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
                  <h4>ATLS Certified & Microvascular Trained</h4>
                  <p>Certified in Advanced Trauma Life Support by the American College of Surgeons, adhering to the highest global standards in polytrauma care and surgical patient safety.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={250} duration={850}>
              <div className={`${styles.credentialCard} glass-card`}>
                <div className={styles.credIcon}>🛡️</div>
                <div className={styles.credContent}>
                  <h4>Professional Memberships</h4>
                  <p>Full member of prestigious national and international surgical associations:</p>
                  <div className={styles.membershipsList}>
                    <span className={styles.membershipBadge} style={{ background: '#fef3c7', color: '#92400e', borderColor: '#fde68a' }}>🇪🇺 EBOPRAS (European Board)</span>
                    <span className={styles.membershipBadge}>APSI (Plastic Surgery)</span>
                    <span className={styles.membershipBadge}>ISSH (Hand Surgery)</span>
                    <span className={styles.membershipBadge}>IAAPS (Aesthetic)</span>
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
