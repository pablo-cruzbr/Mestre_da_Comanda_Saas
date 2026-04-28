import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'
import { MdOutlineRestaurant } from 'react-icons/md'
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-4 px-5 lg:px-14 bg-white dark:bg-gray-900 transition-colors duration-300">
        
        <div className="flex items-center gap-1.5 text-2xl font-bold text-orange-500">
          <MdOutlineRestaurant/>
          <span>BiteHub</span>
        </div>
        <nav className="hidden md:flex space-x-8 font-medium">
          <a href="/" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">Home</a>
          <a href="/" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">Restaurants</a>
          <a href="/" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">Foods</a>
          <a href="/" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">Service</a>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle/>
        
          <button className="hidden md:flex text-orange-500 dark:text-orange-400 text-xl hover:scale-110 transition-transform" aria-label="Cart">
            <FaShoppingCart/>
          </button>
          
          <button className="bg-orange-500 hover:bg-orange-600 transition-all text-white py-2 px-4 rounded-full text-sm font-semibold shadow-md active:scale-95">
            Register Now
          </button>
        </div>
    </header>
  )
}

export default Navbar