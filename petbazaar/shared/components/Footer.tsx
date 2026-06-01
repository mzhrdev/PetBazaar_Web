import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🐾</span>
              <span className="text-xl font-bold">PetBazaar</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted marketplace for pet adoption and sales. Connect with pet lovers and find your perfect companion.
            </p>
          </div>

          {/* Browse */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Browse</h3>
            <ul className="space-y-2.5">
              <li><Link href="/pets" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">All Pets</Link></li>
              <li><Link href="/pets?type=dog" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">Dogs</Link></li>
              <li><Link href="/pets?type=cat" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">Cats</Link></li>
              <li><Link href="/pets?type=other" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">Others</Link></li>
            </ul>
          </div>

          {/* Seller */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">For Sellers</h3>
            <ul className="space-y-2.5">
              <li><Link href="/seller/dashboard" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">Dashboard</Link></li>
              <li><Link href="/seller/add-pet" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">Add Pet</Link></li>
              <li><Link href="/seller/my-pets" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">My Listings</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 PetBazaar. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-green-400 transition-colors duration-200">Facebook</a>
              <a href="#" className="hover:text-green-400 transition-colors duration-200">Twitter</a>
              <a href="#" className="hover:text-green-400 transition-colors duration-200">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
