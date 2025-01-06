import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const events = [
  {
    date: 'January 13, 2025',
    title: 'Paush Purnima',
    description: 'Full moon day bath for spiritual cleansing.',
    location: 'Sangam, Prayagraj',
    importance: 'Major',
  },
  {
    date: 'January 14, 2025',
    title: 'Makar Sankranti',
    description: 'The first royal bath marking the beginning of Mahakumbh.',
    location: 'Sangam, Prayagraj',
    importance: 'Most Auspicious',
  },
  {
    date: 'January 29, 2025',
    title: 'Mauni Amavasya',
    description: 'The most important royal bath during Mahakumbh.',
    location: 'Sangam, Prayagraj',
    importance: 'Most Auspicious',
  },
  {
    date: 'February 3, 2025',
    title: 'Basant Panchami',
    description: 'A royal bath to mark the arrival of spring.',
    location: 'Sangam, Prayagraj',
    importance: 'Major',
  },
  {
    date: 'February 12, 2025',
    title: 'Maghi Purnima',
    description: 'A royal bath for spiritual awakening.',
    location: 'Sangam, Prayagraj',
    importance: 'Major',
  },
  {
    date: 'February 26, 2025',
    title: 'Mahashivratri',
    description: 'A royal bath dedicated to Lord Shiva.',
    location: 'Sangam, Prayagraj',
    importance: 'Most Auspicious',
  },
];


export function EventsPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Sacred Events Calendar</h1>

        <div className="max-w-4xl mx-auto space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 rounded-lg p-3 text-orange-600">
                  <Calendar className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                      <p className="text-orange-600 font-medium">{event.date}</p>
                    </div>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                      {event.importance}
                    </span>
                  </div>

                  <p className="text-gray-600 mt-2">{event.description}</p>

                  <div className="flex items-center mt-4 text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}