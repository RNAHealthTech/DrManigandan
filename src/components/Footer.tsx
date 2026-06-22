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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px' }}>
                <rect x="10" y="2" width="4" height="20" rx="1.5" fill="var(--primary)" />
                <rect x="2" y="10" width="20" height="4" rx="1.5" fill="var(--primary)" />
                <circle cx="12" cy="12" r="3" fill="var(--secondary)" />
              </svg>
              <h3 className={styles.logoText}>Dr. Manigandan K</h3>
            </div>
            <p className={styles.description}>
              Consultant in Plastic, Cosmetic & Hand Microsurgery. Combining surgical precision with aesthetic vision at Sir Ganga Ram Hospital, New Delhi.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.title}>Quick Navigation</h4>
            <ul className={styles.links}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About & Qualifications</Link></li>
              <li><Link href="/expertise">Areas of Expertise</Link></li>
              <li><Link href="/journey">Journey & Achievements</Link></li>
              <li><Link href="/opd">OPD Timings</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/patient-care">Patient Care</Link></li>
            </ul>
          </div>

          {/* Column 3: Hospital & Contact */}
          <div className={styles.column}>
            <h4 className={styles.title}>Sir Ganga Ram Hospital</h4>
            <address className={styles.address}>
              <strong>Plastic Surgery Dept (Room F-52)</strong><br />
              Sir Ganga Ram Hospital Marg,<br />
              Rajinder Nagar, New Delhi,<br />
              Delhi - 110060
            </address>
            <h4 className={styles.title} style={{ marginTop: '16px' }}>Noida Clinic</h4>
            <address className={styles.address}>
              Noida, Uttar Pradesh 201301
            </address>
            <div className={styles.contact}>
              <p>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href={`mailto:${doctorData.email}`} style={{ verticalAlign: 'middle' }}>{doctorData.email}</a>
              </p>
              <p>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span style={{ verticalAlign: 'middle' }}>+91 11-42254000 (SGRH Helpdesk)</span>
              </p>
              <p>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span style={{ verticalAlign: 'middle' }}>+91 9968968996 (Direct)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer Panel */}
        <div className={styles.disclaimerPanel}>
          <p>
            <strong>Medical Disclaimer:</strong> The information provided on this website is for educational and clinical informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified plastic surgeon or medical practitioner directly regarding any specific cosmetic or reconstructive healthcare concerns.
          </p>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Dr. Manigandan K. All rights reserved. Registered medical practitioner.
          </p>
          <div className={styles.hospitalDisclaimer}>
            <span>Affiliated with Sir Ganga Ram Hospital, New Delhi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
