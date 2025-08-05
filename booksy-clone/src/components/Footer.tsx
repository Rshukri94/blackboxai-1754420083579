'use client';

import Link from 'next/link';

/**
 * Footer Component
 * 
 * This component renders the website footer with navigation links and information.
 * It includes:
 * - Company information and logo
 * - Navigation links organized in columns
 * - Social media links (placeholder)
 * - Newsletter signup
 * - Copyright information
 * 
 * To customize:
 * - Update company information and links
 * - Replace placeholder social media links with actual URLs
 * - Modify newsletter signup functionality
 * - Update copyright information
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'For Customers',
      links: [
        { name: 'Find Services', href: '/services' },
        { name: 'Book Appointment', href: '/book' },
        { name: 'Mobile App', href: '/app' },
        { name: 'Gift Cards', href: '/gift-cards' },
        { name: 'Reviews', href: '/reviews' }
      ]
    },
    {
      title: 'For Professionals',
      links: [
        { name: 'Join as Professional', href: '/professionals' },
        { name: 'Business Tools', href: '/business-tools' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Success Stories', href: '/success-stories' },
        { name: 'Resources', href: '/resources' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Blog', href: '/blog' },
        { name: 'Investors', href: '/investors' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Safety', href: '/safety' },
        { name: 'Community Guidelines', href: '/guidelines' },
        { name: 'Report Issue', href: '/report' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'YouTube', href: '#', icon: '📺' }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter signup logic here
    alert('Newsletter signup functionality would be implemented here');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href="/" className="text-2xl font-bold">
                booksy
              </Link>
              <p className="mt-4 text-gray-400 max-w-md">
                The world's leading platform for booking beauty and wellness appointments. 
                Connect with top-rated professionals in your area.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App Download Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Download Our App</h3>
              <p className="text-gray-400">Book appointments on the go</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                <span className="text-xl">🍎</span>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="font-medium">App Store</div>
                </div>
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                <span className="text-xl">📱</span>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Booksy Clone. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs">
              This is a demo website created for educational purposes. 
              All content is placeholder and not affiliated with the actual Booksy platform.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
