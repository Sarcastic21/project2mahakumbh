import React from 'react';
import  EventCard  from './EventCard';

const events = [
  {
    title: 'Makar Sankranti - First Shahi Snan',
    date: 'January 14, 2025',
    description: 'The first and most auspicious royal bath marking the beginning of Mahakumbh.',
    isHighlight: true
  },
  {
    title: 'Paush Purnima',
    date: 'January 25, 2025',
    description: 'Full moon day bath considered highly beneficial for spiritual cleansing.'
  },
  {
    title: 'Mauni Amavasya - Main Shahi Snan',
    date: 'February 12, 2025',
    description: 'The most important royal bath during Mahakumbh, attracting millions of devotees.'
  },
  {
    title: 'Basant Panchami',
    date: 'February 23, 2025',
    description: 'Celebration of spring and knowledge, marked by special ceremonies.'
  }
];

function EventsList() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sacred Events Calendar</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsList;
