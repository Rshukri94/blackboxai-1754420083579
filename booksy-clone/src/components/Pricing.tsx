'use client';

/**
 * Pricing Component
 * 
 * This component displays pricing plans for service providers (professionals).
 * It includes:
 * - Multiple pricing tiers with features
 * - Popular plan highlighting
 * - Feature comparison
 * - Call-to-action buttons
 * 
 * To customize:
 * - Update pricing plans with actual prices and features
 * - Modify plan names and descriptions
 * - Add or remove features as needed
 * - Update styling to match your brand
 */

const pricingPlans = [
  {
    id: 1,
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for getting started with online bookings',
    features: [
      'Up to 50 bookings per month',
      'Basic calendar management',
      'Email notifications',
      'Customer reviews',
      'Mobile app access',
      'Basic analytics'
    ],
    notIncluded: [
      'SMS notifications',
      'Advanced analytics',
      'Marketing tools',
      'Priority support'
    ],
    buttonText: 'Get Started Free',
    buttonStyle: 'border-2 border-black text-black hover:bg-black hover:text-white',
    popular: false
  },
  {
    id: 2,
    name: 'Professional',
    price: '$29',
    period: 'per month',
    description: 'Ideal for growing businesses and busy professionals',
    features: [
      'Unlimited bookings',
      'Advanced calendar management',
      'Email & SMS notifications',
      'Customer reviews & ratings',
      'Mobile app access',
      'Advanced analytics & reports',
      'Marketing tools & promotions',
      'Online payment processing',
      'Custom booking page',
      'Priority customer support'
    ],
    notIncluded: [
      'White-label solution',
      'API access'
    ],
    buttonText: 'Start Free Trial',
    buttonStyle: 'bg-black text-white hover:bg-gray-800',
    popular: true
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '$99',
    period: 'per month',
    description: 'For large businesses and multi-location operations',
    features: [
      'Everything in Professional',
      'Multi-location management',
      'Staff management tools',
      'White-label solution',
      'API access & integrations',
      'Custom reporting',
      'Dedicated account manager',
      '24/7 priority support',
      'Custom integrations',
      'Advanced security features',
      'Training & onboarding'
    ],
    notIncluded: [],
    buttonText: 'Contact Sales',
    buttonStyle: 'border-2 border-black text-black hover:bg-black hover:text-white',
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business. Start free and upgrade as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl shadow-sm border-2 p-8 relative ${
                plan.popular 
                  ? 'border-black transform scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 ml-2">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-gray-600">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, index) => (
                    <li key={`not-${index}`} className="flex items-start opacity-50">
                      <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-gray-400 text-sm">✕</span>
                      </div>
                      <span className="text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and you'll be charged or credited accordingly."
              },
              {
                question: "Is there a setup fee?",
                answer: "No, there are no setup fees for any of our plans. You only pay the monthly subscription fee."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise customers."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-black text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to grow your business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Join thousands of professionals who trust us to manage their bookings and grow their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors font-medium">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
