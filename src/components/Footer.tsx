'use client';

import React from 'react';
import Link from 'next/link';
import { doctorData } from '@/data/doctorData';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          {/* Column 1: Bio & Branding */}
          <div className={styles.column}>
            <div className={styles.brand}>
              <div className={styles.brandIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="2" width="4" height="20" rx="1.5" fill="var(--primary)" />
                  <rect x="2" y="10" width="20" height="4" rx="1.5" fill="var(--primary)" />
                  <circle cx="12" cy="12" r="3" fill="var(--secondary)" />
                </svg>
              </div>
              <div>
                <h3 className={styles.logoText}>{doctorData.name}</h3>
                <span className={styles.logoSubtext}>{doctorData.designation}</span>
              </div>
            </div>
            <p className={styles.description}>
              {doctorData.department} at {doctorData.hospital}. Specialized in complex hand trauma & replantation, aesthetic facial surgery, microvascular reconstruction, and burns rehabilitation.
            </p>
            <div className={styles.accreditation}>
              <span className={styles.accBadge}>🏥 NABH Accredited Hospital</span>
              <span className={styles.accBadge}>🛡️ ATLS Certified</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.title}>Clinical Navigation</h4>
            <ul className={styles.links}>
              <li><Link href="/">Home Page</Link></li>
              <li><Link href="/about">About & Qualifications</Link></li>
              <li><Link href="/expertise">Specialties & Procedures</Link></li>
              <li><Link href="/journey">Academic Journey</Link></li>
              <li><Link href="/opd">OPD Schedule & Tariffs</Link></li>
              <li><Link href="/faqs">Patient FAQs</Link></li>
              <li><Link href="/patient-care">Pre & Post Care Guides</Link></li>
              <li>
                <a href={doctorData.bookingUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                  SGRH Official Booking ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Hospital & Contact */}
          <div className={styles.column}>
            <h4 className={styles.title}>Sir Ganga Ram Hospital</h4>
            <address className={styles.address}>
              <strong>Department of Plastic Surgery (Room F-52)</strong><br />
              Sir Ganga Ram Hospital Marg,<br />
              Rajinder Nagar, New Delhi,<br />
              Delhi - 110060, India
            </address>
            <div className={styles.contact} style={{ marginTop: '16px' }}>
              <p>
                <span className={styles.contactIcon}>✉️</span>
                <a href={`mailto:${doctorData.email}`}>{doctorData.email}</a>
              </p>
              <p>
                <span className={styles.contactIcon}>📞</span>
                <span>Hospital: +91 11-4225 4000 / +91 11-351-256-00</span>
              </p>
              <p>
                <span className={styles.contactIcon}>🚨</span>
                <span>24/7 Casualty: +91 11-4225 1097 / 1098 / 1099</span>
              </p>
              <p>
                <span className={styles.contactIcon}>🚑</span>
                <span>Ambulance: +91 11-4225 3030</span>
              </p>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer Panel */}
        <div className={styles.disclaimerPanel}>
          <p>
            <strong>Medical Disclaimer:</strong> The clinical information on this portal is intended for informational and educational guidance. It should not be used as a substitute for in-person consultation with a qualified plastic, cosmetic, and reconstructive surgeon. Please visit the OPD at Sir Ganga Ram Hospital or call the casualty desk for medical emergencies.
          </p>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} {doctorData.name}. All rights reserved.
          </p>
          <div className={styles.hospitalDisclaimer}>
            <span>Sir Ganga Ram Hospital, Rajinder Nagar, New Delhi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
