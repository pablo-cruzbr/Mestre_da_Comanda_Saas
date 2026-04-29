import React from 'react'
import img from '../assets/Hero.jpg'
import { BsCartCheckFill } from 'react-icons/bs'
import { FaLeaf, FaMapMarkedAlt } from 'react-icons/fa'
import { GiFoodTruck } from 'react-icons/gi'
import { MdDeliveryDining } from 'react-icons/md'

const Hero = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between px-5 lg:px-14 py-10 gap-10 transition-colors duration-300">
      
      <div className="lg:w-1/2 w-full text-center lg:text-left">
        <div className="inline-flex items-center mb-4 text-orange-500 font-semibold bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-full text-sm">
          <FaLeaf className="mr-2"/> People trust us 
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          The <span className="text-orange-500">Fastest</span> Food
          <br /> <span className="text-orange-500">Delivery</span> Service
        </h1>

        <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-lg mx-auto lg:mx-0">
          Enter your location to find the nearest restaurants and enjoy delicious food delivered to your door.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 bg-gray-100 dark:bg-gray-800 p-2 rounded-2xl sm:rounded-full max-w-xl">
          <div className="flex items-center flex-1 px-4 w-full">
            <FaMapMarkedAlt className="text-orange-500 mr-2 text-xl"/>
            <input 
              type="text" 
              placeholder='San Francisco, USA' 
              className="outline-none w-full bg-transparent text-sm md:text-base py-2" 
            />
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-white font-bold rounded-full px-8 py-3 w-full sm:w-auto shadow-lg shadow-orange-500/30">
            Find Food
          </button>
        </div>
      </div>

      <div className='lg:w-1/2 w-full relative flex justify-center'>
        <div className="relative">
          <img 
            src={img} 
            alt="Delivery Guy" 
          className="rounded-full w-[300px] h-[300px] md:w-[450px] md:h-[450px] object-cover border-4 border-orange-500/20 shadow-2xl"
          />
          
          <div className="absolute -top-4 -right-4 md:right-0 bg-white dark:bg-gray-800 text-black dark:text-white text-xs md:text-sm font-bold px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl border border-gray-100 dark:border-gray-700"> 
            <GiFoodTruck className="text-orange-500 text-lg"/> Quality Food
          </div>
          
          <div className="absolute top-1/2 -left-10 md:-left-5 bg-white dark:bg-gray-800 text-black dark:text-white text-xs md:text-sm font-bold px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl border border-gray-100 dark:border-gray-700">
            <BsCartCheckFill className="text-orange-500 text-lg"/> Easy to Order
          </div>

          <div className="absolute -bottom-4 right-4 bg-white dark:bg-gray-800 text-black dark:text-white text-xs md:text-sm font-bold px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl border border-gray-100 dark:border-gray-700">
            <MdDeliveryDining className="text-orange-500 text-lg"/> Fastest Delivery
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero