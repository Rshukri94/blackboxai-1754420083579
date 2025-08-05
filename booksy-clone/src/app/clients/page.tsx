import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureHighlights from '@/components/FeatureHighlights';
import Testimonials from '@/components/Testimonials';
import AppDownloadBanner from '@/components/AppDownloadBanner';
import Footer from '@/components/Footer';

/**
 * For Clients Page Component
 * 
 * This page is specifically designed for customers/clients who want to book services.
 * It includes:
 * - Header with navigation
 * - Hero section tailored for clients
 * - Features focused on client benefits
 * - Client testimonials
 * - App download promotion
 * - Footer
 * 
 * To customize:
 * - Update hero content for client-specific messaging
 * - Modify features to highlight client benefits
 * - Add client-specific sections as needed
 */

export default function ClientsPage() {
  return (
    <div className="min-h-screen">
      {/* Header Navigation */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section - Tailored for clients */}
        <HeroSection 
          title="Find and book your perfect appointment"
          subtitle="Discover top-rated beauty and wellness professionals in your area. Book instantly, pay securely, and enjoy amazing services."
          ctaText="Book Now"
        />
        
        {/* Client-focused Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Clients Love Us
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the easiest way to book beauty and wellness appointments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🔍',
                  title: 'Discover Amazing Professionals',
                  description: 'Browse thousands of verified beauty and wellness professionals with real reviews and ratings.'
                },
                {
                  icon: '📅',
                  title: 'Book Instantly',
                  description: 'See real-time availability and book appointments 24/7 with just a few clicks.'
                },
                {
                  icon: '💳',
                  title: 'Secure Payments',
                  description: 'Pay safely online or in-person. Your payment information is always protected.'
                },
                {
                  icon: '🔔',
                  title: 'Smart Reminders',
                  description: 'Never miss an appointment with automatic SMS and email reminders.'
                },
                {
                  icon: '⭐',
                  title: 'Rate & Review',
                  description: 'Share your experience and help other clients make informed decisions.'
                },
                {
                  icon: '🎁',
                  title: 'Exclusive Deals',
                  description: 'Access special offers and discounts from your favorite professionals.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600">
                Booking your next appointment is easier than ever
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Search & Discover',
                  description: 'Find the perfect service and professional near you using our smart search.'
                },
                {
                  step: '2',
                  title: 'Book & Pay',
                  description: 'Choose your preferred time slot and pay securely online or in-person.'
                },
                {
                  step: '3',
                  title: 'Enjoy & Review',
                  description: 'Enjoy your service and share your experience with the community.'
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Customer Testimonials */}
        <Testimonials />
        
        {/* Popular Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Popular Services
              </h2>
              <p className="text-xl text-gray-600">
                Discover the most booked services in your area
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'Haircut & Styling', emoji: '💇‍♀️', bookings: '50K+' },
                { name: 'Manicure & Pedicure', emoji: '💅', bookings: '40K+' },
                { name: 'Massage Therapy', emoji: '💆‍♀️', bookings: '35K+' },
                { name: 'Facial Treatment', emoji: '🧴', bookings: '30K+' },
                { name: 'Eyebrow Shaping', emoji: '👁️', bookings: '25K+' },
                { name: 'Eyelash Extensions', emoji: '👁️‍🗨️', bookings: '20K+' }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <div className="text-3xl mb-2">{service.emoji}</div>
                  <div className="font-medium text-gray-900 text-sm mb-1">{service.name}</div>
                  <div className="text-xs text-gray-500">{service.bookings} bookings</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* App Download Banner */}
        <AppDownloadBanner />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
