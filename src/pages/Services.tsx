import React from 'react';
import { CheckCircle2, PenTool as Tool, Truck, Headphones, Settings, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Tool className="h-8 w-8 text-amber-500" />,
      title: "Installation Support",
      description: "Expert guidance for proper installation of PVC products"
    },
    {
      icon: <Truck className="h-8 w-8 text-amber-500" />,
      title: "Delivery Services",
      description: "Timely delivery to your construction site"
    },
    {
      icon: <Headphones className="h-8 w-8 text-amber-500" />,
      title: "Technical Support",
      description: "24/7 support for all technical queries"
    },
    {
      icon: <Settings className="h-8 w-8 text-amber-500" />,
      title: "Maintenance Services",
      description: "Regular maintenance and repair services"
    },
    {
      icon: <Users className="h-8 w-8 text-amber-500" />,
      title: "Consultation",
      description: "Expert consultation for your project needs"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-900 ml-3">{service.title}</h3>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Service Process */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Service Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Consultation", description: "Initial discussion about your requirements" },
            { step: "2", title: "Planning", description: "Detailed project planning and material selection" },
            { step: "3", title: "Execution", description: "Professional installation and implementation" },
            { step: "4", title: "Support", description: "Ongoing maintenance and technical support" }
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                {process.step}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{process.title}</h3>
              <p className="mt-2 text-gray-600">{process.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Service Benefits */}
      <div className="mt-20 bg-gray-100 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Professional team with years of experience",
            "Quality assurance and warranty",
            "Competitive pricing",
            "Timely project completion",
            "24/7 customer support",
            "Post-installation maintenance"
          ].map((benefit, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}