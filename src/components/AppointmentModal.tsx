'use client';

import React, { useState } from 'react';
import { doctorData } from '@/data/doctorData';
import styles from './AppointmentModal.module.css';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedType?: string;
}

export default function AppointmentModal({ isOpen, onClose, selectedType = 'Direct Consultation' }: AppointmentModalProps) {
  const [consultationType, setConsultationType] = useState(selectedType);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const currentFee = doctorData.fees.find(f => f.type.startsWith(consultationType.split(' ')[0]))?.amount || 1500;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setDate('');
    setTimeSlot('');
    setName('');
    setMobile('');
    setEmail('');
    setMessage('');
    onClose();
  };

  const timeSlots = [
    "08:00 AM - 08:20 AM",
    "08:20 AM - 08:40 AM",
    "08:40 AM - 09:00 AM",
    "09:00 AM - 09:20 AM",
    "09:20 AM - 09:40 AM",
    "09:40 AM - 10:00 AM"
  ];

  return (
    <div className={styles.overlay} onClick={resetForm}>
      <div className={`${styles.modal} animate-fade-up`} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={resetForm}>&times;</button>
        
        {!isSuccess ? (
          <>
            <h3 className={styles.title}>Book a Consultation</h3>
            <p className={styles.subtitle}>With {doctorData.name}</p>
            
            <div className={styles.doctorBrief}>
              <div className={styles.doctorInfo}>
                <strong>{doctorData.name}</strong>
                <span>{doctorData.designation} &bull; {doctorData.specialty}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.feeSelector}>
                <span className={styles.label}>Select Consultation Type:</span>
                <div className={styles.feeCards}>
                  {doctorData.fees.map((fee) => (
                    <div 
                      key={fee.type}
                      className={`${styles.feeCard} ${consultationType === fee.type || (consultationType.includes('Direct') && fee.type.includes('Direct') && !fee.type.includes('Follow-up')) ? styles.feeCardActive : ''}`}
                      onClick={() => setConsultationType(fee.type)}
                    >
                      <span className={styles.feeTypeName}>{fee.type}</span>
                      <span className={styles.feeAmount}>₹{fee.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.row}>
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">Preferred Date</label>
                  <input 
                    type="date" 
                    className="form-input" 
                    required 
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={e => setDate(e.target.value)}
                  />
                </div>
                
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">Preferred Time Slot</label>
                  <select 
                    className="form-input" 
                    required
                    value={timeSlot}
                    onChange={e => setTimeSlot(e.target.value)}
                  >
                    <option value="">Select a Slot</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Patient Name</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Enter patient full name" 
                  required 
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mobile Number</label>
                <input 
                  type="tel" 
                  className="form-input" 
                  placeholder="10-digit mobile number" 
                  pattern="[6-9][0-9]{9}"
                  required 
                  value={mobile}
                  onChange={e => setMobile(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="Enter email address" 
                  required 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Medical History / Notes (Optional)</label>
                <textarea 
                  className="form-input" 
                  placeholder="Briefly describe the reason for appointment"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </div>

              <button 
                id="modal-submit-btn"
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', marginTop: '10px' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className={styles.spinner}></div>
                ) : `Confirm Appointment (Pay ₹${currentFee} at Clinic)`}
              </button>
            </form>
          </>
        ) : (
          <div className={styles.successScreen}>
            <div className={styles.successIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3>Appointment Request Submitted!</h3>
            <p className={styles.successText}>
              Thank you, <strong>{name}</strong>. Your appointment request with <strong>{doctorData.name}</strong> on <strong>{date}</strong> at <strong>{timeSlot}</strong> has been successfully received.
            </p>
            <div className={styles.receipt}>
              <div><strong>Type:</strong> {consultationType}</div>
              <div><strong>Fee:</strong> ₹{currentFee} (Payable at desk)</div>
              <div><strong>Location:</strong> {doctorData.opdTimings[0].location}</div>
            </div>
            <button className="btn btn-primary" onClick={resetForm} style={{ marginTop: '20px' }}>
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
