import React from "react";

export function Introduction() {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Sacred Confluence of Faith
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Mahakumbh Mela, the world's largest spiritual gathering, occurs
            every 12 years at the holy Sangam - the confluence of the Ganga,
            Yamuna, and mythical Saraswati rivers. Join millions of devotees in
            this divine celebration of faith, spirituality, and ancient
            traditions.
          </p>
          <a href="/booking">
            <button
              className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold 
            hover:bg-orange-700 transform hover:scale-105 transition-all duration-300"
            >
              Begin Your Sacred Journey
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
