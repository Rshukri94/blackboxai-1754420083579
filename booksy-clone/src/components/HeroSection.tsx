'use client';

/**
 * HeroSection Component
 * 
 * This component renders the main hero section of the Booksy clone.
 * It includes:
 * - Large background image/gradient
 * - Main headline and subtitle
 * - Call-to-action buttons
 * - Search functionality
 * 
 * Props:
 * - title: Main headline text
 * - subtitle: Supporting text below the headline
 * - ctaText: Text for the primary call-to-action button
 * - backgroundImage: Optional background image URL
 * 
 * To customize:
 * - Replace placeholder text with your actual content
 * - Update background image or gradient
 * - Modify button styles and actions
 */

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundImage?: string;
}

const HeroSection = ({ 
  title = "Book appointments with top-rated professionals", 
  subtitle = "Discover and book beauty & wellness services near you",
  ctaText = "Find Services",
  backgroundImage 
}: HeroSectionProps) => {
  
  const backgroundStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <section 
      className="relative min-h-[600px] bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center text-white"
      style={backgroundStyle}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-lg p-2 shadow-lg">
            {/* Service Input */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="What service are you looking for?"
                className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border-0 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>
            
            {/* Location Input */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Where?"
                className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border-0 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>
            
            {/* Search Button */}
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium whitespace-nowrap">
              {ctaText}
            </button>
          </div>
        </div>

        {/* Popular Services */}
        <div className="text-center">
          <p className="text-gray-300 mb-4">Popular services:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Hair Salon',
              'Barbershop', 
              'Nail Salon',
              'Massage',
              'Brows & Lashes',
              'Tattoo Shop'
            ].map((service) => (
              <button
                key={service}
                className="px-4 py-2 bg-white bg-opacity-20 text-white rounded-full hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm"
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">500K+</div>
            <div className="text-gray-300">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">50K+</div>
            <div className="text-gray-300">Service Providers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">1M+</div>
            <div className="text-gray-300">Appointments Booked</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
