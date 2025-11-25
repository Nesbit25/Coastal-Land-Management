import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Tree Removal',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset after 3 seconds for demo purposes
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Tree Removal',
        message: ''
      });
    }, 5000);
  };

  return (
    <div id="contact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Schedule Your Service
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Ready to transform your landscape? Fill out the form below or give us a call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="bg-emerald-900 rounded-2xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
             {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-emerald-800 opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-40 h-40 rounded-full bg-emerald-800 opacity-50"></div>
            
            <h3 className="text-2xl font-bold mb-8 relative z-10">Get in Touch</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start">
                <Phone className="flex-shrink-0 h-6 w-6 text-emerald-400 mt-1" />
                <div className="ml-4">
                  <p className="text-lg font-medium">Phone</p>
                  <p className="mt-1 text-emerald-100">(555) 123-4567</p>
                  <p className="text-sm text-emerald-300 mt-1">Mon-Fri 7am-6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="flex-shrink-0 h-6 w-6 text-emerald-400 mt-1" />
                <div className="ml-4">
                  <p className="text-lg font-medium">Email</p>
                  <p className="mt-1 text-emerald-100">info@coastalland.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="flex-shrink-0 h-6 w-6 text-emerald-400 mt-1" />
                <div className="ml-4">
                  <p className="text-lg font-medium">Service Area</p>
                  <p className="mt-1 text-emerald-100">
                    Savannah, GA to Jacksonville, FL<br />
                    Including Pooler, Richmond Hill, Brunswick, and St. Marys.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="flex-shrink-0 h-6 w-6 text-emerald-400 mt-1" />
                <div className="ml-4">
                  <p className="text-lg font-medium">Emergency Service</p>
                  <p className="mt-1 text-emerald-100">
                    Available 24/7 for storm damage and hazardous tree removal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Request Received!</h3>
                <p className="mt-2 text-gray-500">
                  Thank you for contacting Coastal Land Management. We will get back to you within 24 hours to confirm your appointment.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-emerald-600 font-medium hover:text-emerald-500 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm border p-3"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm border p-3"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm border p-3"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm border p-3"
                  >
                    <option>Tree Removal</option>
                    <option>Lawn Maintenance</option>
                    <option>Landscaping Design</option>
                    <option>Irrigation</option>
                    <option>Storm Cleanup</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message / Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm border p-3"
                    placeholder="Tell us about your property and what you need..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                >
                  <Send className="-ml-1 mr-2 h-5 w-5" />
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};