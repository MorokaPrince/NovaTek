import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="relative bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-800 transition-colors">
              NovaTek
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-300">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-300">
              Services
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-300">
              Case Studies
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-300">
              Contact
            </Link>
            <Link href="/services" className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-2 text-sm font-medium hover:from-gray-800 hover:to-gray-700 transition-all duration-300 hover-lift">
              Get Started
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
              aria-label="Open mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;