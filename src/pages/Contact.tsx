import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <div className="bg-black text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-amber-500 mr-4" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>9000087627</p>
                  <p>9703972782</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-amber-500 mr-4" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>sirivurisaikumar@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-amber-500 mr-4" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p>D.No. 6-6-6, Siddabathula Veedhi</p>
                  <p>Near Chinna Veedhi</p>
                  <p>VIZIANAGARAM - 535001</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-amber-500 mr-4" />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8 bg-gray-100 rounded-xl p-4 h-64 flex items-center justify-center">
            <p className="text-gray-600">Google Maps Integration</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-md shadow-sm text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}