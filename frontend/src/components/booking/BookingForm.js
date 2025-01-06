import React from 'react';
import { BookingSteps } from './BookingSteps';
import { PersonalDetails } from './PersonalDetails';
import AccommodationDetails from './AccommodationDetails';
import { DateSelection } from './DateSelection';
import { GuestDetails } from './GuestDetails';
import { BookingSummary } from './BookingSummary';

export function BookingForm() {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    name: '',
    phoneNumber: '',
    accommodationType: '',
    checkIn: '',
    checkOut: '', // Added checkOut for date range
    adults: '',
    children: ''
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [selectedPackage, setSelectedPackage] = React.useState({ title: 'Default Package', price: 1000 });

  const token = localStorage.getItem('token');

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!token) {
      console.error('No token found. Please log in.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include token for authorization
        },
        body: JSON.stringify(formData), // Send form data in the request body
      });
  
      if (response.ok) {
        console.log('Form data successfully submitted');
        setIsSubmitted(true); // Set submitted flag to true
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error); // Log the error
    }
  };

  // Validate form data based on current step
  const isFormValid = () => {
    if (step === 1) {
      // Validate PersonalDetails (name, phone number)
      return formData.name && formData.phoneNumber;
    }
    if (step === 2) {
      // Validate AccommodationDetails (accommodation type)
      return formData.accommodationType;
    }
    if (step === 3) {
      // No validation for DateSelection (skip validation)
      return true;
    }
    if (step === 4) {
      // Validate GuestDetails (adults)
      return formData.adults;
    }
    return true;
  };

  if (isSubmitted) {
    return <BookingSummary formData={formData} selectedPackage={selectedPackage} />;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
        Book Your Spiritual Journey
      </h2>

      <BookingSteps currentStep={step} />

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {step === 1 && (
          <PersonalDetails formData={formData} onChange={handleInputChange} />
        )}

        {step === 2 && (
          <AccommodationDetails formData={formData} onChange={handleInputChange} setSelectedPackage={setSelectedPackage} />
        )}

        {step === 3 && (
          <DateSelection formData={formData} onChange={handleInputChange} />
        )}

        {step === 4 && (
          <GuestDetails formData={formData} onChange={handleInputChange} />
        )}

        <div className="flex justify-between pt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(s => s - 1)}
              className="px-6 py-2 text-orange-600 border border-orange-600 rounded-full hover:bg-orange-50"
            >
              Previous
            </button>
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={() => setStep(s => s + 1)}
              disabled={!isFormValid()}
              className="ml-auto px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 disabled:bg-gray-400"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="ml-auto px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700"
            >
              Submit Booking
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
