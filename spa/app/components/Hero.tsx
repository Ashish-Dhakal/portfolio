'use client';

import { useState } from 'react';
import BookingForm from './BookingForm';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxurious%20spa%20interior%20with%20soft%20lighting%2C%20natural%20stone%20elements%2C%20tropical%20plants%2C%20zen%20atmosphere%2C%20calming%20green%20and%20beige%20tones%2C%20modern%20minimalist%20design%2C%20peaceful%20ambiance%2C%20high-end%20wellness%20center%20aesthetic&width=1920&height=1080&seq=hero-spa-bg&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">
              Serenity <span className="font-serif italic">Spa</span> & Salon
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Discover tranquility and rejuvenation in our luxurious wellness sanctuary
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full transition-all duration-300 whitespace-nowrap">
                View Services
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 rounded-full transition-all duration-300 whitespace-nowrap">
                Gift Cards
              </button>
            </div>
            <div className="flex items-center gap-8 text-gray-200">
              <div className="flex items-center gap-2">
                <i className="ri-star-fill text-yellow-400"></i>
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-map-pin-line"></i>
                <span>Premium Location</span>
              </div>
            </div>
          </div>
          
          <div className="lg:justify-self-end w-full max-w-md">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}