import React from 'react';

export function DateSelection({ formData, onChange }) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">
          Check-In Date
        </label>
        <input
          type="date"
          id="checkIn"
          value={formData.checkIn}
          onChange={(e) => onChange('checkIn', e.target.value)}
          min="2025-01-14"
          max="2025-02-26"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          required
        />
      </div>
    </div>
  );
}
