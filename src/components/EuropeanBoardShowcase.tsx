'use client';

import React from 'react';
import Link from 'next/link';
import { useBooking } from '@/context/BookingContext';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './EuropeanBoardShowcase.module.css';

export default function EuropeanBoardShowcase() {
  const { openBooking } = useBooking();

  // 12 European stars positioned in a 360-degree circle
  const starCount = 12;
  const radius = 46; // radius in px from center
  const center = 60; // center offset in 120px box

  const stars = Array.from({ length: starCount }).map((_, i) => {
    const angle = (i * (360 / starCount) - 90) * (Math.PI / 180);
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return { x, y, id: i };
  });

  return (
    <section className={styles.showcaseSection}>
      <div className="container">
        <ScrollReveal direction="scale" duration={900}>
          <div className={styles.cardContainer}>
            <div className={styles.ambientGlow} />

            <div className={styles.grid}>
              {/* Left Column: Distinction Details */}
              <div className={styles.contentCol}>
                <div className={styles.badgeRow}>
                  <span className={styles.euPill}>
                    <span>🇪🇺</span> EBOPRAS Certified Fellow
                  </span>
                  <span className={styles.recordPill}>
                    🇮🇳 Historic Indian Benchmark
                  </span>
                </div>

                <h2 className={styles.headline}>
                  Youngest Indian Plastic Surgeon Certified by <span className={styles.goldText}>European Board</span>
                </h2>

                <p className={styles.leadText}>
                  Dr. Gourav Siwas has achieved the prestigious landmark of becoming the <strong>Youngest Indian Plastic Surgeon certified by the European Board of Plastic, Reconstructive and Aesthetic Surgery (EBOPRAS)</strong>. This rare international fellowship validates top-tier surgical mastery, international ethical standards, and advanced operative safety.
                </p>

                <div className={styles.featuresList}>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>🔬</div>
                    <div className={styles.featureContent}>
                      <h4>International Sub-Millimeter Precision</h4>
                      <p>Adherence to the highest European Union standards for intricate hand microsurgery and complex flap reconstructions.</p>
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✨</div>
                    <div className={styles.featureContent}>
                      <h4>Global Aesthetic Standards</h4>
                      <p>Modern, evidence-based cosmetic facial and body contouring techniques designed for natural, harmonious balance.</p>
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>🛡️</div>
                    <div className={styles.featureContent}>
                      <h4>Peer-Assessed Surgical Safety</h4>
                      <p>Stringently vetted by European surgical boards with zero compromise on tissue viability and patient outcomes.</p>
                    </div>
                  </div>
                </div>

                <div className={styles.ctaRow}>
                  <button 
                    onClick={() => openBooking('Direct (Hospital OPD)')}
                    className={styles.primaryGoldBtn}
                  >
                    Consult European Board Certified Surgeon
                  </button>
                  <Link href="/about" className={styles.ghostBtn}>
                    View Verified Credentials &rarr;
                  </Link>
                </div>
              </div>

              {/* Right Column: European Board Seal & Rotating Stars */}
              <div className={styles.sealWrapper}>
                <div className={styles.emblemBox}>
                  {/* Rotating 12-Star European Constellation */}
                  <div className={styles.starsOrbit}>
                    <div className={styles.rotatingRing}>
                      {stars.map((s) => (
                        <span
                          key={s.id}
                          className={styles.star}
                          style={{
                            left: `${s.x}px`,
                            top: `${s.y}px`,
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <div className={styles.centerInsignia}>
                      <span>🇪🇺</span>
                    </div>
                  </div>

                  <h3 className={styles.emblemTitle}>EBOPRAS FELLOW</h3>
                  <div className={styles.emblemSubtitle}>European Board Certified</div>

                  <div className={styles.emblemDivider}></div>

                  <div className={styles.emblemStats}>
                    <div className={styles.emblemStat}>
                      <span className={styles.statVal}>India's Youngest</span>
                      <span className={styles.statDesc}>Board Certified</span>
                    </div>
                    <div className={styles.emblemStat}>
                      <span className={styles.statVal}>UEMS / EBOPRAS</span>
                      <span className={styles.statDesc}>European Union</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
