import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="h-[600px] bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80")' }}
        >
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Quality PVC Solutions for Your Construction Needs
              </h1>
              <p className="mt-4 text-xl text-gray-200">
                Sri Vijaya Durga PVC Materials - Your trusted partner for high-quality PVC products and expert solutions.
              </p>
              <div className="mt-8 flex space-x-4">
                <Link
                  to="/products"
                  className="bg-amber-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors flex items-center"
                >
                  View Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-600">We provide the best quality PVC materials with expert support</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Premium Quality",
              description: "We source only the highest quality PVC materials from trusted manufacturers",
              image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
            },
            {
              title: "Expert Support",
              description: "Our team provides technical consultation and installation guidance",
              image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            },
            {
              title: "Wide Range",
              description: "Comprehensive selection of PVC pipes, fittings, and accessories",
              image: "https://images.unsplash.com/photo-1581092334247-ddef2a6c9423?auto=format&fit=crop&q=80"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${feature.image})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "1000+", label: "Happy Customers" },
              { number: "500+", label: "Projects Completed" },
              { number: "100%", label: "Quality Assured" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-amber-500">{stat.number}</div>
                <div className="mt-2 text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "Excellent quality products and outstanding customer service. Highly recommended!",
              author: "Rajesh Kumar",
              role: "Construction Manager"
            },
            {
              text: "The technical support team is very knowledgeable and helped us choose the right products.",
              author: "Priya Sharma",
              role: "Project Engineer"
            },
            {
              text: "Best PVC material supplier in the region. Competitive prices and reliable delivery.",
              author: "Venkat Rao",
              role: "Contractor"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Start Your Project?</h2>
            <p className="mt-4 text-xl text-white/90">Contact us today for a consultation</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-amber-600 bg-white hover:bg-gray-50"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}