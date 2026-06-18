'use client';

import React from 'react';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import BookingCTA from '@/components/BookingCTA';

export default function AboutPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '40px 0' }}>
      <About />
      <Achievements />
      <BookingCTA />
    </div>
  );
}
