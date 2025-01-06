import React from 'react';
import { Check } from 'lucide-react';

const steps = [
  'Personal Details',
  'Accommodation',
  'Dates',
  'Guests'
];

export function BookingSteps({ currentStep }) {
  return (
    <div className="flex justify-between">
      {steps.map((step, index) => (
        <div key={step} className="flex flex-col items-center">
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center
            ${index + 1 < currentStep
              ? 'bg-green-500 text-white'
              : index + 1 === currentStep
                ? 'bg-orange-600 text-white'
                : 'bg-gray-200 text-gray-600'}
          `}>
            {index + 1 < currentStep ? (
              <Check className="w-5 h-5" />
            ) : (
              index + 1
            )}
          </div>
          <span className="text-sm mt-2">{step}</span>
        </div>
      ))}
    </div>
  );
}
