'use client';

import Link from 'next/link';
import { useState } from 'react';

/**
 * Header Component
 * 
 * This component renders the main navigation header for the Booksy clone.
 * It includes:
 * - Logo (placeholder text-based)
 * - Navigation menu with links to Home, For Clients, and For Professionals
 * - Mobile responsive hamburger menu
 * - Search functionality placeholder
 * 
 * To customize:
 * - Replace "booksy" text with your actual logo
 * - Update navigation links as needed
 * - Modify styling classes to match your brand colors
 */

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-black">
                booksy
              </div>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services or business..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <div className="w-5 h-5 bg-black rounded text-white text-xs flex items-center justify-center">
                    🔍
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/clients" 
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              For Clients
            </Link>
            <Link 
              href="/professionals" 
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              For Professionals
            </Link>
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Sign In
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transform transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-current mt-1 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-current mt-1 transform transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            {/* Mobile Search */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search services or business..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <Link 
                href="/" 
                className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/clients" 
                className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                For Clients
              </Link>
              <Link 
                href="/professionals" 
                className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                For Professionals
              </Link>
              <button className="w-full text-left px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
