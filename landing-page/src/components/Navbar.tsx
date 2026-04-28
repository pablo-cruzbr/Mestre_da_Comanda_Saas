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

       <nav>
        <a href="/">Home</a>
        <a href="/">Restaurants</a>
        <a href="/">Foods</a>
        <a href="/">Service</a>
       </nav>

       <div>
        <button>
          <FaShoppingCart/>
        </button>
        <button>Register Now</button>
       </div>
    </header>
  )
}

export default Navbar
