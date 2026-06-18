'use client';

import React, { createContext, useContext, useState } from 'react';

interface BookingContextType {
  isBookingOpen: boolean;
  bookingType: string;
  openBooking: (type?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState('Direct Consultation');

  const openBooking = (type?: string) => {
    if (type) {
      setBookingType(type);
    } else {
      setBookingType('Direct Consultation');
    }
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <BookingContext.Provider value={{ isBookingOpen, bookingType, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
