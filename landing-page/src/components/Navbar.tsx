import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'
import { MdOutlineRestaurant } from 'react-icons/md'

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-4 px-5 lg:px-14">
       <div className="flex items-center gap-1.5 text-2xl font-bold text-orange-500">
        <MdOutlineRestaurant/>
        <span>BiteHub</span>
       </div>

       <nav className="hidden md:flex space-x-8 font-medium">
        <a href="/" className="hover:text-orange-400">Home</a>
        <a href="/" className="hover:text-orange-400">Restaurants</a>
        <a href="/" className="hover:text-orange-400">Foods</a>
        <a href="/" className="hover:text-orange-400">Service</a>
       </nav>

       <div className="flex items-center space-x-4">
        <button className="hidden md:flex text-orange-400 text-xl">
          <FaShoppingCart/>
        </button>
        <button className="bg-orange-500 hover:bg-orange-600 transition text-white py-2 px-4 rounded-full text-sm font-medium">Register Now</button>
       </div>
    </header>
  )
}

export default Navbar
