import React from "react";

export function AboutPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">About Kumbh</h1>

          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 mb-8">
              Kumbh is your trusted guide to experiencing the divine Mahakumbh
              Mela 2025. We specialize in creating meaningful spiritual journeys
              that combine traditional authenticity with modern comfort.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To facilitate a seamless and spiritually enriching Mahakumbh
                  experience for pilgrims from around the world, while
                  preserving the sanctity and traditions of this sacred
                  gathering.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Spiritual Authenticity</li>
                  <li>• Cultural Respect</li>
                  <li>• Pilgrim Safety</li>
                  <li>• Sustainable Practices</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Comprehensive support throughout your journey</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Customized packages for all needs and budgets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
