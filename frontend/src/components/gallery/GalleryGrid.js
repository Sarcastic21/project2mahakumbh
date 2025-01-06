import React from 'react';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1577493340887-b7bfff550145?auto=format&fit=crop&q=80',
    title: 'Sacred Rituals',
    description: 'Experience the divine atmosphere of traditional ceremonies'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1623069923531-fd2a1f0945f9?auto=format&fit=crop&q=80',
    title: 'Holy Dip',
    description: 'The sacred confluence of three holy rivers'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&q=80',
    title: 'Evening Aarti',
    description: 'Witness the mesmerizing evening ceremonies'
  }
];

function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryImages.map((image) => (
        <div
          key={image.id}
          className="group relative overflow-hidden rounded-lg aspect-square"
        >
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold">{image.title}</h3>
              <p className="text-sm">{image.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GalleryGrid;
