'use client';

/**
 * AppDownloadBanner Component
 * 
 * This component promotes the mobile app download with app store links.
 * It includes:
 * - App store download buttons (placeholder)
 * - Mobile app features
 * - QR code placeholder for easy download
 * - Responsive design
 * 
 * To customize:
 * - Replace placeholder app store links with actual URLs
 * - Update app features and descriptions
 * - Add real QR code for app download
 * - Modify styling to match your brand
 */

const AppDownloadBanner = () => {
  const appFeatures = [
    {
      icon: '📱',
      title: 'Book on the go',
      description: 'Schedule appointments anytime, anywhere'
    },
    {
      icon: '🔔',
      title: 'Smart notifications',
      description: 'Never miss an appointment with timely reminders'
    },
    {
      icon: '⭐',
      title: 'Rate & review',
      description: 'Share your experience and help others'
    },
    {
      icon: '💳',
      title: 'Easy payments',
      description: 'Secure and convenient payment options'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Take bookings with you everywhere
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Download our mobile app for the ultimate booking experience. 
              Manage appointments, discover new services, and stay connected with your favorite professionals.
            </p>

            {/* App Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {appFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* App Store Button */}
              <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-3 font-medium">
                <div className="text-2xl">🍎</div>
                <div className="text-left">
                  <div className="text-xs text-gray-600">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </button>

              {/* Google Play Button */}
              <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-3 font-medium">
                <div className="text-2xl">📱</div>
                <div className="text-left">
                  <div className="text-xs text-gray-600">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold">4.8★</div>
                <div className="text-gray-400 text-sm">App Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1M+</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-gray-400 text-sm">Reviews</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-64 h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="h-full bg-gradient-to-b from-gray-50 to-white p-6">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-6 text-black text-sm">
                      <span>9:41</span>
                      <span>📶 📶 🔋</span>
                    </div>

                    {/* App Header */}
                    <div className="text-center mb-6">
                      <div className="text-2xl font-bold text-black mb-2">booksy</div>
                      <div className="text-gray-600">Find & Book Services</div>
                    </div>

                    {/* Search Bar */}
                    <div className="bg-gray-100 rounded-lg p-3 mb-6">
                      <div className="text-gray-500 text-sm">Search services...</div>
                    </div>

                    {/* Service Categories */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        { name: 'Hair', emoji: '💇' },
                        { name: 'Nails', emoji: '💅' },
                        { name: 'Massage', emoji: '💆' },
                        { name: 'Brows', emoji: '👁️' }
                      ].map((service) => (
                        <div key={service.name} className="bg-gray-100 rounded-lg p-3 text-center">
                          <div className="text-xl mb-1">{service.emoji}</div>
                          <div className="text-xs text-gray-700">{service.name}</div>
                        </div>
                      ))}
                    </div>

                    {/* Recent Bookings */}
                    <div className="space-y-3">
                      <div className="text-sm font-semibold text-gray-900">Recent Bookings</div>
                      {[
                        { name: 'Hair Salon Pro', time: 'Today 2:00 PM' },
                        { name: 'Nail Studio', time: 'Tomorrow 10:00 AM' }
                      ].map((booking, index) => (
                        <div key={index} className="bg-black text-white rounded-lg p-3">
                          <div className="font-medium text-sm">{booking.name}</div>
                          <div className="text-xs text-gray-300">{booking.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg hidden xl:block">
                <div className="w-24 h-24 bg-black rounded-lg flex items-center justify-center text-white text-xs text-center">
                  QR Code<br/>Placeholder
                </div>
                <div className="text-center mt-2 text-xs text-gray-600">
                  Scan to download
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">
              Join millions of satisfied users
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Experience the convenience of mobile booking. Download the app today and discover why millions of users trust us for their beauty and wellness needs.
            </p>
            
            {/* User Avatars */}
            <div className="flex justify-center items-center space-x-2 mb-4">
              {['👤', '👤', '👤', '👤', '👤'].map((avatar, index) => (
                <div key={index} className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  {avatar}
                </div>
              ))}
              <div className="text-sm text-gray-300 ml-4">
                +1M happy users
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadBanner;
