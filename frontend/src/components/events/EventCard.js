import React from 'react';
import { Calendar } from 'lucide-react';

function EventCard({ title, date, description, isHighlight }) {
  return (
    <div className={`p-6 rounded-lg ${isHighlight ? 'bg-orange-50 border-2 border-orange-200' : 'bg-white'}`}>
      <div className="flex items-start gap-4">
        <div className="p-2 bg-orange-100 rounded-full">
          <Calendar className="w-6 h-6 text-orange-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-orange-600 font-medium mt-1">{date}</p>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
