import React from 'react';

export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
      title: "PVC Pipes Installation"
    },
    {
      url: "https://images.unsplash.com/photo-1581092334247-ddef2a6c9423?auto=format&fit=crop&q=80",
      title: "Industrial Solutions"
    },
    {
      url: "https://images.unsplash.com/photo-1635348729202-7fb7b41f7ffa?auto=format&fit=crop&q=80",
      title: "Agricultural Applications"
    },
    {
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
      title: "Commercial Projects"
    },
    {
      url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
      title: "Technical Support"
    },
    {
      url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80",
      title: "Quality Products"
    }
    {
    url:"https://ibb.co/hxgPxqCN",
    title:"chai"
  }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Project Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
            <div 
              className="h-64 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
              style={{ backgroundImage: `url(${image.url})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold text-center px-4">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Product Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-xl p-8 aspect-video flex items-center justify-center">
            <p className="text-gray-600">Product Installation Guide Video</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-8 aspect-video flex items-center justify-center">
            <p className="text-gray-600">Product Features Showcase</p>
          </div>
        </div>
      </div>
    </div>
  );
}
