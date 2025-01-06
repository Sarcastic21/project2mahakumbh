import React from 'react';
import { Check } from 'lucide-react';

function PackageFeatures({ features }) {
  return (
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export default PackageFeatures;
