'use client';

export default function Services() {
  const services = [
    {
      icon: 'ri-hand-heart-line',
      title: 'Massage Therapy',
      description: 'Relax and rejuvenate with our therapeutic massage treatments',
      treatments: ['Swedish Massage', 'Deep Tissue', 'Hot Stone', 'Aromatherapy'],
      price: 'From $80',
      image: 'https://readdy.ai/api/search-image?query=Professional%20massage%20therapy%20treatment%20room%20with%20warm%20lighting%2C%20natural%20stone%20elements%2C%20relaxing%20spa%20atmosphere%2C%20clean%20modern%20design%2C%20therapeutic%20massage%20table%20with%20soft%20towels%20and%20essential%20oils&width=400&height=300&seq=massage-service&orientation=landscape'
    },
    {
      icon: 'ri-heart-3-line',
      title: 'Facial Treatments',
      description: 'Revitalize your skin with our premium facial services',
      treatments: ['Anti-Aging Facial', 'Hydrating Treatment', 'Acne Treatment', 'Brightening Facial'],
      price: 'From $90',
      image: 'https://readdy.ai/api/search-image?query=Luxurious%20facial%20treatment%20room%20with%20professional%20skincare%20equipment%2C%20clean%20white%20and%20green%20color%20scheme%2C%20modern%20spa%20aesthetic%2C%20calming%20environment%20with%20natural%20lighting%20and%20plants&width=400&height=300&seq=facial-service&orientation=landscape'
    },
    {
      icon: 'ri-hand-coin-line',
      title: 'Nail Care',
      description: 'Perfect your look with our professional nail services',
      treatments: ['Manicure', 'Pedicure', 'Gel Polish', 'Nail Art'],
      price: 'From $45',
      image: 'https://readdy.ai/api/search-image?query=Modern%20nail%20salon%20station%20with%20elegant%20manicure%20setup%2C%20clean%20white%20surfaces%2C%20professional%20nail%20care%20tools%2C%20soft%20lighting%2C%20minimalist%20design%20with%20green%20accent%20colors&width=400&height=300&seq=nail-service&orientation=landscape'
    },
    {
      icon: 'ri-scissors-line',
      title: 'Hair Styling',
      description: 'Transform your style with our expert hair services',
      treatments: ['Haircut & Style', 'Hair Coloring', 'Hair Treatment', 'Special Occasion'],
      price: 'From $60',
      image: 'https://readdy.ai/api/search-image?query=Contemporary%20hair%20salon%20with%20modern%20styling%20chairs%2C%20professional%20hair%20care%20equipment%2C%20clean%20minimalist%20design%2C%20natural%20lighting%2C%20elegant%20green%20and%20white%20color%20palette&width=400&height=300&seq=hair-service&orientation=landscape'
    },
    {
      icon: 'ri-body-scan-line',
      title: 'Body Treatments',
      description: 'Pamper yourself with our luxurious body care services',
      treatments: ['Body Wrap', 'Exfoliation', 'Cellulite Treatment', 'Tanning'],
      price: 'From $100',
      image: 'https://readdy.ai/api/search-image?query=Spa%20body%20treatment%20room%20with%20professional%20massage%20table%2C%20natural%20stone%20elements%2C%20soft%20ambient%20lighting%2C%20zen%20atmosphere%2C%20green%20plants%20and%20calming%20earth%20tones&width=400&height=300&seq=body-service&orientation=landscape'
    },
    {
      icon: 'ri-gift-line',
      title: 'Spa Packages',
      description: 'Indulge in our comprehensive wellness packages',
      treatments: ['Couples Package', 'Bridal Package', 'Wellness Day', 'Mother\'s Day Special'],
      price: 'From $200',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20spa%20package%20setup%20with%20multiple%20treatment%20elements%2C%20elegant%20presentation%2C%20premium%20spa%20amenities%2C%20sophisticated%20interior%20design%2C%20warm%20welcoming%20atmosphere%20with%20natural%20elements&width=400&height=300&seq=package-service&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Our <span className="font-serif italic text-emerald-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of wellness and beauty treatments designed to rejuvenate your mind, body, and spirit
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <i className={`${service.icon} text-white text-xl`}></i>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  <span className="text-emerald-600 font-medium">{service.price}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Available Treatments:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.treatments.map((treatment, idx) => (
                      <span key={idx} className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                        {treatment}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 whitespace-nowrap">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}