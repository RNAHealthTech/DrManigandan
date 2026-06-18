'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppointmentModal from '@/components/AppointmentModal';
import { BookingProvider, useBooking } from '@/context/BookingContext';

interface ClientLayoutProps {
  children: React.ReactNode;
}

function ClientLayoutContent({ children }: { children: React.ReactNode }) {
  const { isBookingOpen, bookingType, openBooking, closeBooking } = useBooking();

  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', paddingTop: '80px' }}>
        {children}
      </main>
      <Footer />
      <AppointmentModal 
        isOpen={isBookingOpen} 
        onClose={closeBooking} 
        selectedType={bookingType}
      />
    </>
  );
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <BookingProvider>
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </BookingProvider>
  );
}
