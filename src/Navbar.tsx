import { ShoppingBag, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b-2 border-gray-100 bg-white dark:bg-gray-900 dark:border-gray-700">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo/Brand */}
        <Link to="/" className="flex items-center gap-2">
          <ShoppingBag className="w-10 h-10 text-blue-700 dark:text-gray-400" />
          <span className="text-2xl md:text-3xl font-bold dark:text-white">
            Trendify
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="md:flex sm:hidden gap-8 items-center">
          <li>
            <Link
              to="/"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button - Added z-index to ensure it stays clickable */}
        <button
          className="md:hidden p-2 text-gray-800 dark:text-gray-200 relative z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Navigation - Fixed positioning and styling */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white dark:bg-gray-900 shadow-lg z-40">
            <ul className="flex flex-col gap-4 p-6">
              <li>
                <Link
                  to="/"
                  className="block py-3 text-lg text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="block py-3 text-lg text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  onClick={toggleMenu}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-3 text-lg text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
