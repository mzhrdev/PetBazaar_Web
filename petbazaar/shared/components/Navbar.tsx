'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <span className="text-2xl font-bold text-green-600">🐾</span>
            <span className="text-xl font-bold text-gray-900 hidden sm:inline">PetBazaar</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/pets" 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
            >
              Browse Pets
            </Link>
            <Link 
              href="/seller/dashboard" 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
            >
              Sell
            </Link>
            <Link 
              href="/profile" 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
            >
              Profile
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/login">
              <Button variant="outline" size="sm">Login</Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 border-t border-gray-200 pt-4">
            <Link 
              href="/" 
              className="block px-4 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/pets" 
              className="block px-4 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg font-medium transition-colors"
            >
              Browse Pets
            </Link>
            <Link 
              href="/seller/dashboard" 
              className="block px-4 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg font-medium transition-colors"
            >
              Sell
            </Link>
            <Link 
              href="/profile" 
              className="block px-4 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg font-medium transition-colors"
            >
              Profile
            </Link>
            <div className="flex flex-col space-y-2 px-4 pt-3 border-t border-gray-200 mt-3">
              <Link href="/login" className="block">
                <Button variant="outline" size="sm" className="w-full">Login</Button>
              </Link>
              <Link href="/register" className="block">
                <Button size="sm" className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
