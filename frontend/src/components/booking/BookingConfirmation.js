import React from 'react';
import { Check } from 'lucide-react';

function BookingConfirmation({ bookingId, email }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Check className="w-8 h-8 text-green-600" />
      </div>
      
      <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
      <p className="text-gray-600 mb-4">
        Your booking ID is: <span className="font-medium">{bookingId}</span>
      </p>
      <p className="text-gray-600">
        A confirmation email has been sent to {email}
      </p>
      
      <div className="mt-8">
        <button
          onClick={() => window.print()}
          className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700"
        >
          Download Confirmation
        </button>
      </div>
    </div>
  );
}

export default BookingConfirmation;
