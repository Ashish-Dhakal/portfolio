'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      service: 'Spa Package',
      rating: 5,
      text: 'The most relaxing and rejuvenating experience I\'ve ever had! The staff was incredibly professional, and the facilities are absolutely stunning. I left feeling completely refreshed and renewed.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20happy%20woman%20in%20her%2030s%2C%20smiling%2C%20clean%20background%2C%20natural%20lighting%2C%20confident%20and%20relaxed%20expression%2C%20business%20casual%20style&width=100&height=100&seq=testimonial-1&orientation=squarish'
    },
    {
      id: 2,
      name: 'Michael Chen',
      service: 'Massage Therapy',
      rating: 5,
      text: 'I come here monthly for my deep tissue massage. The therapists are skilled and really understand how to work out tension. The ambiance is perfect for relaxation.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20man%20in%20his%2040s%2C%20smiling%2C%20clean%20background%2C%20natural%20lighting%2C%20approachable%20and%20friendly%20expression%2C%20business%20casual%20style&width=100&height=100&seq=testimonial-2&orientation=squarish'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      service: 'Facial Treatment',
      rating: 5,
      text: 'My skin has never looked better! The anti-aging facial was incredible, and the esthetician gave me great advice for my skincare routine at home. Highly recommend!',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20woman%20in%20her%2020s%2C%20smiling%2C%20clean%20background%2C%20natural%20lighting%2C%20youthful%20and%20vibrant%20expression%2C%20modern%20casual%20style&width=100&height=100&seq=testimonial-3&orientation=squarish'
    },
    {
      id: 4,
      name: 'David Thompson',
      service: 'Hair Styling',
      rating: 5,
      text: 'The best haircut I\'ve ever gotten! The stylist listened to exactly what I wanted and delivered beyond my expectations. The whole experience was top-notch.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20man%20in%20his%2030s%2C%20smiling%2C%20clean%20background%2C%20natural%20lighting%2C%20modern%20hairstyle%2C%20confident%20and%20happy%20expression&width=100&height=100&seq=testimonial-4&orientation=squarish'
    },
    {
      id: 5,
      name: 'Lisa Park',
      service: 'Nail Care',
      rating: 5,
      text: 'Perfect manicure and pedicure every time! The attention to detail is amazing, and my nails always look flawless. The nail technicians are true artists.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20woman%20in%20her%2040s%2C%20smiling%2C%20clean%20background%2C%20natural%20lighting%2C%20elegant%20and%20sophisticated%20expression%2C%20professional%20style&width=100&height=100&seq=testimonial-5&orientation=squarish'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Client <span className="font-serif italic text-emerald-600">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about their experience
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-8">
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl text-gray-700 mb-8 italic leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex items-center justify-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover object-top"
                      />
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                        <p className="text-emerald-600 text-sm">{testimonial.service}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300"
          >
            <i className="ri-arrow-left-line text-xl text-gray-700"></i>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300"
          >
            <i className="ri-arrow-right-line text-xl text-gray-700"></i>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-emerald-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">5000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">25+</div>
            <div className="text-gray-600">Expert Staff</div>
          </div>
        </div>
      </div>
    </section>
  );
}