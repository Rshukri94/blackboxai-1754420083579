import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureHighlights from '@/components/FeatureHighlights';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import AppDownloadBanner from '@/components/AppDownloadBanner';
import Footer from '@/components/Footer';

/**
 * For Professionals Page Component
 * 
 * This page is specifically designed for service providers/professionals.
 * It includes:
 * - Header with navigation
 * - Hero section tailored for professionals
 * - Features focused on business benefits
 * - Professional testimonials
 * - Pricing plans
 * - App download promotion
 * - Footer
 * 
 * To customize:
 * - Update hero content for professional-specific messaging
 * - Modify features to highlight business benefits
 * - Add professional-specific sections as needed
 */

export default function ProfessionalsPage() {
  return (
    <div className="min-h-screen">
      {/* Header Navigation */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section - Tailored for professionals */}
        <HeroSection 
          title="Grow your business with powerful booking tools"
          subtitle="Join thousands of professionals who trust us to manage their appointments, payments, and customer relationships."
          ctaText="Start Free Trial"
        />
        
        {/* Professional-focused Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Powerful tools designed to help beauty and wellness professionals grow their business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '📅',
                  title: 'Smart Calendar Management',
                  description: 'Manage your schedule with ease. Sync across devices and never double-book again.'
                },
                {
                  icon: '💰',
                  title: 'Secure Payment Processing',
                  description: 'Accept payments online and in-person. Get paid faster with automatic invoicing.'
                },
                {
                  icon: '📊',
                  title: 'Business Analytics',
                  description: 'Track your performance with detailed reports on bookings, revenue, and customer trends.'
                },
                {
                  icon: '👥',
                  title: 'Customer Management',
                  description: 'Build lasting relationships with customer profiles, history, and automated follow-ups.'
                },
                {
                  icon: '📱',
                  title: 'Mobile App',
                  description: 'Manage your business on the go with our professional mobile app.'
                },
                {
                  icon: '🎯',
                  title: 'Marketing Tools',
                  description: 'Attract new customers with promotions, loyalty programs, and social media integration.'
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

        {/* Success Stories Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                See how professionals are growing their business with our platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah\'s Hair Studio',
                  growth: '+150% bookings',
                  description: 'Increased online bookings by 150% in just 6 months',
                  image: 'SH'
                },
                {
                  name: 'Elite Nail Spa',
                  growth: '+200% revenue',
                  description: 'Doubled revenue with automated marketing and loyalty programs',
                  image: 'EN'
                },
                {
                  name: 'Zen Massage Therapy',
                  growth: '+300% efficiency',
                  description: 'Tripled operational efficiency with smart scheduling',
                  image: 'ZM'
                }
              ].map((story, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {story.image}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.name}</h3>
                  <div className="text-2xl font-bold text-green-600 mb-2">{story.growth}</div>
                  <p className="text-gray-600">{story.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Started in Minutes
              </h2>
              <p className="text-xl text-gray-600">
                Setting up your professional profile is quick and easy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Create Profile',
                  description: 'Set up your professional profile with photos and services'
                },
                {
                  step: '2',
                  title: 'Set Availability',
                  description: 'Configure your working hours and availability preferences'
                },
                {
                  step: '3',
                  title: 'Go Live',
                  description: 'Start accepting bookings from customers immediately'
                },
                {
                  step: '4',
                  title: 'Grow Business',
                  description: 'Use our tools to attract more customers and increase revenue'
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg">
                Start Your Free Trial
              </button>
              <p className="text-gray-500 text-sm mt-2">No credit card required • 30-day free trial</p>
            </div>
          </div>
        </section>
        
        {/* Professional Testimonials */}
        <Testimonials />
        
        {/* Pricing Plans */}
        <Pricing />
        
        {/* App Download Banner */}
        <AppDownloadBanner />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
