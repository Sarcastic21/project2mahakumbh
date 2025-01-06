import React from 'react';

export function PersonalDetails({ formData, onChange }) {
  return (
    <div className="space-y-4">
    <div>
  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
    Your Name
  </label>
  <input
    type="text"
    id="name"
    value={formData.name}
    onChange={(e) => onChange('name', e.target.value)}
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
    required
  />
</div>

<div>
  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
    Phone Number
  </label>
  <input
    type="tel"
    id="phoneNumber"
    value={formData.phoneNumber}
    onChange={(e) => onChange('phoneNumber', e.target.value)}
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
    required
  />
</div>
    </div>
  );
}
