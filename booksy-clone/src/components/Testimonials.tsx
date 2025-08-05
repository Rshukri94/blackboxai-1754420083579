'use client';

import { useState, useEffect } from 'react';

/**
 * Testimonials Component
 * 
 * This component displays customer testimonials in a carousel/slider format.
 * It includes:
 * - Customer testimonials with quotes, names, and ratings
 * - Auto-rotating carousel functionality
 * - Manual navigation controls
 * - Responsive design for mobile and desktop
 * 
 * To customize:
 * - Update the testimonials array with real customer feedback
 * - Replace placeholder names and locations with actual data
 * - Modify styling and colors to match your brand
 * - Add customer photos if available
 */

const testimonials = [
  {
    id: 1,
    quote: "Amazing service! I found the perfect hair stylist through this platform. The booking process was so easy and the results were fantastic.",
    author: "Sarah Johnson",
    location: "New York, NY",
    service: "Hair Styling",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: 2,
    quote: "I've been using this platform for over a year now. The quality of professionals is consistently high and the convenience is unmatched.",
    author: "Michael Chen",
    location: "Los Angeles, CA", 
    service: "Barbershop",
    rating: 5,
    avatar: "MC"
  },
  {
    id: 3,
    quote: "The best part is being able to read real reviews before booking. I always know what to expect and have never been disappointed.",
    author: "Emily Rodriguez",
    location: "Chicago, IL",
    service: "Nail Salon",
    rating: 5,
    avatar: "ER"
  },
  {
    id: 4,
    quote: "As a busy professional, I love that I can book appointments 24/7. The reminder system ensures I never miss an appointment.",
    author: "David Thompson",
    location: "Miami, FL",
    service: "Massage Therapy",
    rating: 5,
    avatar: "DT"
  },
  {
    id: 5,
    quote: "The platform helped me discover amazing local businesses I never knew existed. The variety of services is incredible.",
    author: "Jessica Park",
    location: "Seattle, WA",
    service: "Brows & Lashes",
    rating: 5,
    avatar: "JP"
  },
  {
    id: 6,
    quote: "Customer service is top-notch. When I had to reschedule last minute, they made it so easy and stress-free.",
    author: "Robert Wilson",
    location: "Austin, TX",
    service: "Tattoo Shop",
    rating: 5,
    avatar: "RW"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about their experience.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center min-h-[300px] flex flex-col justify-center">
            <div className="mb-6">
              {renderStars(testimonials[currentIndex].rating)}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              {/* Avatar */}
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-semibold">
                {testimonials[currentIndex].avatar}
              </div>
              
              {/* Author Info */}
              <div className="text-left">
                <div className="font-semibold text-gray-900">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-gray-600 text-sm">
                  {testimonials[currentIndex].location} • {testimonials[currentIndex].service}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-black' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">25K+</div>
            <div className="text-gray-600">Reviews</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">99%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Ready to join thousands of satisfied customers?</p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
            Book Your First Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
