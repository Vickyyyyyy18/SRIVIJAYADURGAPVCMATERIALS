import React from 'react';

export default function Products() {
  const products = [
    {
      category: "PVC Pipes",
      items: [
        {
          name: "Agriculture PVC Pipes",
          description: "Durable pipes for irrigation and agricultural applications",
          image: "https://images.unsplash.com/photo-1635348729202-7fb7b41f7ffa?auto=format&fit=crop&q=80"
        },
        {
          name: "Plumbing PVC Pipes",
          description: "High-quality pipes for residential and commercial plumbing",
          image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80"
        },
        {
          name: "Industrial PVC Pipes",
          description: "Heavy-duty pipes for industrial applications",
          image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      category: "PVC Fittings",
      items: [
        {
          name: "Elbows & Tees",
          description: "Various sizes of pipe connectors and joints",
          image: "https://images.unsplash.com/photo-1581092334247-ddef2a6c9423?auto=format&fit=crop&q=80"
        },
        {
          name: "Couplings",
          description: "Pipe joining solutions for different applications",
          image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80"
        },
        {
          name: "Valves",
          description: "Control flow with our range of PVC valves",
          image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>
      
      <div className="space-y-16">
        {products.map((category, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.items.map((product, productIndex) => (
                <div key={productIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    <p className="mt-2 text-gray-600">{product.description}</p>
                    <button className="mt-4 bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Product Catalog Download */}
      <div className="mt-16 bg-gray-100 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900">Download Our Product Catalog</h3>
        <p className="mt-2 text-gray-600">Get detailed specifications and pricing information</p>
        <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
          Download Catalog (PDF)
        </button>
      </div>
    </div>
  );
}