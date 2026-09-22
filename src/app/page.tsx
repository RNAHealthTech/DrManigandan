'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import OpdSchedule from '@/components/OpdSchedule';
import Achievements from '@/components/Achievements';
import ProcedureEstimator from '@/components/ProcedureEstimator';
import EmergencyTraumaGuide from '@/components/EmergencyTraumaGuide';
import { useBooking } from '@/context/BookingContext';
import { doctorData } from '@/data/doctorData';
import ScrollReveal from '@/components/ScrollReveal';
import Counter from '@/components/Counter';
import styles from './home.module.css';

export default function Home() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

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
      description: "Specialized training at Sir Ganga Ram Hospital in sub-millimeter microvascular repairs, emergency limb replantations, and complex tissue reconstruction."
    },
    {
      title: "Sir Ganga Ram Hospital Affiliation",
      description: "Operates in one of India's pre-eminent tertiary multi-specialty medical institutions with round-the-clock emergency casualty and advanced ICU backup."
    },
    {
      title: "ATLS Safety Standards",
      description: "Certified in Advanced Trauma Life Support protocols, ensuring international safety standards in trauma care and peri-operative patient management."
    },
    {
      title: "Patient-Centric Approach",
      description: "Designs customized surgical pathways for each patient, prioritizing natural aesthetic contours, functional recovery, and minimized downtime."
    }
  ];

  const homeFaqs = [
    {
      question: "Sir Ganga Ram Hospital में OPD के लिए अपॉइंटमेंट कैसे बुक करें?",
      answer: "आप सीधे हमारी वेबसाइट के 'Schedule Consultation' बटन पर क्लिक करके डायरेक्ट या वीडियो कंसल्टेशन बुक कर सकते हैं। इसके अलावा आप Sir Ganga Ram Hospital की मुख्य हेल्पलाइन (+91 11-4225 4000) या OPD रूम नंबर F-52 में भी संपर्क कर सकते हैं।"
    },
    {
      question: "डॉ. गौरव सिवास के पास किस प्रकार की सर्जरी उपलब्ध हैं?",
      answer: "डॉ. गौरव सिवास एक विशेषज्ञ प्लास्टिक, कॉस्मेटिक और हैंड माइक्रोसर्जन हैं। वे कटे हुए हाथ की इमरजेंसी माइक्रोसर्जरी (Replantation), राइनोप्लास्टी (नाक की सर्जरी), फेशियल एस्थेटिक्स, जले हुए निशान ठीक करने और माइक्रोवैस्कुलर रीकंस्ट्रक्शन में माहिर हैं।"
    },
    {
      question: "क्या कॉस्मेटिक और रीकंस्ट्रक्टिव सर्जरी का खर्च इंश्योरेंस में कवर होता है?",
      answer: "रीकंस्ट्रक्टिव प्रोसीजर्स (जैसे हाथ की इमरजेंसी माइक्रोसर्जरी, ट्रॉमा व बर्न्स रीकंस्ट्रक्शन) आमतौर पर मेडिकल रूप से आवश्यक होते हैं और टीपीए/हेल्थ इंश्योरेंस में कवर होते हैं। प्योर कॉस्मेटिक सर्जरी सामान्यतः इंश्योरेंस में कवर नहीं होती हैं।"
    },
    {
      question: "फर्स्ट कंसल्टेशन (पहली मुलाकात) के लिए मुझे क्या साथ लाना चाहिए?",
      answer: "कृपया अपने पिछले सभी मेडिकल रिपोर्ट्स, एक्स-रे/सीटी स्कैन और वर्तमान दवाइयों की सूची अपने साथ लाएं ताकि डॉ. गौरव सिवास आपके लिए एक सटीक और सुरक्षित उपचार योजना बना सकें।"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Hospital Association Banner */}
      <ScrollReveal direction="fade" duration={1000}>
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
              <span className={styles.associationDept}>Associate Hony. Active Visiting Consultant &bull; Dept of Plastic, Cosmetic & Hand Microsurgery</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Section 1: Clinical Pillars */}
      <section className={styles.section}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-title">
              <h2>Clinical Pillars</h2>
              <p>The core domains of {doctorData.name}'s surgical practice</p>
            </div>
          </ScrollReveal>

          <div className={styles.pillarsGrid}>
            {primaryPillars.map((pillar, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 120} className={styles.pillarRevealWrapper}>
                <div className={`${styles.pillarCard} glass-card`}>
                  <div className={styles.pillarIcon}>
                    <span>{pillar.icon}</span>
                  </div>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDesc}>{pillar.description}</p>
                  <Link href={pillar.link} className={styles.pillarLink}>
                    Learn More <span>&rarr;</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Interactive Treatment & Recovery Estimator */}
      <ProcedureEstimator />

      {/* Section 2: Why Choose Us */}
      <section className={`${styles.section} ${styles.whyChoose}`}>
        <div className="container">
          <div className={styles.splitGrid}>
            {/* Visual stats on left */}
            <div className={styles.whyVisual}>
              <ScrollReveal direction="right" delay={100} className={styles.visualRevealCard}>
                <div className={`${styles.visualCard} glass-card`}>
                  <span className={styles.visualNumber}>
                    <Counter endValue={12} suffix="+" />
                  </span>
                  <span className={styles.visualLabel}>Years of Medical Excellence</span>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={200} className={styles.visualRevealCard}>
                <div className={`${styles.visualCard} glass-card`}>
                  <span className={styles.visualNumber}>SGRH</span>
                  <span className={styles.visualLabel}>DrNB Plastic Surgery</span>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={400} className={styles.visualRevealCard}>
                <div className={`${styles.visualCard} glass-card`}>
                  <span className={styles.visualNumber}>
                    <Counter endValue={100} suffix="%" />
                  </span>
                  <span className={styles.visualLabel}>Patient Care Focus</span>
                </div>
              </ScrollReveal>
            </div>

            {/* Text description on right */}
            <div className={styles.whyContent}>
              <ScrollReveal direction="left">
                <h2>Why Choose {doctorData.name}?</h2>
                <p>
                  Choosing a plastic and reconstructive surgeon is a critical decision. {doctorData.name} combines deep microsurgical mastery with an artistic eye to restore form, function, and aesthetic confidence.
                </p>
              </ScrollReveal>

              <div className={styles.whyList}>
                {whyChooseUs.map((item, idx) => (
                  <ScrollReveal key={idx} direction="left" delay={150 + idx * 100} className={styles.whyRevealItem}>
                    <div className={styles.whyItem}>
                      <div className={styles.whyCheck}>✓</div>
                      <div className={styles.whyText}>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Hand Trauma & Replantation Emergency Guide */}
      <EmergencyTraumaGuide />

      {/* Section: Achievements & Memberships */}
      <Achievements />

      {/* Section: OPD Schedule & Tariffs */}
      <OpdSchedule />

      {/* Section: Patient Testimonials */}
      <section className={`${styles.section} ${styles.testimonialsSection}`}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-title">
              <h2>Patient Stories & Outcomes</h2>
              <p>Real-world experiences from individuals who underwent reconstructive or aesthetic surgeries</p>
            </div>
          </ScrollReveal>

          <div className={styles.testimonialsGrid}>
            {doctorData.testimonials.map((t, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 120} className={styles.testimonialRevealWrapper}>
                <div className={`${styles.testimonialCard} glass-card`}>
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section: FAQs Accordion */}
      <section className={`${styles.section} ${styles.faqSection}`}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-title">
              <h2>Frequently Asked Questions</h2>
              <p>Quick answers regarding appointments, surgeries, and clinical care</p>
            </div>
          </ScrollReveal>

          <div className={styles.faqAccordion}>
            {homeFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <ScrollReveal key={idx} direction="up" delay={idx * 100} className={styles.accordionRevealWrapper}>
                  <div className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''} glass-card`}>
                    <button 
                      className={styles.accordionHeader} 
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className={styles.questionText}>{faq.question}</span>
                      <span className={styles.accordionIcon}>
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    <div 
                      className={`${styles.accordionContent} ${isOpen ? styles.accordionContentOpen : ''}`}
                      style={{ maxHeight: isOpen ? '300px' : '0' }}
                    >
                      <p className={styles.answerText}>{faq.answer}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className={styles.viewAllContainer}>
            <ScrollReveal direction="up" delay={400}>
              <Link href="/faqs" className="btn btn-secondary">
                View All Patient FAQs
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 3: Patient Care Guidelines Alert Box */}
      <section className={styles.section}>
        <div className="container">
          <ScrollReveal direction="scale" duration={900}>
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
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Bottom Booking CTA Banner */}
      <section className={`${styles.section} ${styles.ctaBanner}`}>
        <div className={styles.ctaBlob}></div>
        <div className={`${styles.ctaContent} container`}>
          <ScrollReveal direction="up" delay={100}>
            <h2 className={styles.ctaTitle}>Start Your Transformation Today</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <p className={styles.ctaDesc}>
              Whether you are considering a cosmetic enhancement or require reconstructive consultation, schedule an appointment to discuss your clinical pathways with {doctorData.name}.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={300}>
            <div className={styles.ctaActions}>
              <button 
                id="cta-book-btn" 
                onClick={() => openBooking()} 
                className="btn btn-primary btn-shine-wrapper"
              >
                Schedule Consultation
              </button>
              <Link href="/opd" className="btn btn-secondary" style={{ color: '#ffffff', borderColor: '#ffffff' }}>
                View OPD Hours
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
