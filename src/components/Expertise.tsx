'use client';

import React from 'react';
import styles from './Expertise.module.css';

interface Specialty {
  title: string;
  description: string;
  icon: React.ReactNode;
  treatments: string[];
}

export default function Expertise() {
  const specialties: Specialty[] = [
    {
      title: "Cosmetic & Aesthetic Surgery",
      description: "Advanced surgical and non-surgical procedures to enhance facial features, body contours, and skin aesthetics with natural-looking results.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.9 5.9L4 10l6.1 1.9L12 17l1.9-5.1L20 10l-6.1-1.9L12 3Z" />
          <path d="m5 3 0.8 1.8L7.5 5 5.8 5.8 5 7.5l-0.8-1.7L2.5 5l1.7-0.8L5 3Z" fill="var(--secondary)" stroke="none" />
        </svg>
      ),
      treatments: ["Rhinoplasty", "Facelift", "Breast Augmentation", "Liposuction", "Blepharoplasty"]
    },
    {
      title: "Hand & Microsurgery",
      description: "Intricate reconstructive surgeries focusing on hand trauma, nerve repairs, tendon transfers, and limb salvage using precision microsurgery.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8.5" />
          <path d="M10 18H5.5a2.5 2.5 0 0 1-2.5-2.5v0a2.5 2.5 0 0 1 2.5-2.5H10" />
          <path d="M6 14v4a4 4 0 0 0 8 0v-7h4a2 2 0 0 1 2 2v3a6 6 0 0 1-6 6h-4" />
        </svg>
      ),
      treatments: ["Tendon & Nerve Repair", "Carpal Tunnel Release", "Replantation", "Congenital Hand Correction"]
    },
    {
      title: "Cleft & Craniofacial Surgery",
      description: "Specialized reconstructive care addressing cleft lip and palate anomalies, skull growth issues, and facial bone restructuring.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2" />
          <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2" />
        </svg>
      ),
      treatments: ["Cleft Lip Repair", "Cleft Palate Repair", "Alveolar Bone Grafting", "Distraction Osteogenesis"]
    },
    {
      title: "Reconstructive Microsurgery",
      description: "Using tissue transfer and vascular connections to rebuild complex defects resulting from cancer resection, trauma, or infections.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18h8" />
          <path d="M3 22h18" />
          <path d="M14 22a7 7 0 1 0-14 0" />
          <path d="M9 14h2" />
          <path d="M9 12a3 3 0 0 1-3-3V5a3 3 0 0 1 6 0v4a3 3 0 0 1-3 3Z" />
          <path d="M12 5h4" />
          <path d="M14 9h4" />
        </svg>
      ),
      treatments: ["Free Flap Reconstruction", "Breast Reconstruction", "Head & Neck Reconstruction", "Limb Salvage"]
    },
    {
      title: "Burn & Trauma Reconstruction",
      description: "Comprehensive care focusing on restoring function and minimizing scarring for patients suffering from acute burns or traumatic injuries.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      ),
      treatments: ["Skin Grafting", "Scar Revision", "Contracture Release", "Tissue Expansion"]
    }
  ];

  return (
    <section id="expertise" className={styles.expertise}>
      <div className="container">
        <div className="section-title">
          <h2>Areas of Expertise</h2>
          <p>Comprehensive plastic and reconstructive services tailored to patient needs</p>
        </div>

        <div className={styles.grid}>
          {specialties.map((spec, idx) => (
            <div key={idx} className={`${styles.card} glass-card`}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{spec.icon}</span>
              </div>
              <h3 className={styles.title}>{spec.title}</h3>
              <p className={styles.description}>{spec.description}</p>
              
              <div className={styles.treatmentWrapper}>
                <h4 className={styles.treatmentTitle}>Common Procedures:</h4>
                <div className={styles.tagWrapper}>
                  {spec.treatments.map((tag, tagIdx) => (
                    <span key={tagIdx} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
