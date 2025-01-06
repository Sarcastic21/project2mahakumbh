import React from 'react';

export function GuestDetails({ formData, onChange }) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">
          Number of Adults
        </label>
        <input
          type="number"
          id="adults"
          min="1"
          max="10"
          value={formData.adults}
          onChange={(e) => onChange('adults', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          required
        />
      </div>

      <div>
        <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">
          Number of Children (Below 12 years)
        </label>
        <input
          type="number"
          id="children"
          min="0"
          max="10"
          value={formData.children}
          onChange={(e) => onChange('children', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          required
        />
      </div>
    </div>
  );
}
