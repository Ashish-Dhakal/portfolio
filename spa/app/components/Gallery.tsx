'use client';

import { useState } from 'react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'massage', name: 'Massage' },
    { id: 'facial', name: 'Facial' },
    { id: 'nail', name: 'Nail Care' },
    { id: 'hair', name: 'Hair' },
    { id: 'facilities', name: 'Facilities' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'massage',
      image: 'https://readdy.ai/api/search-image?query=Professional%20massage%20therapy%20session%20in%20luxury%20spa%20setting%2C%20skilled%20therapist%20performing%20relaxing%20massage%2C%20serene%20treatment%20room%20with%20soft%20lighting%2C%20natural%20stone%20elements%2C%20calming%20atmosphere&width=400&height=300&seq=gallery-1&orientation=landscape',
      title: 'Relaxing Massage Session',
      description: 'Professional therapeutic massage'
    },
    {
      id: 2,
      category: 'facial',
      image: 'https://readdy.ai/api/search-image?query=Facial%20treatment%20in%20progress%2C%20client%20receiving%20professional%20skincare%20treatment%2C%20clean%20spa%20environment%2C%20modern%20facial%20equipment%2C%20relaxing%20atmosphere%20with%20natural%20lighting&width=400&height=300&seq=gallery-2&orientation=landscape',
      title: 'Rejuvenating Facial',
      description: 'Anti-aging skincare treatment'
    },
    {
      id: 3,
      category: 'nail',
      image: 'https://readdy.ai/api/search-image?query=Professional%20manicure%20service%2C%20skilled%20nail%20technician%20working%20on%20client%20hands%2C%20modern%20nail%20station%20with%20elegant%20tools%2C%20clean%20white%20surfaces%2C%20premium%20nail%20care%20setup&width=400&height=300&seq=gallery-3&orientation=landscape',
      title: 'Premium Manicure',
      description: 'Professional nail care service'
    },
    {
      id: 4,
      category: 'hair',
      image: 'https://readdy.ai/api/search-image?query=Hair%20styling%20session%20at%20modern%20salon%2C%20professional%20hairstylist%20working%20on%20client%20hair%2C%20contemporary%20salon%20interior%2C%20clean%20modern%20design%20with%20natural%20lighting&width=400&height=300&seq=gallery-4&orientation=landscape',
      title: 'Hair Transformation',
      description: 'Expert hair styling and coloring'
    },
    {
      id: 5,
      category: 'facilities',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20spa%20relaxation%20lounge%20with%20comfortable%20seating%2C%20natural%20elements%2C%20soft%20lighting%2C%20peaceful%20environment%2C%20modern%20zen%20design%20with%20green%20plants%20and%20earth%20tones&width=400&height=300&seq=gallery-5&orientation=landscape',
      title: 'Relaxation Lounge',
      description: 'Peaceful waiting area'
    },
    {
      id: 6,
      category: 'massage',
      image: 'https://readdy.ai/api/search-image?query=Hot%20stone%20massage%20therapy%20setup%2C%20heated%20stones%20arranged%20on%20treatment%20table%2C%20spa%20therapist%20preparing%20hot%20stone%20treatment%2C%20warm%20lighting%2C%20serene%20spa%20atmosphere&width=400&height=300&seq=gallery-6&orientation=landscape',
      title: 'Hot Stone Therapy',
      description: 'Therapeutic hot stone massage'
    },
    {
      id: 7,
      category: 'facial',
      image: 'https://readdy.ai/api/search-image?query=Hydrating%20facial%20mask%20treatment%2C%20client%20wearing%20face%20mask%2C%20professional%20skincare%20products%2C%20clean%20spa%20treatment%20room%2C%20calming%20environment%20with%20soft%20lighting&width=400&height=300&seq=gallery-7&orientation=landscape',
      title: 'Hydrating Treatment',
      description: 'Moisturizing facial therapy'
    },
    {
      id: 8,
      category: 'facilities',
      image: 'https://readdy.ai/api/search-image?query=Modern%20spa%20reception%20area%20with%20elegant%20design%2C%20professional%20front%20desk%2C%20welcoming%20atmosphere%2C%20contemporary%20interior%20with%20natural%20stone%20elements%2C%20clean%20minimalist%20aesthetic&width=400&height=300&seq=gallery-8&orientation=landscape',
      title: 'Reception Area',
      description: 'Welcoming entrance space'
    },
    {
      id: 9,
      category: 'nail',
      image: 'https://readdy.ai/api/search-image?query=Pedicure%20treatment%20session%2C%20client%20feet%20being%20pampered%2C%20modern%20pedicure%20chair%2C%20professional%20nail%20care%20tools%2C%20clean%20salon%20environment%20with%20relaxing%20atmosphere&width=400&height=300&seq=gallery-9&orientation=landscape',
      title: 'Luxury Pedicure',
      description: 'Relaxing foot care treatment'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const [selectedImage, setSelectedImage] = useState<any>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Treatment <span className="font-serif italic text-emerald-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our beautiful facilities and see the exceptional treatments we offer
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-emerald-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <i className="ri-eye-line text-3xl mb-2"></i>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}