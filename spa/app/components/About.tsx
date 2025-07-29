'use client';

export default function About() {
  const features = [
    {
      icon: 'ri-award-line',
      title: 'Award-Winning',
      description: 'Recognized for excellence in spa and wellness services'
    },
    {
      icon: 'ri-team-line',
      title: 'Expert Staff',
      description: 'Licensed professionals with years of experience'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Natural Products',
      description: 'Organic and eco-friendly treatments for your wellbeing'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Safety First',
      description: 'Highest standards of hygiene and safety protocols'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              About <span className="font-serif italic text-emerald-600">Serenity</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over 15 years, Serenity Spa & Salon has been a sanctuary of tranquility and rejuvenation. 
              Our mission is to provide exceptional wellness experiences that restore balance to your life 
              through the perfect blend of ancient healing traditions and modern therapeutic techniques.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Located in the heart of the city, our luxurious facility spans 8,000 square feet of 
              carefully designed spaces that promote relaxation and renewal. From our skilled therapists 
              to our premium organic products, every detail is crafted to ensure your complete satisfaction.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${feature.icon} text-emerald-600 text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://readdy.ai/api/search-image?query=Serene%20spa%20interior%20with%20natural%20lighting%2C%20modern%20zen%20design%2C%20clean%20lines%2C%20professional%20spa%20therapist%20preparing%20treatment%20room%2C%20calming%20atmosphere%20with%20green%20plants%20and%20earth%20tones&width=300&height=400&seq=about-1&orientation=portrait"
                  alt="Spa Interior"
                  className="w-full rounded-2xl shadow-lg object-cover object-top"
                />
                <img 
                  src="https://readdy.ai/api/search-image?query=Luxury%20spa%20relaxation%20area%20with%20comfortable%20seating%2C%20natural%20stone%20elements%2C%20soft%20lighting%2C%20peaceful%20environment%2C%20modern%20minimalist%20design%20with%20green%20accents&width=300&height=200&seq=about-2&orientation=landscape"
                  alt="Relaxation Area"
                  className="w-full rounded-2xl shadow-lg object-cover object-top"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20spa%20treatment%20products%20display%2C%20organic%20skincare%20items%2C%20natural%20wellness%20products%2C%20clean%20modern%20presentation%2C%20eco-friendly%20packaging%20with%20green%20and%20white%20aesthetic&width=300&height=200&seq=about-3&orientation=landscape"
                  alt="Spa Products"
                  className="w-full rounded-2xl shadow-lg object-cover object-top"
                />
                <img 
                  src="https://readdy.ai/api/search-image?query=Spa%20reception%20area%20with%20elegant%20design%2C%20welcoming%20atmosphere%2C%20professional%20front%20desk%2C%20modern%20interior%20with%20natural%20elements%2C%20calming%20color%20scheme&width=300&height=400&seq=about-4&orientation=portrait"
                  alt="Reception"
                  className="w-full rounded-2xl shadow-lg object-cover object-top"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-emerald-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}