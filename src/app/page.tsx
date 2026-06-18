'use client';

import React from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { useBooking } from '@/context/BookingContext';
import { doctorData } from '@/data/doctorData';
import styles from './home.module.css';

export default function Home() {
  const { openBooking } = useBooking();

  const primaryPillars = [
    {
      title: "Cosmetic & Aesthetic Surgery",
      description: "Enhancing facial features, body contours, and skin aesthetics using advanced surgical and non-surgical procedures.",
      icon: "✨",
      link: "/expertise"
    },
    {
      title: "Reconstructive Microsurgery",
      description: "Precision microvascular tissue transfers to rebuild complex defects from cancer removal, severe trauma, or infections.",
      icon: "🔬",
      link: "/expertise"
    },
    {
      title: "Hand & Extremity Microsurgery",
      description: "Intricate repairs of severed nerves, tendons, and blood vessels in the hand, including emergency finger replantations.",
      icon: "🤚",
      link: "/expertise"
    }
  ];

  const whyChooseUs = [
    {
      title: "Microsurgical Precision",
      description: "Trained at premier institutions (KGMU & VMMC) specializing in sub-millimeter microvascular repairs using state-of-the-art operating microscopes."
    },
    {
      title: "Affiliated with Sir Ganga Ram Hospital",
      description: "Operates in one of India's leading tertiary multi-specialty medical centers with 24/7 emergency care and high-end intensive care support."
    },
    {
      title: "ATLS Safety Protocols",
      description: "Certified Advanced Trauma Life Support Instructor ensuring absolute patient safety and international clinical standards in trauma reconstruction."
    },
    {
      title: "Patient-Centric Outcomes",
      description: "Designs customized surgical pathways tailored to each individual patient, emphasizing natural outcomes and minimal post-operative recovery times."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Hospital Association Banner */}
      <div className={styles.associationBanner}>
        <div className="container">
          <div className={styles.associationContent}>
            <span className={styles.associationPrefix}>Principal Affiliation</span>
            <div className={styles.associationHospital}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.associationIcon}>
                <rect width="24" height="24" rx="4" fill="var(--primary)" />
                <path d="M12 6V18" stroke="white" strokeWidth="3" strokeLinecap="round" />
                <path d="M6 12H18" stroke="white" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <strong>Sir Ganga Ram Hospital, New Delhi</strong>
            </div>
            <span className={styles.associationDept}>Associate Consultant &bull; Dept of Plastic, Cosmetic, Hand & Microsurgery</span>
          </div>
        </div>
      </div>

      {/* Section 1: Clinical Pillars */}
      <section className={styles.section}>
        <div className="container">
          <div className="section-title">
            <h2>Clinical Pillars</h2>
            <p>The core domains of Dr. Manigandan K's surgical practice</p>
          </div>

          <div className={styles.pillarsGrid}>
            {primaryPillars.map((pillar, idx) => (
              <div key={idx} className={`${styles.pillarCard} glass-card`}>
                <div className={styles.pillarIcon}>
                  <span>{pillar.icon}</span>
                </div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.description}</p>
                <Link href={pillar.link} className={styles.pillarLink}>
                  Learn More <span>&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Why Choose Us */}
      <section className={`${styles.section} ${styles.whyChoose}`}>
        <div className="container">
          <div className={styles.splitGrid}>
            {/* Visual stats on left */}
            <div className={styles.whyVisual}>
              <div className={`${styles.visualCard} glass-card`}>
                <span className={styles.visualNumber}>12+</span>
                <span className={styles.visualLabel}>Years of Experience</span>
              </div>
              <div className={`${styles.visualCard} glass-card`}>
                <span className={styles.visualNumber}>KGMU</span>
                <span className={styles.visualLabel}>MCh & fellowship</span>
              </div>
              <div className={`${styles.visualCard} glass-card`}>
                <span className={styles.visualNumber}>Gold</span>
                <span className={styles.visualLabel}>Medal Winner</span>
              </div>
              <div className={`${styles.visualCard} glass-card`}>
                <span className={styles.visualNumber}>100%</span>
                <span className={styles.visualLabel}>Patient Care Focus</span>
              </div>
            </div>

            {/* Text description on right */}
            <div className={styles.whyContent}>
              <h2>Why Choose Dr. Manigandan K?</h2>
              <p>
                Choosing a plastic surgeon is a deeply personal and crucial decision. Dr. Manigandan K combines extensive surgical expertise with an artistic vision to restore form, function, and aesthetic balance.
              </p>

              <div className={styles.whyList}>
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className={styles.whyItem}>
                    <div className={styles.whyCheck}>✓</div>
                    <div className={styles.whyText}>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Patient Testimonials */}
      <section className={`${styles.section} ${styles.testimonialsSection}`}>
        <div className="container">
          <div className="section-title">
            <h2>Patient Stories & Outcomes</h2>
            <p>Real-world experiences from individuals who underwent reconstructive or aesthetic surgeries</p>
          </div>

          <div className={styles.testimonialsGrid}>
            {doctorData.testimonials.map((t, idx) => (
              <div key={idx} className={`${styles.testimonialCard} glass-card`}>
                <div className={styles.testimonialHeader}>
                  <div className={styles.patientMeta}>
                    <h4>{t.patientName}</h4>
                    <span className="badge badge-gold">{t.condition}</span>
                  </div>
                  <span className={styles.patientTypeBadge}>{t.type}</span>
                </div>
                <div className={styles.stars}>
                  {"★".repeat(t.rating)}
                </div>
                <p className={styles.testimonialFeedback}>"{t.feedback}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Patient Care Guidelines Alert Box */}
      <section className={styles.section}>
        <div className="container">
          <div className={`${styles.carePreviewCard} glass-card`}>
            <div className={styles.careLeft}>
              <div className={styles.careIcon}>🩺</div>
              <div className={styles.careText}>
                <h3>Patient Safety & Recovery Guidelines</h3>
                <p>
                  Proper surgical preparation and post-operative care are essential for optimal results. Read our guidelines on medications to avoid, nicotine cessation, and wound care check-lists.
                </p>
              </div>
            </div>
            <Link href="/patient-care" className="btn btn-secondary btn-sm" style={{ whiteSpace: 'nowrap' }}>
              Read Patient Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Bottom Booking CTA Banner */}
      <section className={`${styles.section} ${styles.ctaBanner}`}>
        <div className={styles.ctaBlob}></div>
        <div className={`${styles.ctaContent} container`}>
          <h2 className={styles.ctaTitle}>Start Your Transformation Today</h2>
          <p className={styles.ctaDesc}>
            Whether you are considering a cosmetic enhancement or require reconstructive consultation, schedule an appointment to discuss your clinical pathways with {doctorData.name}.
          </p>
          <div className={styles.ctaActions}>
            <button id="cta-book-btn" onClick={() => openBooking()} className="btn btn-primary">
              Schedule Consultation
            </button>
            <Link href="/opd" className="btn btn-secondary" style={{ color: '#ffffff', borderColor: '#ffffff' }}>
              View OPD Hours
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
