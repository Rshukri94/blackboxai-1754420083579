'use client';

/**
 * FeatureHighlights Component
 * 
 * This component showcases the main features and services of the platform.
 * It includes:
 * - Grid layout of feature cards
 * - Icons represented as styled elements (no external icon libraries)
 * - Feature titles and descriptions
 * - Hover effects and animations
 * 
 * To customize:
 * - Update the features array with your actual features
 * - Replace placeholder descriptions with real content
 * - Modify styling and colors to match your brand
 * - Add or remove features as needed
 */

const features = [
  {
    id: 1,
    title: 'Easy Booking',
    description: 'Book appointments 24/7 with just a few clicks. No phone calls needed.',
    icon: '📅',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    id: 2,
    title: 'Verified Professionals',
    description: 'All service providers are verified and rated by real customers.',
    icon: '✓',
    color: 'bg-green-50 border-green-200'
  },
  {
    id: 3,
    title: 'Instant Confirmation',
    description: 'Get immediate booking confirmation and reminders via SMS or email.',
    icon: '⚡',
    color: 'bg-yellow-50 border-yellow-200'
  },
  {
    id: 4,
    title: 'Secure Payments',
    description: 'Pay safely online or in-person. Your payment information is always protected.',
    icon: '🔒',
    color: 'bg-purple-50 border-purple-200'
  },
  {
    id: 5,
    title: 'Reviews & Ratings',
    description: 'Read honest reviews from real customers to make informed decisions.',
    icon: '⭐',
    color: 'bg-orange-50 border-orange-200'
  },
  {
    id: 6,
    title: 'Flexible Scheduling',
    description: 'Reschedule or cancel appointments easily with our flexible policies.',
    icon: '🔄',
    color: 'bg-pink-50 border-pink-200'
  }
];

const FeatureHighlights = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the features that make booking beauty and wellness services easier than ever
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`bg-white rounded-xl p-6 shadow-sm border-2 ${feature.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Feature Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm border">
                  {feature.icon}
                </div>
              </div>

              {/* Feature Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <div className="mt-4">
                <button className="text-black font-medium hover:underline transition-all duration-200">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Join thousands of satisfied customers who trust us with their beauty and wellness needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                Book Now
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors font-medium">
                Browse Services
              </button>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Popular Service Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Hair Salon', emoji: '💇' },
              { name: 'Barbershop', emoji: '✂️' },
              { name: 'Nail Salon', emoji: '💅' },
              { name: 'Massage', emoji: '💆' },
              { name: 'Brows & Lashes', emoji: '👁️' },
              { name: 'Tattoo Shop', emoji: '🎨' },
              { name: 'Skin Care', emoji: '🧴' },
              { name: 'Wellness', emoji: '🧘' }
            ].map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-200 border cursor-pointer"
              >
                <div className="text-2xl mb-2">{category.emoji}</div>
                <div className="text-sm font-medium text-gray-900">{category.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
