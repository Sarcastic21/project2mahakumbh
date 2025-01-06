import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const mailtoLink = `mailto:kumbhtravels2025@gmail.com?subject=Contact Form Submission from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  className="w-full px-4 py-2 border rounded-md h-32"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-orange-600 mr-4" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">
                    Bhagwanpur Mandhata Pratapgarh,
                    <br />
                    230402, Uttar Pradesh
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-orange-600 mr-4" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">
                    +91 9316802278, +91 6351168010.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-orange-600 mr-4" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">kumbhtravels2025@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
