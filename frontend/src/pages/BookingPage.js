import React from 'react';
import { BookingForm } from '../components/booking/BookingForm';

export function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Book Your Mahakumbh Package
          </h1>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
