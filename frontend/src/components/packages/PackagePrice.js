import React from 'react';

function PackagePrice({ price, duration }) {
  return (
    <div className="flex flex-col items-end">
      <span className="text-3xl font-bold text-orange-600">
        ₹{price.toLocaleString()}
      </span>
      <span className="text-gray-500 text-sm">{duration}</span>
    </div>
  );
}

export default PackagePrice;
